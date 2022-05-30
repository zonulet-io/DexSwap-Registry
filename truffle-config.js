/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

 require("dotenv").config();
 const HDWalletProvider = require("@truffle/hdwallet-provider");
 
 mnemonic = process.env.KEY_MNEMONIC;
 infuraApiKey = process.env.KEY_INFURA_API_KEY;
 privateKey = process.env.PRIVATE_KEY;

 module.exports = {

   networks: {

    mainnet: {	
      provider: function () {	
        return new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraApiKey}`)	
      },	
      network_id: '1',	
      gas: 9000000,	
      gasPrice: 10000000000 
    },	
    private: {
     provider: () => new HDWalletProvider(mnemonic, `http://127.0.0.1:8545`),
     network_id: 1512051714758, // This network is yours, in the cloud.
     production: true, // Treats this network as if it was a public net. (default: false)
    },
  },
 
   mocha: {
     // timeout: 100000
   },

   plugins: [
    'truffle-plugin-verify'
    ],

    api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
    },
    
   // Configure your compilers
   compilers: {
     solc: {
       version: "0.6.2",
     },
   },
   solc: {
     optimizer: {
       enabled: true,
       runs: 200,
     },
   },
 };
 