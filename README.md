# Credit Card Validation

This is a micro-library for credit card validation. It checks a card number is valid and detects the issuing bank (IIN). It currently supports most major card issuers.

## Import

###Browser
Simply add the script (`<script src="card.min.js"></script>`) either just before the closing body tag or within the head of your page.

	var card = CardValidate('xxxxxxxxxxxxxxxx');

###Node.js

	var cardvalidate = require('card'),
		card = cardvalidate('xxxxxxxxxxxxxxxx');
	
## Usage

At the moment the script is purposefully simple and exposes only two public methods. 

	// returns default if unkown or the issuing bank's name (lowercase)
	card.getType();
	// returns true if the card is validated by Luhn algorithm
	// and matches card requirements or false if not
	card.isValid();

##TODO

Possibly add CVC length and expiration date checks.

## Disclaimer
This doesn't check that a credit card is real or that payment can be made with it. The Luhn algorithm is easily fooled as it's a simple mathematical formula, this just helps avoid typos and typical user errors. The only way to check if a card is actually valid (including CVC etc.), is by using a real payment provider that offers this service.

## Licensing

The code is [MIT licensed](http://opensource.org/licenses/MIT).

The trademarks and branding included in this project, namely those of the credit card providers, are property of their respective owners.