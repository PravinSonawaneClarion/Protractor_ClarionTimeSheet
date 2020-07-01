var commonMethods = function () {

    let EC = protractor.ExpectedConditions;

    //Wait for element to present
    this.waitForElementPresent = function (element,TimeOutInSecond) {
        try {
            return browser.wait(() => (element.isPresent()), TimeOutInSecond);
        } catch (e) {
            console.log(e.message);
            console.error('Control not visible.', e);
            browser.logger.info("Inside before All...");
        }
    }

    //Wait for element to dispaly
    this.waitForElementDisplayed = function (element,TimeOutInSecond) {
        try {
            return browser.wait(() => (element.isDisplayed()), TimeOutInSecond);
        } catch (e) {
            console.log(e.message);
            console.error('Control not visible.', e);
        }
    }

    //hardcoded wait
    this.sleep = function (time) {
        browser.sleep(time);
    }

    //wait for visibility of element
    this.waitForElementVisibility = function (element,TimeOutInSecond) {
        try {
            return browser.wait(EC.visibilityOf(element), TimeOutInSecond);
        } catch (e) {
            console.log(e.message);
            console.error('Control not visible.', e);
        }
    }

    //wait for element is clickable 
    this.waitForElementClickable = function (element,TimeOutInSecond) {
        try {
            return browser.wait(EC.elementToBeClickable(element), TimeOutInSecond);
        } catch (e) {
            console.log(e.message);
            console.error('Control not visible.', e);
        }
    }

    this.rowCountForTable = function (element1) {

        element.all(element1).count().then(function (count) {
            return count;
        });
    }

    //Do mouse-hovers
    //MouseOver(driver.findElement(By.name(“Main-Menu”)))
    /*  this.MouseOver=function(WebElement){
    Actions actObj=new Actions(driver);
    actObj.moveToElement(we).build().perform();
    } */


    /*Handle drop-down (select an option from list)
    //select the dropdown using "select by visible text", so pass VisibleText as 'Yellow' to funtion
    public static void fn_Select(WebElement WE, String VisibleText){
        Select selObj=new Select(WE);
        selObj.selectByVisibleText(VisibleText);
        }
         
        //select the dropdown using "select by index", so pass IndexValue as '2'
        public static void fn_Select(WebElement WE, int IndexValue){
        Select selObj=new Select(WE);
        selObj.selectByIndex(IndexValue);
        }
         
        //select the dropdown using "select by value", so pass Value as 'thirdcolor'
        public static void fn_Select(WebElement WE, String Value){
        Select selObj=new Select(WE);
        selObj.selectByValue(Value);
        }
         
            // Method to handle alert
        // Input required "OK" or "Cancel" text input from user
        public static void handleAlert(String userInput) {
            if (userInput.equalsIgnoreCase("ok")) {
                driver.switchTo().alert().accept();
            }
            if (userInput.equalsIgnoreCase("cancel")) {
                driver.switchTo().alert().dismiss();
            }
        }
    
            /**
         * @name : scrollUpOfPage
         * @Purpose : Method for scroll the web page to the top.
         * @access : Public
         * @param :
         *            Web element
         * @return : None
         */
	/* public void scrollUpOfPage(WebElement element) {

		try {
			// This will scroll up on top of the web page using javascript 
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("window.scrollTo(0, -document.body.scrollHeight);");
		} catch (Exception e) {
			
			System.err.println("Exception occurred : ");
			e.printStackTrace();
		}
    } */
    
/* 
    	/**
	 * @name : scrollBottomOfPage
	 * @Purpose : Method for scroll the web page till end.
	 * @access : Public
	 * @param :
	 *            Web element
	 * @return : None
	 */
	public void scrollBottomOfPage(WebElement element) {

		try {
			JavascriptExecutor js = (JavascriptExecutor) driver;
			// This will scroll the web page till end.
			js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		} catch (Exception e) {
			
			System.err.println("Exception occurred : ");
			e.printStackTrace();
		}

	} */
};
module.exports = new commonMethods();