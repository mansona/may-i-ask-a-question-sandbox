import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  paymentStatus: DS.attr('number', { defaultValue: 1 }),
  paymentMethod: DS.belongsTo('payment-method'),
});
