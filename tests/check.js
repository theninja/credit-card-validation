var mocha = require('mocha'),
	assert = require('assert'),
	card = require('../src/card'),
	shoulbe,
	validate = function(card, valid, name) {
		assert.equal(card.getType(), name || 'default');
		assert.equal(card.isValid(), valid);
	};

describe('[Valid, known credit card types] =>', function() {

	shoulbe = 'should be recognised and valid ';

	// American Express
	it(shoulbe + 'American Express #1', function() {
		validate(card('378282246310005'), true, 'amex');
	});
	it(shoulbe + 'American Express #2', function() {
		validate(card('371449635398431'), true, 'amex');
	});
	it(shoulbe + 'America Express #3', function() {
		validate(card('340000000000009'), true, 'amex');
	});
	// American Express Corporate
	it(shoulbe + 'America Express #4', function() {
		validate(card('378734493671000'), true, 'amex');
	});

	// Diner's Club
	it(shoulbe + 'Diner\'s Club #1', function() {
		validate(card('30569309025904'), true, 'dinersclub');
	});
	it(shoulbe + 'Diner\'s Club #2', function() {
		validate(card('38520000023237'), true, 'dinersclub');
	});
	// Diner's club/carte blanche
	it(shoulbe + 'Diner\'s Club #3', function() {
		validate(card('30000000000004'), true, 'dinersclub');
	});
	it(shoulbe + 'Diner\'s Club #4', function() {
		validate(card('30111568643463'), true, 'dinersclub');
	});

	// Discover
	it(shoulbe + 'Discover #1', function() {
		validate(card('6011111111111117'), true, 'discover');
	});
	it(shoulbe + 'Discover #2', function() {
		validate(card('6011000990139424'), true, 'discover');
	});
	it(shoulbe + 'Discover #3', function() {
		validate(card('6011000000000004'), true, 'discover');
	});
	it(shoulbe + 'Discover #4', function() {
		validate(card('6011454931724887'), true, 'discover');
	});

	// JCB
	it(shoulbe + 'JCB #1', function() {
		validate(card('3530111333300000'), true, 'jcb');
	});
	it(shoulbe + 'JCB #2', function() {
		validate(card('3566002020360505'), true, 'jcb');
	});
	it(shoulbe + 'JCB #3', function() {
		validate(card('3528069647940800'), true, 'jcb');
	});
	it(shoulbe + 'JCB #4', function() {
		validate(card('3528117027498814'), true, 'jcb');
	});

	// Maestro
	it(shoulbe + 'Maestro #1', function() {
		validate(card('6763946698976220'), true, 'maestro');
	});
	it(shoulbe + 'Maestro #2', function() {
		validate(card('5038031154140958'), true, 'maestro');
	});
	it(shoulbe + 'Maestro #3', function() {
		validate(card('6762613092357065'), true, 'maestro');
	});
	it(shoulbe + 'Maestro #4', function() {
		validate(card('67595425364017391'), true, 'maestro');
	});

	// MasterCard
	it(shoulbe + 'MasterCard #1', function() {
		validate(card('5555555555554444'), true, 'mastercard');
	});
	it(shoulbe + 'MasterCard #2', function() {
		validate(card('5105105105105100'), true, 'mastercard');
	});
	it(shoulbe + 'MasterCard #3', function() {
		validate(card('5500000000000004'), true, 'mastercard');
	});
	it(shoulbe + 'MasterCard #4', function() {
		validate(card('5206034443216817'), true, 'mastercard');
	});

	// UnionPay
	it(shoulbe + 'UnionPay #1', function() {
		validate(card('6234253249408910'), true, 'unionpay');
	});
	it(shoulbe + 'UnionPay #2', function() {
		validate(card('6272488046844117'), true, 'unionpay');
	});
	it(shoulbe + 'UnionPay #3', function() {
		validate(card('6291504680378083'), true, 'unionpay');
	});
	it(shoulbe + 'UnionPay #4', function() {
		validate(card('6265957185286376'), true, 'unionpay');
	});

	// Visa
	it(shoulbe + 'Visa #1', function() {
		validate(card('4111111111111111'), true, 'visa');
	});
	it(shoulbe + 'Visa #2', function() {
		validate(card('4012888888881881'), true, 'visa');
	});
	it(shoulbe + 'Visa #3', function() {
		validate(card('4222222222222'), true, 'visa');
	});
	it(shoulbe + 'Visa #4', function() {
		validate(card('4242424242424242'), true, 'visa');
	});
});

