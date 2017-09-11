const apiKey = 'HYJWdqxSRWV7GEEr8kGaEw';
const EasyPost = require('node-easypost');

const api = new EasyPost(apiKey);

const fromAddress = new api.Address({
  name: 'EasyPost',
  street1: '118 2nd Street',
  street2: '4th Floor',
  city: 'San Francisco',
  state: 'CA',
  zip: '94105',
  phone: '415-123-4567',
});

/* es5 with promises: */
fromAddress.save().then((addr) => {
  console.log(addr.id); // eslint-disable-line
});
