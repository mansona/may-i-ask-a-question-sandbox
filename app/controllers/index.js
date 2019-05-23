import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  actions: {
    createOrder() {
      let paymentMethod = this.store.createRecord('payment-method', {
        name: 'Credit Card'
      });

      let order = this.store.createRecord('order', {
        id: 'not-null',
        paymentStatus: 1,
        paymentMethod: paymentMethod,
      });

      // we don't actually save because I don't have a backend setup correctly
      // order.save().then(() => { })

      // when we're done transition to review route with the model
      this.transitionToRoute('review-order', order);
    }
  }
});
