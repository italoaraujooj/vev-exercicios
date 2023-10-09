const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('channels', () => {
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
  it.only('update the city of Fashion Web Store channel', async () => {
    // Click in channels in side menu
    await driver.findElement(By.linkText('Channels')).click();

    // Select only enabled channels channel
    let dropdown = await driver.findElement(By.id('criteria_enabled'));
    await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click();

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last channel
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Edit channel city
    const inputName = await driver.findElement(By.id('sylius_channel_shopBillingData_city'));
    inputName.click();
    inputName.clear();
    inputName.sendKeys('Town Town');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that channel has been updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Channel has been successfully updated.'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
