// install pupeteer in terminal
// npm i puppeteer or "yarn add puppeteer"

url = "https://courseupload.net/advanced-stock-trading-course-strategies-freedow200321";

const puppeteer = require("puppeteer");
(async () => {
  const browser= await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  const title = await page.title();
  const url = await page.url();
  await browser.close();

})();