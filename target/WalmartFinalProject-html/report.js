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
  "status": "passed"
});
formatter.step({
  "name": "I enter a product name in the search bar",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStepDef.iEnterAProductNameInTheSearchBar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the product",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStepDef.iSelectTheProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the product data",
  "keyword": "And "
});
formatter.match({
  "location": "ProductStepDef.iVerifyTheProductData()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[data-automation-id\u003d\u0027product-details-header\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MXGDXL10C3B28D1\u0027, ip: \u002710.112.206.166\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\kvvq373\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:60333}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a7bb617d694adba74be7dfb9532df991\n*** Element info: {Using\u003dcss selector, value\u003d[data-automation-id\u003d\u0027product-details-header\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.walmart.pages.ProductPage.validarProducto(ProductPage.java:29)\r\n\tat com.walmart.steps.ProductStepDef.iVerifyTheProductData(ProductStepDef.java:23)\r\n\tat ✽.I verify the product data(file:src/test/resources/features/addToCart.feature:7)\r\n",
  "status": "failed"
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
formatter.uri("file:src/test/resources/features/verifyCart.feature");
formatter.feature({
  "name": "Verify Cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify products in the cart and delete one",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in the Cart Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CartStepDef.iAmInTheCartPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[data-automation-id\u003d\u0027product-details-header\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MXGDXL10C3B28D1\u0027, ip: \u002710.112.206.166\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\kvvq373\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:60425}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7f15030136226942dd1aa8e8e1c58267\n*** Element info: {Using\u003dcss selector, value\u003d[data-automation-id\u003d\u0027product-details-header\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.walmart.pages.ProductPage.validarProducto(ProductPage.java:29)\r\n\tat com.walmart.steps.CartStepDef.iAmInTheCartPage(CartStepDef.java:27)\r\n\tat ✽.I am in the Cart Page(file:src/test/resources/features/verifyCart.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I see the list of products",
  "keyword": "When "
});
formatter.match({
  "location": "CartStepDef.iSeeTheListOfProducts()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can delete the product",
  "keyword": "Then "
});
formatter.match({
  "location": "CartStepDef.iCanDeleteTheProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});