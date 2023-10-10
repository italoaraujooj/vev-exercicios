const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('shipments', () => {
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
  it('ship a ready shipment', async () => {
    // Click in shipments in side menu
    await driver.findElement(By.linkText('Shipments')).click();

    // Select the state to search for new shipments
    const dropdown = await driver.findElement(By.id('criteria_state'));
    await dropdown.findElement(By.xpath("//option[. = 'Ready']")).click();

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in Ship of the first shipment listed
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon teal button"]'));
    await buttons[0].click();

    // Assert that shipment has been completed
    const bodyText = await driver.findElement(By.css('body')).getText();
    assert(bodyText.includes('Shipment has been successfully shipped.'));
  });

  it('shipping method is UPS', async () => {
    // Click in shipments in side menu
    await driver.findElement(By.linkText('Shipments')).click();
    // Select the state to search for new shipments
    const dropdown = await driver.findElement(By.id('criteria_method'));
    await dropdown.findElement(By.xpath("//option[. = 'UPS']")).click();
    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    assert(dropdown.findElement(By.id('criteria_method').get())).includes('UPS');

  });

  it('shipping method is DHL', async () => {
    // Click in shipments in side menu
    await driver.findElement(By.linkText('Shipments')).click();
    // Select the state to search for new shipments
    const dropdown = await driver.findElement(By.id('criteria_method'));
    await dropdown.findElement(By.xpath("//option[. = 'DHL Express']")).click();
    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    assert(dropdown.findElement(By.id('criteria_method').get())).includes('DHL Express');

  });

  it('shipping method is FedEx', async () => {
    // Click in shipments in side menu
    await driver.findElement(By.linkText('Shipments')).click();
    // Select the state to search for new shipments
    const dropdown = await driver.findElement(By.id('criteria_method'));
    await dropdown.findElement(By.xpath("//option[. = 'FedEx']")).click();
    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    assert(dropdown.findElement(By.id('criteria_method').get())).includes('FedEx');


  });

  it('clear filters', async () => {
    await driver.findElement(By.linkText('Shipments')).click();
    const clear_button = await driver.findElement(By.css('*[class^="ui labeled icon button"]'));
    await clear_button.click();
    const filters = await driver.findElement(By.css('.ui > .sylius-filters > .sylius-filters__field > .field'));
    assert(filters.findElement(By.id('criteria_state')).includes('All'));
    assert(filters.findElement(By.id('criteria_channel')).includes('All'));
    assert(filters.findElement(By.id('criteria_method')).includes('All'));
  });

  it('on page one', async () => {
    await driver.findElement(By.linkText('Shipments')).click();
    const pagination = await driver.findElement(By.css('.ui > .sylius-grid-nav > .sylius-grid-nav__pagination > .pagination menu'));
    assert(pagination.findElement(By.id('disabled item')).getText().includes('Previous'));
    assert(pagination.findElement(By.id('active item')).getText().includes('1'));
  });

  it('on last page', async () => {
    await driver.findElement(By.linkText('Shipments')).click();
    const pagination = await driver.findElement(By.css('.ui > .sylius-grid-nav > .sylius-grid-nav__pagination > .pagination menu'));
    assert(pagination.findElement(By.id('disabled item')).getText().includes('Next'));
  });

  // Implement the remaining test cases in a similar manner
});
