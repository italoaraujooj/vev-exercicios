const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('payments', () => {
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
  it.only('complete a new payment', async () => {
    // Click in payments in side menu
    await driver.findElement(By.linkText('Payments')).click();

    // Select the state to search for new payments
    const dropdown = await driver.findElement(By.id('criteria_state'));
    await dropdown.findElement(By.xpath("//option[. = 'New']")).click();

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in complete of the first payment listed
    const buttons = await driver.findElements(By.css('*[class^="ui loadable teal labeled icon button"]'));
    await buttons[0].click();

    // Assert that payment has been completed
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Payment has been completed.'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
