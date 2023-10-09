const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('shipping methods', () => {
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
  it.only('change amount of fashion web store to fedex', async () => {
    // Click in shipping methods in side menu
    await driver.findElement(By.linkText('Shipping methods')).click();

    // Type in value input to search for specify shipping method
    await driver.findElement(By.id('criteria_search_value')).sendKeys('fedex');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last shipping method
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Type 9 in amount field of fashion web store
    const inputAmount = await driver.findElement(By.id('sylius_shipping_method_configuration_FASHION_WEB_amount'));
    inputAmount.click();
    inputAmount.clear();
    inputAmount.sendKeys('9');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that shipping method has been updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Shipping method has been successfully updated.'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
