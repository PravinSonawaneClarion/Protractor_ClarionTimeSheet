var LoginPage = function () {

    this.signInButton = element(by.xpath('//span[text()="Sign in"]'));
    this.emailIdText = element(by.xpath('//input[@id="identifierId"]'));
    this.nextButton1 = element(by.xpath('//span[text()="Next"]'));
    this.passwordText = element(by.xpath('//input[@name="password"]'));
    this.nextButton2 = element(by.xpath('//span[text()="Next"]'));


    this.get = function (baseUrl) {
        browser.get(baseUrl);
    };

    this.clickSignInButton = function () {
        this.signInButton.click();
    };

    this.enterEmailId = function (emailId) {
        this.emailIdText.sendKeys(emailId);
    };

    this.clickNextButton1 = function () {
        this.nextButton1.click();
    };

    this.enterPassword = function (password) {
        this.passwordText.sendKeys(password);
    };

    this.clickNextButton2 = function () {
        this.nextButton2.click();
    };
};
module.exports = new LoginPage();