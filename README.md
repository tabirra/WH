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
* Run npm init in the folder to create the *italic* package.json *italic* file.
* Install the required modules with the flag *italic* --save-dev *italic* to add them to the *italic* package.json *italic*.
* From the root folder run the following command:
  * Windows: *italic* "./node_modules/.bin/webdriver-manager" update *italic*
  * Linux : *italic* ./node_modules/.bin/webdriver-manager update *italic*
* Download the data from the repository and copy the contents of the folder WAT into the root folder.

## How to run Web Automation Test

* Open a console and run from the project root directory:
  * Windows: *italic* "./node_modules/.bin/webdriver-manager" start *italic*
  * Linux: *italic* ./node_modules/.bin/webdriver-manager start *italic*
* Open another console and run from the project root directory:
  * Windows: *italic* "./node_modules/.bin/wdio" wdio.conf.js *italic*
  * Linux: *italic* ./node_modules/.bin/wdio wdio.conf.js *italic*

## Notes

* The first two test should work properly if connected via a Gibraltar ip adress.
* Sometimes the test that checks if the join button is translated to German doesn't work properly if the page loading time is too high.
* For the MacOS test it should be run following the linux instructions.
