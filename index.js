const { Builder, By, Key } = require("selenium-webdriver");
//Step 1: Navigate to google and search for Dragon Eye Tuning
async function projectTest() {
    let driver = await new Builder().forBrowser('firefox').build();
    //await driver.get('http://google.com');
   // await driver.findElement(By.name("q")).sendKeys('Dragon Eye Tuning',Key.RETURN);
    //Step 2: Select DET link from google search results
   // await driver.findElement(By.tagName('a')).click;
    await driver.get('http://dragoneyetuning.com');

    //Step 3:Select Adjustable short shifter and add to cart, view cart, proceed to checkout
    //tried and failed await driver.findElement(By.css('[data-product_id="49"]')).click();
    await driver.findElement(By.css('a[href="?add-to-cart=49"])).click();
    await driver.findElement(By.partialLinkText('cart')).click;
    await driver.findElement(By.partialLinkText('checkout')).click;


    //Step 4: Fill in personal information and proceed to Paypal
    await driver.findElement(By.id("billing_first_name")).sendKeys('Devin',Key.TAB);
    await driver.findElement(By.id('billing_last_name')).sendKeys('Penny',Key.TAB);
    await driver.findElement(By.id('billing_country_field')).sendKeys('United States',Key.TAB);
    await driver.findElement(By.id('billing_address_1_field')).sendKeys('123 main street',Key.TAB);
    await driver.findElement(By.id('billing_city_field')).sendKeys('Roswell',Key.TAB);
    await driver.findElement(By.id('billing_state_field')).sendKeys('Georgia',Key.TAB);
    await driver.findElement(By.id('billing_postcode_field')).sendKeys('30076',Key.TAB);
    await driver.findElement(By.id('billing_phone_field')).sendKeys('6787703444',Key.TAB);
    await driver.findElement(By.id('billing_email_field')).sendKeys('test@123.com',Key.RETURN);

}
projectTest();

//To do: country and state dropdowns, google search select

