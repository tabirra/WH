const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };
const browser = webdriverio.remote(options).init().url('http://sports.williamhill.com/betting/en-gb');

describe('Web Automation Test', function() {
  
  after(function(){
    browser.close();
  });
  

  /* Scenario 1 */
  it('Cookie notice popup should be present.', function () {
    // Delete all cookies
    browser.deleteCookie();
    // Refresh the webpage so new cokiees are loaded
    browser.refresh();

    // Assert presence of Cookie notice pop-up
    assert.isNotNull(browser.element('.cookie-notice'));

    // Clear cookie notice
    browser.click('#close-cokiee-notice');
  });

  it('CDB cookie should be present to facilitate the banking transactions.', function () {
    // Assert presence of cdb cookie
    assert.isNotNull(browser.getCookie('williamhill.com'));
  });

  /* Scenario 2 */
  it('Join button should be present in the web page.', function () {
    // Assert presence of Join button
    assert.isNotNull(browser.element('#joinLink'));
  });

  it('Join button should be present and translated to German when that language is selected.', function () {
    browser.click('.js-language-button');
    browser.click('#de');

    var joinButton = webdriverio.$('#joinLink');

    // Assert presence of Join button
    assert.isNotNull(joinButton);

    // Assert that Join button label is translated to German
    assert.equal(joinButton.getText(), 'Anmelden');
  });

  it('Join button should be present when Japanese language is selected.', function () {
    browser.click('.js-language-button');
    browser.click('#ja');

    // Assert presence of Join button
    assert.isNotNull(browser.element('#joinLink'));
  });

  it('Join button should be present when Greek language is selected.', function () {
    browser.click('.js-language-button');
    browser.click('#el');

    // Assert presence of Join button
    assert.isNotNull(browser.element('#joinLink'));
  })
});