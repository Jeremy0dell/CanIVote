const express = require('express')
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const router = express.Router()
//

router.route('/selenium')
  .get((req, res) => {
    var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build()

    driver.get('http://www.votetravis.com');
    driver.wait(until.elementLocated(By.id('queryBlock')), 10000)
    driver.findElement(By.id('queryBlock')).sendKeys('Betsy');
    driver.findElement(By.id('query')).sendKeys('Greenberg');
    driver.findElement(By.id('queryMonth')).sendKeys('04051956');
    driver.findElement(By.className('voterLookupButton')).click();

    driver.findElements(By.id('messageNoElectionBox'))
    .then(found => { if(!!found.length) res.send('found nothing!') })

    driver.findElements(By.id('voterInformationDIV'))
    .then(found => { if(!!found.length) res.send('found info!') })

  })

  .post((req, res) => {
    console.log(req.query, req.body, 'hi')
    res.send('hello 420!')
  })

module.exports = router
