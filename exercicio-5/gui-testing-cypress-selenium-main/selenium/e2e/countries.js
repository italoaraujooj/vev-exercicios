const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('countries', () => {
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
  it.only('add and remove province in United Kingdom', async () => {
    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Select only enabled countries
    let dropdown = await driver.findElement(By.id('criteria_enabled'));
    await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click();

    // Type to search a specify country
    await driver.findElement(By.id('criteria_code_value')).sendKeys('GB');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last country
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Click in filter blue button
    await driver.findElement(By.css('.ui > .ui > .required > #sylius_country_provinces > .ui')).click();

    // Filling data of provinces
    await driver.findElement(By.id('sylius_country_provinces_0_code')).sendKeys('GG-GG');
    await driver.findElement(By.id('sylius_country_provinces_0_name')).sendKeys('Gerson');
    await driver.findElement(By.id('sylius_country_provinces_0_abbreviation')).sendKeys('Gege');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();
    // Assert that country has been updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Country has been successfully updated.'));

    // Click on Delete button
    await driver.findElement(By.css('.required > #sylius_country_provinces > div > div > .red')).click();
    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();
    // Assert that country has been updated
    const bodyTextAfterRemove = await driver.findElement(By.tagName('body')).getText();
    assert(bodyTextAfterRemove.includes('Country has been successfully updated.'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
