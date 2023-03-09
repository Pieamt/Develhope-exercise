const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}



let values =  Object.values(order);
if (values) {
  console.log('City is required');
}