require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remove coach hope area bridge trumpet'; 
let testAccounts = [
"0x0c9cbc4a99ca78e738392db628959def9b7ad1b19eb6c45ba26d92ad738e8255",
"0x24eb8fab50c3a5f55b47b0f8f4ec1110287a6b5829c11f672441bf7c67d337d7",
"0xc53fdfa6c6b79bcc4e93f250109da6feb509bacd327886cbe4c7a4a320914b38",
"0xf5dd0e92475de61ecc83d68aac86b3f8b314b5d04a4b74a91c1a6df8499aa7b7",
"0x768e93e5c49d0914ff71861a0840c7833d32ef186500d4f6bf335e8a6587f543",
"0x6b9ae63872e94c8b962fa4c69f31df28ca0d1329a04f392c009af1fa053a434e",
"0x6ebbf4bc0f2f6788789bd8f0a5354a74e2f81f1d4a8e1d4e9ad1bf1a4f738b00",
"0xf90cac46a689f2ddc08e9aeaa1727c4b94d71843da8cc48d19265348c15133f1",
"0x472e22bb0caac559ac8b901712a9170ea4b29ab5d51771f6a2e055de1f8035dc",
"0xeff0b85391aef89d9d68b913f12692a810e0b7909b3e70b90959c9dc716d5833"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
