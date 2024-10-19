import puppeteer from "puppeteer";

describe("Tooltip", () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    }, 10000);

    page = await browser.newPage();
    await page.setContent(`
        <button type="button" class="btn">Click to toggle popover</button>
      `);

    await page.goto('http://localhost:8080');
    await page.waitForSelector('.btn');
  });


  test('widget should render on page start', async () => {
    await page.waitForSelector('.btn');
  });

  test('should show tooltip on button click', async () => {
    const btn = await page.$('.btn');
    await btn.click();
    await page.waitForSelector('.tooltip', { timeout: 60000 });
    const tooltipElement = await page.$('.tooltip');
    expect(tooltipElement).not.toBeNull();
  }, 20000);

  afterEach(async () => {
    await browser.close();
  });
});