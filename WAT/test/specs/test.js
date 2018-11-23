var assert = require('chai').assert;
var equal  = require('chai').equal;
var should = require('chai').should();

describe('Web Automation Test', function() {

	/* Scenario 1 */
	it('Cookie notice popup should be present.', function () {
		browser.url('http://sports.williamhill.com/betting/en-gb');
		// Delete all cookies
		browser.deleteCookie();
		// Reload the webpage so new cokiees are loaded
		browser.refresh();

		var cookieWindow = $('#cookie-notice');

		// Assert presence of Cookie notice pop-up
		assert.isNotNull(cookieWindow, 'The cookie window pop-up is shown in the browser.');

		// Clear cookie notice
		browser.click('#close-cookiee-notice');
	});

	it('CDB cookie should be present to facilitate the banking transactions.', function () {
		browser.url('http://sports.williamhill.com/betting/en-gb');
		// Assert presence of cdb cookie(We temporally assert presence of the williamhill.com cookie)
		var cookie = browser.getCookie('wh_guid');
		assert.isNotNull(cookie, 'The cdb cookie was loaded in the browser.');
	});

	/* Scenario 2 */
	it('Join button should be present in the web page.', function () {
		browser.url('http://sports.williamhill.com/betting/en-gb');
		var joinButtonEn = $('#joinLink');
		// Assert presence of Join button
		assert.isNotNull(joinButtonEn, 'The join button is present where language is set to en-gb.');
	});

	it('Join button should be present and translated to German when that language is selected.', function () {
		browser.url('http://sports.williamhill.com/betting/en-gb');
		browser.click('.js-language-button');
		browser.click('#de');

		// Assert presence of Join button
		assert.isNotNull('#joinLink', 'The join button is present where language is set to de.');

		// Pause the execution of the script to finish loading the page in german
		browser.pause(10000);

		var joinButtonDe = $('#joinLink');
		// Assert that Join button label is translated to German
		assert.equal(joinButtonDe.getText(), 'Anmelden');
	});

	it('Join button should be present when Japanese language is selected.', function () {
		browser.url('http://sports.williamhill.com/betting/en-gb');
		var languageSelector = $('.js-language-button');

		browser.click('.js-language-button');
		browser.click('#ja');
		var joinButtonJp = $('#joinLink');

		// Assert presence of Join button
		assert.isNotNull(joinButtonJp, 'The join button is present where language is set to ja.');
	});

	it('Join button should be present when Greek language is selected.', function () {
		browser.url('http://sports.williamhill.com/betting/en-gb');
		var languageSelector = $('.js-language-button');

		browser.click('.js-language-button');
		browser.click('#el');
		var joinButtonGr = $('#joinLink');

		// Assert presence of Join button
		assert.isNotNull(joinButtonGr, 'The join button is present where language is set to el.');
	});
});
