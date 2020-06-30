const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://projects.propublica.org/represent/votes/116/house/2/115';
  await page.goto(url);
  await page.screenshot({path: 'example.png'});



    // grab h1
    const h1 = await page.evaluate(() => Array.from(
      document.querySelectorAll('h1')).map(all => all.innerText));

      //overView section break down
    const overViewSection = await page.evaluate(() => Array.from(
      document.querySelectorAll('section.vote-overview td.v-align-top')).map(all => all.innerText));
    
      // grab total of yes votes / grabs the text 'yes'
    const yes = await page.evaluate(() => Array.from(
      document.querySelectorAll('tbody tr.yes-votes strong')).map(all => all.innerText));

        //grab total of no votes / grabs the text 'no' 
    const no = await page.evaluate(() => Array.from(
      document.querySelectorAll('tbody tr.no-votes strong')).map(all => all.innerText));

    //h2 roll call 
    const h2 = await page.evaluate(() => Array.from(
      document.querySelectorAll('h2.mobile-block')).map(all => all.innerText));

     //yes votes with total num of yes votes 
    const yesVotes = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.yes-votes h3')).map(all => all.innerText));

    //yes voters  
    const yesVoters = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.yes-votes td.member a')).map(all => all.innerText));

    //yes voters dist
    const yesVotersDist = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.yes-votes td.nowrap')).map(all => all.innerText));

    //no votes with total num of yes votes 
    const noVotes = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.no-votes h3')).map(all => all.innerText));

    //no voters  
    const noVoters = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.no-votes td.member a')).map(all => all.innerText));
        
    //no voters dist 
    const noVotersDist = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.no-votes td.nowrap')).map(all => all.innerText));

          //no votes with total num of yes votes 
    const abstainVotes = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.abstain-votes h3')).map(all => all.innerText));

    //no voters  
    const abstainVoters = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.abstain-votes td.member a')).map(all => all.innerText));
        
    //no voters dist 
    const abstainVotersDist = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.abstain-votes td.nowrap')).map(all => all.innerText));

    const yesVoteTest = await page.evaluate(() => Array.from(
      document.querySelectorAll('div.yes-votes td.nowrap', 'div.yes-votes td.member a')).map(all => all.innerText.trim())
    )
    
      const azRepsYes = yesVoters.filter(e => e == 'AZ') 
      console.log(azRepsYes);
      
        
      

      // // map function not working yet
   let result = await page.evaluate(() => 
   Array.from(document.querySelectorAll("div.yes-votes")).map(html => ({
      yesVoters: html.querySelector(' td.member a').innerText,
      yesVotersDist: html.querySelector(' td.nowrap').innerText
    }))
   )


  console.log(h1);
  console.log(overViewSection);
  console.log(yes);
  console.log(no);
  // console.log(h2);
  // console.log(yesVotes);
  // console.log(yesVoters);
  // console.log(yesVotersDist);
  // console.log(noVotes);
  // console.log(noVoters);
  // console.log(noVotersDist);
  // console.log(abstainVotes);
  // console.log(abstainVoters);
  // console.log(abstainVotersDist);
  // console.log(...result);
  // console.log(yesVoteTest);
  await browser.close();
})();