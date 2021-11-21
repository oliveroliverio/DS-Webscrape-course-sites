// install pupeteer in terminal
// npm i puppeteer or "yarn add puppeteer"

// url = "https://courseupload.net/advanced-stock-trading-course-strategies-freedow200321";
// url = 'https://youtube.com'



const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://courseupload.net/advanced-stock-trading-course-strategies-freedow200321"
  );
  // const title = await page.title();
  // const url = await page.url();
  // stateChange();
  // console.log(title, url);

   await page.evaluate(() => {
     let elements = $("span.collapseomatic").toArray();
     for (i = 0; i < elements.length; i++) {
       console.log(elements[i])
      //  $(elements[i]).click();
     }
   });
   console.log("end")

})();

// --------------notes-----------------
 // chevron class id: collapseomatic colomat-visited
  // dl links, <a>, class = responsiveInfoTable


//--------------archive--------------
// function stateChange(newState) {
//   setTimeout(function () {
//     if (newState == -1) {
//       alert("wait 5 seconds");
//     }
//   }, 5000);
// }
