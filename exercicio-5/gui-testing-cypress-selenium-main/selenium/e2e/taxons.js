const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('taxons', () => {
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
  it.only('edit dresses and see effect', async () => {
    // Click in taxons in side menu
    await driver.findElement(By.linkText('Taxons')).click();
    // Click in dresses's more operations (...)
    await driver.findElement(By.css('li:nth-child(3) .ellipsis')).click();
    // Click in edit item in dropdown
    await driver.findElement(By.linkText('Edit')).click();
    // Edit dresses name
    const inputName = await driver.findElement(By.id('sylius_taxon_translations_en_US_name'));
    inputName.click();
    inputName.clear();
    inputName.sendKeys('Dresses Top');

    // Clikc on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    await driver.get('http://localhost:9990/');

    // Assert that Dresses is renamed to Dresses Top
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Dresses Top'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
