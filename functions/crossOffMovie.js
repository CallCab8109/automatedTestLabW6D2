const { By } = require('selenium-webdriver')

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Edward Scissorhands')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//span')).click()

    


}

module.exports = {
    crossOffMovie
}