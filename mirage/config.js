export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.get('/orders', () => {
    return {
      data: [
        {id: 1, type: 'orders', attributes: { 'payment-status': 1 } },
        {id: 2, type: 'orders', attributes: { 'payment-status': 0 } },
        {id: 3, type: 'orders', attributes: { 'payment-status': 1 } },
      ]
    };
  });

  this.get('/orders/:id', (schema, request) => {
    let responseData = {
      data: {
        id: request.params.id,
        type: 'orders',
        attributes: { 'payment-status': 1 },
        relationships: {
          "payment-method": {
            data: { id: "42", type: "payment-methods" }
          }
        }
      }
    };

    if(request.queryParams.include === "payment_method") {
      responseData.included = [{
        type: "payment-methods",
        id: "42",
        attributes: { name: "Credit Card" }
      }];
    }

    return responseData;
  });



  // /orders/not-null?include=payment_method
}
