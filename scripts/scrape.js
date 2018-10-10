//Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

// app.get("/scrape", function(req, res) {
//     axios.get("https://www.formula1.com/en/latest/all.html").then(function(response) {
//         var $ = cheerio.load(response.data);

//         $("div.f1-latest-listing--grid-item").each(function(i, element) {
//            var result = {};
           
//            result.title = $(this)
//             .children(".f1-cc--caption .f1--s")
//             .text();
//            result.link = $(this)
//             .children("a")
//             .attr("href")
//             console.log(result);

//             db.Headline.create(result)
//             .then(function(dbHeadline) {
//               // View the added result in the console
//               console.log(dbHeadline);
//             })
//             .catch(function(err) {
//               // If an error occurred, send it to the client
//               return res.json(err);
//             });
//         });

//         res.send("Scrape Complete");
//     });
// });
var BASEURL = "https://www.formula1.com";
var scrape = function() {
    return axios.get("https://www.formula1.com/en/latest/all.html").then(function(res) {
      
      var $ = cheerio.load(res.data);
      var articles = [];
      $("div.f1-latest-listing--grid-item").each(function(i, element) {
  
        var head = $(this)
          .children("a")
          .children(".f1-cc--caption")
          .children(".no-margin")
          .text()
          .trim();
          console.log(head);
  
        var url = $(this)
          .children("a")
          .attr("href");
          console.log(url);
        // var sum = $(this)
        //   .children(".summary")
        //   .text()
        //   .trim();
        
        // if (head && url) {
  
        //   var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        //   var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
  
          var dataToAdd = {
            headline: head,
            // summary: sumNeat,
            url: BASEURL + url
            
          };
  
          articles.push(dataToAdd);
          console.log(dataToAdd);
         
        // }
      });
      return articles;
    
      
    });
    
  };

module.exports = scrape;