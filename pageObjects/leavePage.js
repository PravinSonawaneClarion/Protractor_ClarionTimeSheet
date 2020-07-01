var LeavePage = function () {

    this.leaveAppButton = element(by.xpath('//h2[text()="Leave App"]'));
    this.holidaysButton = element(by.xpath('//span[text()="Holidays"]'));
    this.holidayIndiaButton = element(by.xpath('//span[text()="Holidays - India"]'));
    this.htmltable = element(by.xpath('//table[@class="table table-hover"]/tbody'));
    
    
    this.clickLeaveAppButton = function () {
        this.leaveAppButton.click();
    };

    this.clickHolidayButton = function () {
        this.holidaysButton.click();
    };

    this.clickHolidayIndiaButton = function () {
        this.holidayIndiaButton.click();
    };















}
module.exports = new LeavePage();

