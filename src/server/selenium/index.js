const express = require('express')
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const router = express.Router()

router.route('/selenium')
  .post((req, res) => {
    const { birthday, firstName, lastName } = req.body

    const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build()

    driver.get('http://www.votetravis.com');
    driver.wait(until.elementLocated(By.id('queryBlock')), 10000)
    driver.findElement(By.id('queryBlock')).sendKeys(firstName);
    driver.findElement(By.id('query')).sendKeys(lastName);
    driver.findElement(By.id('queryMonth')).sendKeys(birthday);
    driver.findElement(By.className('voterLookupButton')).click();

    driver.findElements(By.id('messageNoElectionBox'))
    .then(found => {
      if(!!found.length) {
        res.send('couldn\'t find info!')
        driver.quit()
      }
   })

    driver.findElements(By.id('voterInformationDIV'))
    .then(found => {
      if(!!found.length) {
        const info = driver.findElement(By.css('#voterInformationDIV > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)'))
        info.getText().then(data => console.log('data is', data))
        // console.log('info is', info)
        // res.send(info)
        // driver.quit()
      }
    })

  })

  .get((req, res) => {
    console.log(req.query, req.body, 'hi')
    res.send('hello 420!')
  })
//
// router.route('/selenium/address')
//   .post((req, res) => {
//     const driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build()
//
//
//   })

module.exports = router
