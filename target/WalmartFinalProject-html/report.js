$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addToCart.feature");
formatter.feature({
  "name": "Cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add products to the cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Walmart",
  "keyword": "Given "
});
formatter.match({
  "location": "LandingStepDef.iNavigateToWalmart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"header_walmartLogo\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MXGDXL10C3B28D1\u0027, ip: \u002710.112.251.179\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\kvvq373\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:53916}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 90dc712c89137725a02b6ed1780af03d\n*** Element info: {Using\u003dcss selector, value\u003dheader_walmartLogo}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat com.walmart.pages.LandingPage.validateHomePage(LandingPage.java:33)\r\n\tat com.walmart.steps.LandingStepDef.iNavigateToWalmart(LandingStepDef.java:20)\r\n\tat ✽.I navigate to Walmart(file:src/test/resources/features/addToCart.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter a product name in the search bar",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStepDef.iEnterAProductNameInTheSearchBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the product",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStepDef.iSelectTheProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the product data",
  "keyword": "And "
});
formatter.match({
  "location": "ProductStepDef.iVerifyTheProductData()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add the product into the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductStepDef.iAddTheProductIntoTheCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});