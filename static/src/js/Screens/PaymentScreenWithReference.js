odoo.define('pos_payment_reference.PaymentScreen', function(require) {
    "use strict";

    const PaymentScreen = require('point_of_sale.PaymentScreen');
    const Registries = require('point_of_sale.Registries');
    const NumberBuffer = require('point_of_sale.NumberBuffer');
    const core = require('web.core');
    const {batched} = require('point_of_sale.utils')
    const QWeb = core.qweb;

    var _t = core._t;


    const PaymentScreenWithReference = (PaymentScreen) =>
        class extends PaymentScreen {

        selectPaymentLine(event) {

            const { cid } = event.detail;
            const line = this.paymentLines.find((line) => line.cid === cid);
            this.openReferenceEntry(this,event,line);

            this.currentOrder.select_paymentline(line);
            NumberBuffer.reset();
            this.render(true);

        }

        setReference(cid,referenceNumber) {
            //console.log(cid,referenceNumber);
            const line = this.paymentLines.find((line) => line.cid === cid);
            console.log(line);

            line.set_transaction_id(referenceNumber);
            this.render(true);

        }

        async openReferenceEntry(self,event,_line) {
            if(!_line) return;


            const { confirmed, payload: inputReference } = await this.showPopup('TextInputPopup', {
                startingValue : _line.get_transaction_id(),
                title: 'Reference',
            });

            if (confirmed) {
                self.setReference(_line.cid,inputReference);
            }
        }


    }
    Registries.Component.extend(PaymentScreen, PaymentScreenWithReference);
    return PaymentScreenWithReference;

});