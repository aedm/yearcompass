// To update accounts on localhost:
// $ meteor mongo < yearcompass_mongo_auth_keys.js

var services = [
  {
    "service": "facebook",
    "appId": "184558961892090",
    "secret": "3f6bef4ae1484b97f7626557b5067058",
  },
  {
    "service": "google",
    "clientId": "1050780266896-cd28hmk5ucmc2p0i1g0bv3svkb04uuos.apps.googleusercontent.com",
    "secret": "FWGp2ZPeIulmcGlMl1X7KdLF",
  },
  {
    "service": "twitter",
    "consumerKey": "NI0Kr6altdpqZLL82n2KWLVln",
    "secret": "8mRHa74UFTF5Ogi4DDFgAFq914zaskreC6GqEQY8orIkvBlV2G",
    "loginStyle": "popup"
  }
];

var serviceConfig = db.meteor_accounts_loginServiceConfiguration;

serviceConfig.drop();

services.forEach(function(elem) {
  if (serviceConfig.find({service: elem.service}).count() == 0) {
    serviceConfig.insert(elem);
  }
});