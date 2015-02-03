/**
 * A micro-library for credit card validation (using the Luhn algorithm).
 * It detects the issuing bank (IIN) from a card number using regular
 * expressions, this allows validation against card specific requirements.
 *
 * @author      Jack Buckland
 * @version     16/06/2013
 */
var CardValidate = (function() {

	function Card(cardNumber) {
		this.num = cardNumber + '';
		this.type = 'default';
		this.useLuhn = true;
	}

	Card.prototype = {
		_cards: {
			'amex': {
				prefix: /^3[47]/,
				size: [15]
			},
			'dinersclub': {
				prefix: /^(3[6-9]|30([0-5]|9))/,
				size: [14, 16]
			},
			'discover': {
				prefix: /^(6(5|011|4[4-9]|22))/,
				size: [16]
			},
			'jcb': {
				prefix: /^35(2[89]|[3-8][0-9])/,
				size: [15, 16]
			},
			'maestro': {
				prefix: /^(50(18|2|3)|5[68]|6(304|7))/,
				size: [12, 19]
			},
			'mastercard': {
				prefix: /^5[1-5]/,
				size: [16]
			},
			'unionpay': {
				prefix: /^62/,
				size: [16, 19],
				luhn: false
			},
			'visa': {
				prefix: /^4/,
				size: [13, 16]
			},
			'default': {
				prefix: /^\d{1,4}/g,
				size: [13, 19]
			}
		},

		_luhnlookup: [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],

		getType: function() {
			for(var c in this._cards) {
				if(this.num.match(this._cards[c].prefix)) {
					if('luhn' in this._cards[c]) {
						this.useLuhn = this._cards[c].luhn;
					}
					this.type = c;
					break;
				}
			}
			return this.type;
		},

		isValid: function() {
			var len = this._cards[this.getType()].size;

			if(this.num.length >= len[0] &&
				this.num.length <= len[len.length - 1]) {
				return this.useLuhn ? this._luhnCheck() : true;
			}

			return false;
		},

		_luhnCheck: function() {
			var sum = 0,
				i = this.num.length,
				odd = true;

			while(i--) {
				sum += (
					(odd = !odd) ?
					this._luhnlookup[this.num.charAt(i)] :
					this.num.charAt(i) | 0
				);
			}

			return sum % 10 == 0;
		}
	}

	return Card;
})();

if(typeof module !== 'undefined' && module.exports) {
	module.exports = function(num) {
		return new CardValidate(num);
	};
}