var log4js = require('log4js');
var jasmineReporters = require('jasmine-reporters');
var fs = require('fs-extra');

exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',  
  params: require('./resources/constants.json'),
  specs: ['tests/validateLeavePage.js'],

  allScriptsTimeout: 90000,
  getPageTimeout: 90000,


  capabilities: {
    directConnect: true,
    browserName: "chrome",
    //chromeOptions: {
    //  args: ["--incognito"]
    //}
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 90000
  },

  //////////////////////////////////Logging code to file and console code//////////////////////////////////
  beforeLaunch: function () {

    log4js.configure({
      appenders: {
        out: { type: 'console' },
        app: { type: 'file', filename: 'logs/site.log' }
      },
      categories: {
        default: { appenders: ['out', 'app'], level: 'debug' }
      }
    });


  },
  ////////////////////////////////////end logging code //////////////////////////////////////////////////

  ////////////////////////////////////Report generation code////////////////////////////////////////////

  onPrepare: function () {

    browser.logger = log4js.getLogger('protractorLog4js');      //logging code
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true));

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == 'failed') {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get('browserName');
            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream('./test_report/screenshot/' + browserName + '-' + result.fullName + '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    });
  },

  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();
    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('browserVersion');
      var HTMLReport = require('protractor-html-reporter');
      testConfig = {
        reportTitle: 'Test Execution Report',
        outputPath: './test_report',
        screenshotPath: './screenshot',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true
      };
      new HTMLReport().from('./junitresults.xml', testConfig);
    });
  }

  ///////////////////////////////////end report generation code///////////////////////////////////////////


}