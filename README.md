# William Hill Technical Test

Exercises for the testing position.

## Prerequisites for Web Automation Testing

* node.js
  * Node modules:
    * webdriverio
    * webdriver-manager
    * mocha
    * chai

## Requirements

* nodejs 10.13.0 or newer

## Setup for Web Automation Test

* Create a directory to run the project and access to it.
* Run npm init in the folder to create the _package.json_ file.
* Install the required modules with the flag _--save-dev_ to add them to the _package.json_.
* From the root folder run the following command:
  * Windows: _"./node_modules/.bin/webdriver-manager" update_
  * Linux : _./node_modules/.bin/webdriver-manager update_
* Download the data from the repository and copy the contents of the folder WAT into the root folder.

## How to run Web Automation Test

* Open a console and run from the project root directory:
  * Windows: _"./node_modules/.bin/webdriver-manager" start_
  * Linux: _./node_modules/.bin/webdriver-manager start_
* Open another console and run from the project root directory:
  * Windows: _"./node_modules/.bin/wdio" wdio.conf.js_
  * Linux: _./node_modules/.bin/wdio wdio.conf.js_

## Notes

* The first two test should work properly if connected via a Gibraltar ip adress.
* Sometimes the test that checks if the join button is translated to German doesn't work properly if the page loading time is too high.
* For the MacOS test it should be run following the linux instructions.
