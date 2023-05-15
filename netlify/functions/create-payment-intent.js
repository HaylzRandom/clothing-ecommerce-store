require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Serverless Function for Stripe
exports.handler = async (event) => {
	try {
		const { amount } = JSON.parse(event.body);

		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: 'gbp',
			payment_method_types: ['card'],
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ paymentIntent }),
		};
	} catch (error) {
		return {
			statusCode: 400,
			body: JSON.stringify({ error }),
		};
	}
};
