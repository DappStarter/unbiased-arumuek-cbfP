require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remain comic install hill flock subject'; 
let testAccounts = [
"0x6b25f9a8698b75401e714a7e27566f7b6c1437212b3d7fd2ead686f25156dfbe",
"0xe85c52f357265ba022e210c93adaa46785741c0c0748d249c9856fa8995723d7",
"0xaf9fee0092600353203b4195ebf25636457dcd91befd86b0effb3ea4988637bb",
"0x3e89a8438abb5771e882c6bb19c60b9326165494b26f4c5be725931cffa39550",
"0x8f8af8b38529890559abaab9660a4e03c9376b1c844e66f9218b04f9d45b0cb6",
"0x2738a71c6301234d5f8cca3bf9c2c5e96e8d38b9e366cf3dd5a76d6fd26a2210",
"0x30770fc5b05c5b11840c763d1f973453885fb8369fc9264c0b7e0bdee73be1c7",
"0x6a278868408cce29db13b9a9cc42e570b6c03f4bd2ff531f2b93063789c05b01",
"0x7f45083e7ab1f7172987f8b0b1d5739516ee822963b1f964c6469c601ce462a0",
"0xa24e71f1fb42c9bff640de567cedb904362625873421ef051ee18b9f7828b1e9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


