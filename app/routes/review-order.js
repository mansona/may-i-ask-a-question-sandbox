import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('order', params.id, { include: 'payment_method'})
  }
});
