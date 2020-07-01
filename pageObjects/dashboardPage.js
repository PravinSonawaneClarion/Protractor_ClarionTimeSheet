var DashBoardPage = function () {

    this.page_title = element(by.xpath('//a[text()="BRAHMA - CLARION TECHNOLOGIES"]'));
    this.timesheetButton = element(by.xpath('//h2[text()="Timesheet"]'));
    this.cancelButton = element(by.xpath('//a[@class="actions text-right"]'));


    this.getTitle = function(){
        return page_title.getText();          
    };  

    
    this.clickCancelButton = function () {
        this.cancelButton.click();
    };

    this.clickTimesheetButton = function () {
        this.timesheetButton.click();
    };
}
module.exports = new DashBoardPage();