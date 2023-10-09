const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('catalog promotions', () => {
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
  it.only('hows of especify catalog promotion exposes the correct product and discount', async () => {
    // Click in catalog promotions in side menu
    await driver.findElement(By.linkText('Catalog promotions')).click();

    // Select inactive promotions in search tab
    const dropdown = await driver.findElement(By.id('criteria_state'));
    await dropdown.findElement(By.xpath("//option[. = 'Inactive']")).click();

    // Type in value input to search for specify catalog promotion
    await driver.findElement(By.id('criteria_search_value')).sendKeys('autumn');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in details of the remain catalog promotion
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[1].click();

    // Assert that details page is listing all variants
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Knitted_wool_blend_green_cap'));
    assert(bodyText.includes('Percentage discount'));
    assert(bodyText.includes('50%'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
