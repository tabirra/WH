var assert = require('chai').assert;
var should = require('chai').should();
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

describe('webdriver.io page', function() {

	/* Scenario 1 */
	it('Cookie notice popup should be present.', function () {
    	//browser.url('http://sports.williamhill.com/betting/en-gb');

    	// Assert presence of Cookie notice pop-up
    	//assert.isNotNull(browser.getCookie());

    	// Clear cookie notice
    	
    });

    it('CDB cookie should be present to facilitate the banking transactions.', function () {
    	//browser.url('http://sports.williamhill.com/betting/en-gb');

    	// Assert presence of cdb cookie

    });

    /* Scenario 2 */

    it('Join button should be present in the web page.', function () {
    	webdriverio
      	.remote(options)
      	.init()
      	.url('http://sports.williamhill.com/betting/en-gb')
      	.title(function(err, res) {
      		var joinButtonEn = $('#joinLink');
        	// Assert presence of Join button
        	assert.isNotNull(joinButtonEn, 'The join button is present where language is set to en-gb.');
        	done();
      	})
      	.end();
    });

    it('Join button should be present and translated to German when that language is selected.', function () {
    	webdriverio
      	.remote(options)
      	.init()
      	.url('http://sports.williamhill.com/betting/en-gb')
      	.title(function(err, res) {
      		var languageSelector = $('.js-language-button');

        	browser.click('.js-language-button');
        	browser.click('#de');
        	var joinButtonDe = $('#joinLink');

        	// Assert presence of Join button
        	assert.isNotNull(joinButtonDe, 'The join button is present where language is set to de.');
        	// Assert that Join button label is translated to German
        	assert.equal(joinButtonDe.getText(), 'Anmelden');
        	done();
      	})
      	.end();
    });

    it('Join button should be present when Japanese language is selected.', function () {
    	webdriverio
      	.remote(options)
      	.init()
      	.url('http://sports.williamhill.com/betting/en-gb')
      	.title(function(err, res) {
      		var languageSelector = $('.js-language-button');
    	
        	browser.click('.js-language-button');
        	browser.click('#ja');
        	var joinButtonJp = $('#joinLink');

        	// Assert presence of Join button
        	assert.isNotNull(joinButtonJp, 'The join button is present where language is set to ja.');
        	done();
      	})
      	.end();
    });

    it('Join button should be present when Greek language is selected.', function () {
    	webdriverio
      	.remote(options)
      	.init()
      	.url('http://sports.williamhill.com/betting/en-gb')
      	.title(function(err, res) {
    		var languageSelector = $('.js-language-button');
    	
        	browser.click('.js-language-button');
        	browser.click('#el');
        	var joinButtonGr = $('#joinLink');

        	// Assert presence of Join button
        	assert.isNotNull(joinButtonGr, 'The join button is present where language is set to el.');
        	done();
      	})
      	.end();
    });
});