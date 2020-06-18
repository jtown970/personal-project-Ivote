const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://projects.propublica.org/represent/votes/116/all/house';
  await page.goto(url);
  await page.screenshot({path: 'example.png'});

  //all house votes in blocks
  const allHouseVotes = await page.evaluate(() => Array.from(
    document.querySelectorAll('div.card')).map(all => all.innerText));
    
  const resultOfVote = await page.evaluate(() => Array.from(
    document.querySelectorAll('div.card span.vote-result')).map(all => all.innerText));

    const infoBloc = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.card div.info-bloc')).map(all => all.innerText));
   
    const voteDate = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.card div.bar-bloc div.desktop-date')).map(all => all.innerText));

    const yesVotes = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.card div.bar-bloc div.vertical-grid dd.yes-votes-legend')).map(all => all.innerText));

    const noVotes = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.card div.bar-bloc div.vertical-grid dd.no-votes-legend')).map(all => all.innerText));
    //content
  // const content = await page.evaluate(() => Array.from(
  //   document.querySelectorAll('a')).map(all => all.innerText));


    

  // console.log(allHouseVotes)
  // console.log(resultOfVote);
  // console.log(infoBloc);
  // console.log(voteDate);
  // console.log(yesVotes);
  console.log(noVotes);
  await browser.close();
})();


