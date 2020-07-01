var LeavePage = require('../pageObjects/leavePage.js');
var commonMethods = require('../utilities/common.js');
var LoginPage = require('../pageObjects/loginPage.js');



describe('Validate leave Page', function () {


    it('List Pune holidays', function () {

        /*  browser.sleep(5000);
 
         browser.refresh();
 
         browser.logger.info("Validation Leave Page...");
         browser.sleep(3000);
         //commonMethods.waitForElementClickable(LeavePage.clickLeaveAppButton);
         LeavePage.clickLeaveAppButton();
 
         var winHandles = browser.getAllWindowHandles();
 
         winHandles.then(function (handles) {
             var parentWindow = handles[0];
             var childWindow = handles[1];
             browser.switchTo().window(childWindow);
 
             browser.getTitle().then(function (title) {
                 console.log(title);
             });
 
             browser.sleep(5000);
 
             LeavePage.clickHolidayButton();
             LeavePage.clickHolidayIndiaButton();
 
             browser.sleep(5000);
 
 
             browser.sleep(5000);
 
             //element.all(by.xpath('//table[@class="table table-hover"]/tbody/tr')).count().then(function (count) {
                // console.log(count);
             
             table = element(by.xpath('//table[@class="table table-hover"]/tbody/tr'));
                 
             count=commonMethods.rowCountForTable(table);
 
             browser.logger.info(count);
 
  */    browser.ignoreSynchronization = true;
        browser.get("https://brahma.clariontechnologies.co.in/#/dashboard");
        browser.driver.manage().window().maximize();
        browser.logger.info("Maximise Window...");
        browser.sleep(3000);


        commonMethods.waitForElementClickable(LoginPage.signInButton);
        LoginPage.clickSignInButton();
        var winHandles = browser.getAllWindowHandles();

        winHandles.then(function (handles) {
            var parentWindow = handles[0];
            var childWindow = handles[1];
            browser.switchTo().window(childWindow);

            browser.sleep(3000);
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

            browser.refresh();

            browser.sleep(10000);

            LeavePage.clickLeaveAppButton();
            browser.sleep(2000);

            var winHandles = browser.getAllWindowHandles();

            winHandles.then(function (handles) {
                var parentWindow = handles[0];
                var childWindow = handles[1];
                browser.switchTo().window(childWindow);

                browser.getTitle().then(function (title) {
                    console.log(title);
                });

                browser.sleep(5000);

                LeavePage.clickHolidayButton();
                LeavePage.clickHolidayIndiaButton();

            

                browser.sleep(5000);

                table = element(by.xpath('//table[@class="table table-hover"]/tbody/tr'));
                browser.sleep(5000);
                count=commonMethods.rowCountForTable(table);
                browser.sleep(5000);
                browser.logger.info(count);



            });


        });

    });

});