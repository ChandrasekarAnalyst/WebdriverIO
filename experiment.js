var webdriverio = require("webdriverio");
 
function createDriver() {
    var driver = new webdriverio.Builder()
        .usingServer('http://localhost:4444/wd/hub')
        .withCapabilities(webdriverio.Capabilities.chrome())
        .build();
    driver.manage().timeouts().setScriptTimeout(10000);
    return driver;
}
 
var driver = createDriver();
driver.get("http://www.google.com");
 
driver.getTitle().then(function (title) {
    console.log(title);
});
 
driver.quit();