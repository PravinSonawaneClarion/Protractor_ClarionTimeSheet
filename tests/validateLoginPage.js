var LoginPage = require('../pageObjects/loginPage.js');
var commonMethods = require('../utilities/common.js');




describe('Timesheet Automation Login Test Cases', function () {

  var EC = protractor.ExpectedConditions;
  beforeAll(function () {
    browser.logger.info("Inside before All...");
    browser.ignoreSynchronization = true;
    browser.logger.info("Opening Url");
    LoginPage.get(browser.params.baseUrl);
    browser.driver.manage().window().maximize();
    browser.logger.info("Maximise Window...");
  });


  //Test1
  it('Login in application', function () {

    commonMethods.waitForElementClickable(LoginPage.signInButton);
    LoginPage.clickSignInButton();
    var winHandles = browser.getAllWindowHandles();

    winHandles.then(function (handles) {
      var parentWindow = handles[0];
      var childWindow = handles[1];
      browser.switchTo().window(childWindow);

      browser.logger.info("Entering Username...");
      LoginPage.enterEmailId(browser.params.username);
      browser.sleep(2000);
      LoginPage.clickNextButton1();

      browser.logger.info("Entering password...");
      commonMethods.waitForElementClickable(LoginPage.passwordText);
      LoginPage.enterPassword(browser.params.password);
      commonMethods.waitForElementClickable(LoginPage.nextButton2);
      LoginPage.clickNextButton2();

      browser.sleep(2000);
      browser.switchTo().window(parentWindow);


      browser.sleep(10000);



    })
  });
});
