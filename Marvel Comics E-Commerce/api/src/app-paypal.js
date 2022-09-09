// express settings
import express from "express";
import morgan from 'morgan';
import products from './routes/products';
import auth from './routes/auth';
import user from './routes/user';
import comics from './routes/comics';
import reviews from './routes/reviews';
import orders from './routes/orders';
import { createRole } from "./libs/initialSetup";
const paypal = require('paypal-rest-sdk')
const engines = require('consolidate')

const app = express()

app.engine('ejs', engines.ejs)
app.set('views', './src/views')
app.set('view engine', 'ejs')
createRole();
app.use(morgan('dev'));
app.use(express.json())

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AV-RY5Ap2rIqXpn1EsrvnCmEOSZndHPL_jGDdQfB84PFIdWnILXRauvg31EzBbycpvpYjqEMpsBEHac2',
    'client_secret': 'EFbktBLeEos9b_-UWzteKuK2yAs8Z83YanQadHD7Q_PnoWkbfPkjseQOqyPUuGPs7AN4o80f5mNEXqSJ'
  });

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/paypal', (req,res) => {
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:4000/success",
            "cancel_url": "http://localhost:4000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "This is the payment description."
        }]
    };
    
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
            res.redirect(payment.links[1].href)
        }
    });
})

app.get('/success', (req,res) => {

    var PayerID = req.query.PayerId
    var paymentId = req.query.paymentId

    var execute_payment_json = {
        "payer_id": PayerID,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "1.00"
            }
        }]
    }

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.respionse)
            throw error
        } else {
            console.log("Get Payment Response")
            console.log(JSON.stringify(payment))
            res.render('success')
        }
    })
})

app.get('/cancel', (req,res) => {
    res.render('cancel')
})

app.use('/products', products)
app.use('/auth', auth)
app.use('/users', user)
app.use('/comics', comics)
app.use('/reviews', reviews)
app.use('/orders', orders)
 export default app;