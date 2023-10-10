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

    // Assert that shipment has been completed
    const table = await driver.findElement(By.css('*[class^="ui sortable stackable very basic celled table"]')).get();
    assert(table.includes('19-09-2023 18:22:35'));
    assert(table.includes('07-12-2022 14:21:32'));
    assert(table.includes('28-11-2022 07:40:08'));

  });

  it('shipping method is DHL', async () => {
    // Click in shipments in side menu
    await driver.findElement(By.linkText('Shipments')).click();
    // Select the state to search for new shipments
    const dropdown = await driver.findElement(By.id('criteria_method'));
    await dropdown.findElement(By.xpath("//option[. = 'DHL Express']")).click();
    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Assert that shipment has been completed
    const table = await driver.findElement(By.css('*[class^="ui sortable stackable very basic celled table"]')).get();
    assert(table.includes('19-09-2023 01:31:33'));
    assert(table.includes('20-07-2023 17:33:47'));
    assert(table.includes('20-07-2023 06:27:33'));
    assert(table.includes('26-04-2023 07:37:47'));
    assert(table.includes('11-03-2023 00:10:02'));
    assert(table.includes('31-03-2023 15:52:00'));
    assert(table.includes('22-11-2022 20:56:00'));
    assert(table.includes('02-11-2022 03:17:13'));

  });

  it('shipping method is FedEx', async () => {
    // Click in shipments in side menu
    await driver.findElement(By.linkText('Shipments')).click();
    // Select the state to search for new shipments
    const dropdown = await driver.findElement(By.id('criteria_method'));
    await dropdown.findElement(By.xpath("//option[. = 'FedEx']")).click();
    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Assert that shipment has been completed
    const table = await driver.findElement(By.css('*[class^="ui sortable stackable very basic celled table"]')).get();
    assert(table.includes('15-05-2023 06:27:47'));
    assert(table.includes('07-05-2023 05:36:38'));
    assert(table.includes('08-04-2023 05:41:40'));
    assert(table.includes('30-03-2023 15:53:22'));
    assert(table.includes('03-03-2023 17:08:38'));
    assert(table.includes('17-01-2023 10:54:17'));
    assert(table.includes('02-01-2023 19:26:59'));

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
