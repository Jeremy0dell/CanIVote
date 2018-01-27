const express = require('express')
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until

const router = express.Router()

router.route('/selenium')
  .post((req, res, next) => {
    console.log('Is this being called?')
    const { birthday, firstName, lastName, month, day, year } = req.body
    // console.log(month, day.padStart(2, "0"), year.padStart(4, "19"), `${month}${day}${year}`)
    const birthdayString = `${month}${day.padStart(2, "0")}${year.padStart(4, "19")}`
    console.log(birthday === birthdayString)

    const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build()

    driver.get('http://www.votetravis.com')
    driver.wait(until.elementLocated(By.id('queryBlock')), 10000)
    driver.findElement(By.id('queryBlock')).sendKeys(firstName)
    driver.findElement(By.id('query')).sendKeys(lastName)
    driver.findElement(By.id('queryMonth')).sendKeys(month)
    driver.findElement(By.id('queryDay')).sendKeys(day.padStart(2, "0"))
    driver.findElement(By.id('queryYear')).sendKeys(year.padStart(4, "19"))
    driver.findElement(By.className('voterLookupButton')).click()

    driver.findElements(By.id('voterInformationDIV'))
    .then(found => {
      if (found.length) {
        const info = driver.findElement(By.css('#voterInformationDIV > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)'))
        info.getText()
        .then(data => {
          const addr = data.split('\n').slice(1).join(' ')
          console.log('found', addr)
          res.send(addr)
          driver.quit()
        })
      } else {
        res.sendStatus(404)
        driver.quit()
      }
    })
    .catch(err => {
      driver.quit()
      next(err)
    })

  })

  .get((req, res) => {
    console.log(req.query, req.body, 'hi')
    res.send('hello 420!')
  })
//

router.route('/selenium/district')
  .post((req, res) => {
    const { address } = req.body
    console.log(address.substring(0, address.lastIndexOf("TX")), req.body, 'addrreesss')

    const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build()

    driver.get('http://www.austintexas.gov/government')
    driver.wait(until.elementLocated(By.id('edit-streetaddress')), 10000)
    driver.findElement(By.id('edit-streetaddress')).sendKeys(address.substring(0, address.lastIndexOf("TX")))
    driver.findElement(By.id('edit-lookupbtn')).click()
    driver.wait(until.elementLocated(By.className('numuserdistrict')), 10000)

    const info = driver.findElement(By.className('numuserdistrict'))

    info.getText()
    .then(data => {
      console.log('the data we found is', data)
      res.send(data)
      driver.quit()
    })

  })


module.exports = router
