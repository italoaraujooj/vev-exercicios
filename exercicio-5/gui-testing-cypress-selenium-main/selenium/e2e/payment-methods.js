const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('payment methods', () => {
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
  it.only('change cash on delivery position', async () => {
    // Click in payment methods in side menu
    await driver.findElement(By.linkText('Payment methods')).click();

    // Type in value input to search for specify payment method
    await driver.findElement(By.id('criteria_search_value')).sendKeys('cash');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last payment method
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Type 1 in position field
    await driver.findElement(By.id('sylius_payment_method_position')).sendKeys('1');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that payment method has been updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Payment method has been successfully updated.'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
