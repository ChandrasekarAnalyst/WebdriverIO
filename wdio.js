describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');//Opens webdriver.io
        var title = browser.getTitle();//Gets the title of webdriverio home page
        expect(title).toEqual('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');//Asserting title
    });
});