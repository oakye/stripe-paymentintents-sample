README.txt
============
Overview
---------
This document describes how the author implemented the PaymentIntents integration, for purposes of the Stripe PM take-home assignment.

The code is provided for both client-side and server-side interactions with Stripe.

It is written assuming use of a React javascript library, and the Node platform.

Assumptions
------------
To run this sample locally you need to start both a local dev server for the front-end and another server for the back-end.

You will need a Stripe account with its own set of API keys.

Note: both the root directory (under react-app in this sample) and the react-app/client/ directory contain subdirectories called "node_modules" that are not uploaded to this sample, for the sake of space and github generally dissuading that. We assume that you have copies of this subfolder in both the root and client/ directories. (* Author Note *: I know this may be unusual; rather than work on troubleshooting the code that is causing this, which would take time away from the paymentIntents integration, I worked around issues by doing this.)


How to run the code locally
--------------------------

Follow the steps below to run locally.

>>>>> Installing and cloning the sample manually

Manually clone and configure the sample. From a terminal screen, type:

***** EDIT ***** git clone https://github.com/stripe-samples/react-app

>>>>> Copy the .envexample file into a file named .env in the folder of the server you want to use. For example:

cp .envexample react-app/.env

>>>>> You will need a Stripe account in order to run the demo. Once you set up your account, go to the Stripe Dashboard > Developers > API keys to find your API keys.

STRIPE_PUBLISHABLE_KEY=<replace-with-your-publishable-key>
STRIPE_SECRET_KEY=<replace-with-your-secret-key>

>>>>> Here is the directory structure in this sample. Your structure may be different.
react-app/
  .envexample
  .clijson
  .gitignore
  app.js
  package-lock.json
  package.json
  README.txt
  server.js
  client/
  	.gitignore
  	node_modules/ (* Author Note: For my demo to work, there are 2 similar node_modules folders *)
  	package.json
  	public/
  		favicon.ico
  		index.html
  		robots.txt
  	README.txt
  	src/
  		api.js
  		App.css
  		App.js
  		components/
  			CheckoutForm.css
  			CheckoutForm.js
  			DemoText.css
  			DemoText.js
  		index.css
  		index.js
  	yarn.lock
  node_modules/
  server/


Running the API server
----------------------
>>>>> Go to the directory with the server.js file. In this case, this is the react-app/ folder.

>>>>> From the Terminal, start the server by typing:
npm start

Your terminal should respond with a message confirming the back-end server is up at http://localhost:4242/.


Running the React client
-------------------------
>>>>> Go to /client (example: react-app/client/)

>>>>> From the Terminal, start the client by typing:
sudo yarn (* Author Note: I had permissions issues.)

When prompted, enter the admin password for your client server.

>>>>> Type:
sudo yarn start 

Your default browser should now open with the front-end being served from http://localhost:3000/.


Using the sample app
---------------------
When running both servers, you are now ready to use the app running in http://localhost:3000.

>>>>> Enter your name and card details
Make sure to use sample card numbers noted in Step 5 of Accept a Payment doc: https://stripe.com/docs/payments/accept-a-payment#web-test-integration

>>>>> Hit "Pay"

Confirm post-payment events
---------------------------
From within your Dashboard, go to Dashboard > Payments to look at the events logged.
