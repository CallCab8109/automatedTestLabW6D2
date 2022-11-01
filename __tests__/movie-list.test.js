const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {By} = require('selenium-webdriver')

const {deleteMovie} = require('../functions/deleteMovie')
const {crossOffMovie} = require('../functions/crossOffMovie')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('delete a movie', async () => {
    await deleteMovie(driver)
    // await driver.sleep(5000)
})

test('cross off a movie', async () => {
    await crossOffMovie(driver)
    // await driver.sleep(5000)
})

test('notified', async () => {
    expect (driver.findElement(By.xpath('aside'))).toBeTruthy()
})