const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('attributes', () => {
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
  it.only('testing edit attribute position', async () => {
    // Click in attributes in side menu
    await driver.findElement(By.linkText('Attributes')).click();

    // Type in value input to search for specify attribute
    await driver.findElement(By.id('criteria_code_value')).sendKeys('dress_collection');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the remain attribute
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[0].click();

    // Edit attribute position
    const inputName = await driver.findElement(By.id('sylius_product_attribute_position'));
    inputName.click();
    inputName.clear();
    inputName.sendKeys('10');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that attribute has been updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Product attribute has been successfully updated.'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