describe('[Valid, unknown credit card types (default)] =>', function() {

	shoulbe = 'should be unrecognised but valid ';

	// Not detecting as Dankort are often combined with a Visa cards nowadays.
	it(shoulbe + 'Dankort (not implemented)', function() {
		validate(card('5019717010103742'), true);
	});
	it(shoulbe + 'JCB old IIN', function() {
		validate(card('3088000000000009'), true);
	});
	it(shoulbe + 'Switch/Solo (Paymentech)', function() {
		validate(card('6331101999990016'), true);
	});
	it(shoulbe + 'Maestro old IIN', function() {
		validate(card('0604243228042426'), true);
	});
});

describe('[Invalid, known credit card types] =>', function() {

	shoulbe = 'should be recognised but invalid ';

	// American Express
	it(shoulbe + 'American Express #1', function() {
		validate(card('34'), false, 'amex');
	});
	it(shoulbe + 'American Express #2', function() {
		validate(card('37'), false, 'amex');
	});

	// Diner's Club
	it(shoulbe + 'Diner\'s Club #1', function() {
		validate(card('305'), false, 'dinersclub');
	});
	it(shoulbe + 'Diner\'s Club #2', function() {
		validate(card('302'), false, 'dinersclub');
	});

	// Discover
	it(shoulbe + 'Discover #1', function() {
		validate(card('6011'), false, 'discover');
	});
	it(shoulbe + 'Discover #2', function() {
		validate(card('622128'), false, 'discover');
	});

	// JCB
	it(shoulbe + 'JCB #1', function() {
		validate(card('3528'), false, 'jcb');
	});
	it(shoulbe + 'JCB #2', function() {
		validate(card('3589'), false, 'jcb');
	});

	// Maestro
	it(shoulbe + 'Maestro #1', function() {
		validate(card('5018'), false, 'maestro');
	});
	it(shoulbe + 'Maestro #2', function() {
		validate(card('5038'), false, 'maestro');
	});

	// MasterCard
	it(shoulbe + 'MasterCard #1', function() {
		validate(card('51'), false, 'mastercard');
	});
	it(shoulbe + 'MasterCard #2', function() {
		validate(card('53'), false, 'mastercard');
	});

	// UnionPay
	it(shoulbe + 'UnionPay #1', function() {
		validate(card('6232'), false, 'unionpay');
	});
	it(shoulbe + 'UnionPay #2', function() {
		validate(card('6286'), false, 'unionpay');
	});

	// Visa
	it(shoulbe + 'Visa #1', function() {
		validate(card('4'), false, 'visa');
	});
	it(shoulbe + 'Visa #2', function() {
		validate(card('417500'), false, 'visa');
	});
});

describe('[Invalid, unkown credit card types] =>', function() {

	shoulbe = 'should be unrecognised and invalid ';

	it(shoulbe + '#1', function() {
		validate(card('76009244561'), false);
	});
	it(shoulbe + '#2', function() {
		validate(card('7786942651495338'), false);
	});
	it(shoulbe + '#3', function() {
		validate(card('8736704138107523'), false);
	});
	it(shoulbe + '#4', function() {
		validate(card('1678418975789095'), false);
	});
	it(shoulbe + '#5', function() {
		validate(card('887581025762483'), false);
	});
	it(shoulbe + '#6', function() {
		validate(card('9701770619489254'), false);
	});
	it(shoulbe + '#7', function() {
		validate(card('205154769774526'), false);
	});
	it(shoulbe + '#8', function() {
		validate(card('323801480300724'), false);
	});
});
