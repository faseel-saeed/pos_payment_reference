odoo.define('pos_payment_reference.models', function(require) {
    "use strict";

    const {PosGlobalState, Order, Orderline, Payment} = require('point_of_sale.models');
    const Registries = require('point_of_sale.Registries');
    const core = require('web.core');
    const time = require('web.time');
    const QWeb = core.qweb;
    var _t = core._t;


    const PaymentWithReference = (Payment) => class PaymentWithReference extends Payment {
        constructor(obj, options) {
            super(...arguments);
        }


		/**
		 * Set the transaction_id.
		 *
		 * @param {string} ref - new transaction_id
		 */
		set_transaction_id(ref) {
			this.transaction_id = ref;
		}


		/**
		 * returns {string} transaction_id.
		 */
		get_transaction_id() {
			return this.transaction_id;
		}



    }

    Registries.Model.extend(Payment, PaymentWithReference);

});