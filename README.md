# Cypress_Deltatre
Assessment Task

# Cypress Test for Website and API.

# Installations
Node JS and Cypress is prerequisites.
Navigate to the /cypress_deltatre and hit 'npm i' to install the required packages. I have excluded the node_modules as it makes the repo unnecessarily big.
Alternatively, if you have Cypress Test Runner installed, then the test can be run by extracting the source code to local and run from Test Runner with 'cypress open' command on /cypress_deltatre directory. 

# UI Tests:
Implementation Details: Tests are all stored in /cypress_deltatre/cypress/integration/deltatre
Env variables like User details are stored in CYpress.env.json file and retrieved from there as a good practice as they are dependent on environments. Just did not define the env type as there is only one currently. 

Web Desktop with FULL HD Resolution(1920*1080)

To run the test for deltatre Insurance Purchase - Replace the {{browser}} with 'chrome' or 'firefoix': Navigate to /cypress_deltatre and hit:
cypress run --browser {{browser}} --spec .\cypress\integration\deltatre\ui_specs.js
(**Although i would prefer not to use Firefox given the pending issue with the GC collector issues currently while running tests. Firefox is just not fast enough to clean up the tests in memory at the moment.)


# API Tests:
First API makes a GET Call and verify the response code is 200 with returned body verified as array object and not empty array. 

Second API makes a POST Call and verify the response code is 201 and verify the returned body has the data that was sent with the POST payload. Verification for Name and Username.

To run test for API: cypress run --spec .\cypress\integration\deltatre\api_specs.js
If you want to see the output on the browser console run the API test on browser: 
cypress run --browser {{browser}} --spec .\cypress\integration\deltatre\api_specs.js


# Known Problems and WorkArounds
1. There could be issues while running the tests in Firefox Browser with version < 80. This is because of the slowness of the Firefox browser to do the Garbage Collection cleanup between the tests. To mitigate i have disabled the GC Collection on Global Cypress Configs and my tests were running on Firefox Browser version 81.
2. If you happen to have the latest cypress version, the /support/index.js file has the cookie whitelist feature. Just in case you use the latest version, change the keyword 'whitelist' => 'preserve'. 
