var crypto = require('crypto');
/*
****** From a Web Browser with CryptoJS *****
var salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
var pass = CryptoJS.SHA512('anacleto').toString(CryptoJS.enc.Hex);
var key512Bits = CryptoJS.PBKDF2(pass, salt, { hasher:CryptoJS.algo.SHA512, keySize: 512 / 32, iterations: 1000 }).toString(CryptoJS.enc.Hex);
*/
var pass_hex = '12453b004c4c4bf2b32957b67afd9ca818e90f171dd6d7616f487c623936d9a056436fe4b42093d609323f8e22609afee5e957f7a17196f61899d91b77f2f1bd';
var salt_hex = '1dd6b34e9d12418c1ede5f207600425e';
var key_hex = '9210e29dda85213bb440526fa94e030f9ec41d384c855cd4ddf67cae50e1c403af6f375e2fa88ed58b47192a69a8313e980702cf4b938cb9ede6cee306326c9c';
var salt = new Buffer(salt_hex, 'hex');
var pass = new Buffer(pass_hex, 'hex');
crypto.pbkdf2(pass, salt, 1000, 512/8, 'sha512', function (err, key) {
  if (err)
    throw err;
  var x = key.toString('hex');
  var y = key_hex;
  console.assert(x === y, '\n' + x + '\n !== \n' + y);
  console.log(x === y);
});
