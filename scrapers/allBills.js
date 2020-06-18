const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://www.govtrack.us/congress/bills/#bystatus';
  await page.goto(url);
  await page.screenshot({path: 'example.png'});

  //h2
  const h2 = await page.evaluate(() => Array.from(
    document.querySelectorAll('h2')).map(all => all.innerText));
    
    //content
  const content = await page.evaluate(() => Array.from(
    document.querySelectorAll('a')).map(all => all.innerText));


    

  console.log(h2)
  console.log(content);
  await browser.close();
})();


// https://www.govtrack.us/congress/bills/116/hres109
// https://www.govtrack.us/congress/bills/116/hr6201

// https://projects.propublica.org/represent/votes/116/senate/2/117  