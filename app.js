
      const express = require('express');
      const nunjucks = require('nunjucks');

      const app = express();
      const router = require('./router');
      const port = 7000;

      /* Set up Express to serve HTML files using 'res.render' with the help of Nunjucks */
      app.set('view engine', 'html');
      app.engine('html', nunjucks.render);
      nunjucks.configure('views', { noCache: true });

      /* To host CSS from the server */
      app.use(express.static(__dirname));
      app.use('/styles', express.static('styles'));

      /* To use 'req.body' -- to parse 'application/json' content-type */
      app.use(express.json()); 

      /* To use 'req.body' -- to parse 'application/x-www-form-urlencoded' content-type */
      app.use(express.urlencoded({ extended: true }));

      /* Set up router */
      app.use('/', router);

      app.listen(port, () => {
        console.info(`Stripe Subscriptions demo running on port ${port}`);
      });
    
      //LK test
      app.post("/create-payment-intent", async (req, res) => {
            const { items, currency } = req.body;
            // Create a PaymentIntent with the order amount and currency
            const paymentIntent = await stripe.paymentIntents.create({
                amount: 19.99,
                currency: 'usd'
            });

            // Send publishable key and PaymentIntent details to client
            res.send({
                publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
                clientSecret: paymentIntent.client_secret
            });
      });
