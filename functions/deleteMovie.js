const {By} = require ('selenium-webdriver')

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Shrek')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//button[text()="x"]')).click()
}

module.exports = {
    deleteMovie
}