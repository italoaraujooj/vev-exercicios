const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('currencies', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

  after(async () => {
    await driver.quit();
  });

  beforeEach(async () => {
    driver.manage().deleteAllCookies();
    await driver.get('http://localhost:9990/admin');
    // await driver.get('http://150.165.75.99:9990/admin');
    await driver.findElement(By.id('_username')).sendKeys('sylius');
    await driver.findElement(By.id('_password')).sendKeys('sylius');
    await driver.findElement(By.css('.primary')).click();
    // await driver.sleep(1000);
  });

  // Remove .only and implement others test cases!
  it.only('validate that cannot create the same currency twice', async () => {
    // Click in currencies in side menu
    await driver.findElement(By.linkText('Currencies')).click();

    // Click on create button
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button  primary "]'));
    await buttons[0].click();

    // Select Euro currency
    const dropdown = await driver.findElement(By.id('sylius_currency_code'));
    await dropdown.findElement(By.xpath("//option[. = 'Euro']")).click();

    // Click on create button
    const buttonToCreate = await driver.findElements(By.css('*[class^="ui labeled icon primary button"]'));
    await buttonToCreate[0].click();

    // Assert that cannot create the same currency twice
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('This form contains errors.'));
    assert(bodyText.includes('Currency code must be unique.'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
