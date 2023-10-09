const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('association types', () => {
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
  it.only('edit name of similar products', async () => {
    // Click in attributes in side menu
    await driver.findElement(By.linkText('Association types')).click();

    // Type in value input to search for specify association type
    await driver.findElement(By.id('criteria_name_value')).sendKeys('Similar');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the remain association type
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[1].click();

    // Edit association type name
    const inputName = await driver.findElement(By.id('sylius_product_association_type_translations_en_US_name'));
    inputName.click();
    inputName.clear();
    inputName.sendKeys('Real similar products');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that association type name has been updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Product association type has been successfully updated.'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
