const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('products', () => {
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
  it.only('details is listing all variants', async () => {
    // Click in products in side menu
    await driver.findElement(By.css('a[href="/admin/products/"]')).click();

    // Type in value input to search for specify product
    await driver.findElement(By.id('criteria_search_value')).sendKeys('000F office grey jeans');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in details of the remain product
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[0].click();

    // Assert that details page is listing all variants
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('000F_office_grey_jeans-variant-0'));
    assert(bodyText.includes('000F_office_grey_jeans-variant-1'));
    assert(bodyText.includes('000F_office_grey_jeans-variant-2'));
    assert(bodyText.includes('000F_office_grey_jeans-variant-3'));
    assert(bodyText.includes('000F_office_grey_jeans-variant-4'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
