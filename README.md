# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

# Test Result

```
cd eth-contract
truffle test
```

- [Test result](Images/truffle%20test.png)

# Deploy contract

```
cd eth-contract
truffle migrate
```

```
 Writing artifacts to ./build/contracts

⚠️  Important ⚠️
If you're using an HDWalletProvider, it must be Web3 1.0 enabled or your migration will hang.


Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 9999999


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xa9a8b86cf010f569d9264f936d16a34ba95d04840d946fd09cacf7ded1b7997c
   > Blocks: 0            Seconds: 0
   > contract address:    0xce5863B0Af884077031ADb4B6E97E0Eb824aaAA2
   > account:             0xa97D5184FcAa54cc95B7ef956ffEc1A6995E275e
   > balance:             489.39861284
   > gas used:            236902
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00473804 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00473804 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x86d3a82561f58aa92bfbe953e66fa138263c075405e440e3b1dcb62aa044cfa9
   > Blocks: 0            Seconds: 0
   > contract address:    0xea8ccD4056cC24f1A8b86623CbA4BeacaB545E00
   > account:             0xa97D5184FcAa54cc95B7ef956ffEc1A6995E275e
   > balance:             489.37779362
   > gas used:            998593
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01997186 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xebe1bae2624049fb87002de3880b85d2bf43004dc3d4d7a4a6c845702d811d76
   > Blocks: 0            Seconds: 0
   > contract address:    0xEaD0831b14a3971FAc530cA62569595E0a5d1F31
   > account:             0xa97D5184FcAa54cc95B7ef956ffEc1A6995E275e
   > balance:             489.30411914
   > gas used:            3683724
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.07367448 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.09364634 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.09838438 ETH

Diptis-MBP:eth-contracts dipti$
```

# Deploy in public network

```
cd eth-contract
truffle migrate  --network rinkeby
```

```
Diptis-MBP:eth-contracts dipti$ truffle migrate --reset --network rinkeby
⚠️  Important ⚠️
If you're using an HDWalletProvider, it must be Web3 1.0 enabled or your migration will hang.


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999972


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xa08299a6c8f1359b95e6151888dae9bf7d71423c861f05ac1ab70fc4d25e5f97
   > Blocks: 1            Seconds: 16
   > contract address:    0xEAA8F42C57b75685aaE2a6f8092b375794E441Bd
   > account:             0xcFD2F93041466e781bf0a6F9251b8A76C95DD04F
   > balance:             0.596234904256381226
   > gas used:            238202
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00238202 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00238202 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xaa3cfb00fdf56f0c7dc7e450358a5df309f2d90ee89cdc868e9ef1b39f8fb777
   > Blocks: 0            Seconds: 12
   > contract address:    0xF00A3A9f66149E5865f8d9BA9e32e4F7825Abf80
   > account:             0xcFD2F93041466e781bf0a6F9251b8A76C95DD04F
   > balance:             0.585791294256381226
   > gas used:            998593
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00998593 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x4b22e1174d4f03c15d274c9f03fab8eefa3e722b4c37d9bbc0fe45fc92807d90
   > Blocks: 0            Seconds: 12
   > contract address:    0xec6321eF45b4ce8e067F673F5B61d543deAcbF0c
   > account:             0xcFD2F93041466e781bf0a6F9251b8A76C95DD04F
   > balance:             0.548797934256381226
   > gas used:            3699336
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03699336 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04697929 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04936131 ETH

Diptis-MBP:eth-contracts dipti$

```

https://rinkeby.etherscan.io/address/0xec6321ef45b4ce8e067f673f5b61d543deacbf0c

- [Rinkeby Etherscan](Images/etherscan.png)

## Opensea

https://testnets.opensea.io/collection/realestate-xuasqdqv52

https://testnets.opensea.io/assets/rinkeby/0xec6321ef45b4ce8e067f673f5b61d543deacbf0c/4

https://testnets.opensea.io/assets/rinkeby/0xec6321ef45b4ce8e067f673f5b61d543deacbf0c/1

# Project Resources

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)
