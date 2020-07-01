var DashboardPage = require('../pageObjects/dashboardPage.js');
var commonMethods = require('../utilities/common.js');



describe('MOve to Timesheet application from Dashboard', function () {
    //Test1
    it('Verify page titile', function () {

        browser.sleep(5000);
        browser.logger.info("Testing Log4js2");
        /* 
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
    
        browser.sleep(2000);
        DashboardPage.clickCancelButton();
        browser.switchTo().defaultContent();  
        browser.sleep(2000);
        DashboardPage.getTitle(); */

        browser.refresh();

        browser.getTitle().then(function (title) {
       console.log(title);
       
       
        })


        expect(browser.getTitle()).toEqual(browser.params.dashboardTitle);
    });
});