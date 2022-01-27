var webdriver =require('selenium-webdriver');
const {Key, By} = require("selenium-webdriver");
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
//driver.get("http://google.com");
//driver.findElement(webdriver.By.name("q")).sendKeys('Dragon Eye Tuning',Key.RETURN);
//driver.findElement('div.g a').then((link) => {
//    link.click();
//}




//selectFromDropdown("today");
//function selectFromDropdown(value) {
 //  const valueSelected = webdriver.By.ss('[id="start_select"]') + ' option[value="' + value '"]');
 //   driver.findElement(webdriver.By.css('[id="start_select"]')).click;
//    driver.FindElement(valueSelected).click;
//}
    driver.get('http://dragoneyetuning.com');

//Step 3:Select Adjustable short shifter and add to cart, view cart, proceed to checkout
//tried and failed await driver.findElement(By.css('[data-product_id="49"]')).click();
  //  driver.findElement(By.css('a[href="?add-to-cart=49"]')).click();
    driver.findElement(By.xpath("//a[@href='?add-to-cart=49']")).click();
    driver.sleep(50000);
  //  driver.findElement(By.partialLinkText('cart')).click;
    driver.findElement(By.xpath("//a[@href='https://www.dragoneyetuning.com/cart/']")).click();
    driver.sleep(50000);
  //  driver.findElement(By.partialLinkText('checkout')).click;
    driver.findElement(By.xpath("//a[@href='https://www.dragoneyetuning.com/checkout/']")).click();
    driver.sleep(50000);


   // driver.findElement(By.id("billing_first_name")).sendKeys('Devin',Key.TAB);
   // driver.findElement(By.id('billing_last_name')).sendKeys('Penny',Key.TAB);
    //Select drpCountry = new Select(driver.findElement(By.id("billing_country_field")));
    //const selectByValue = drpCountry.selectByvalue("US");
    // driver.findElement(By.id('billing_address_1_field')).sendKeys('123 main street',Key.TAB);
   // driver.findElement(By.id('billing_city_field')).sendKeys('Roswell',Key.TAB);
//Select drpState = new Select(driver.findElement(By.id("billing_state")));
//const selectByValue2 = drpState.selectByvalue2("GA");
   // driver.findElement(By.id('billing_postcode_field')).sendKeys('30076',Key.TAB);
   // driver.findElement(By.id('billing_phone_field')).sendKeys('6787703444',Key.TAB);
  //  driver.findElement(By.id('billing_email_field')).sendKeys('test@123.com',Key.RETURN);

