# StormX Engineering Code Assignment

## NFT dApp

### User Story

As a crypto enthusiast, I'd like to purchase NFTs for my collection!

### Requirements

Build an intuitive dApp that connects with MetaMask for buying the NFT. Feel free to use our StormX Shrug NFT smart contracts and dApp as references (see below).

#### Submission

Please create a feature branch for your work and when complete open a pull request, tagging gitlab user `calvinh8`, `felipeaugusto1`, and `bonnevoyager` as the reviewers.

#### Timeline

While we expect that an MVP could be coded up in three hours feel free to spend up-to six hours on the assignment. If you do go over the six hour mark, please note as much in your pull request. We do not watch the clock, but we expect honesty and transparency in our team and hold each other to those standards.

### Acceptance Criteria

> The dApp should be working on a testnet such as Kovan or Rinkeby.

#### Frontend - dApp

Build a dApp that sells the NFTs allowing buyers to buy with ETH or STMX. Please use our Shrug NFT dApp for reference.

1. The dApp must be developed and built in React written in TypeScript
2. Connect the wallet with MetaMask
3. See the current NFT available for purchase
4. Purchase with ETH or STMX

#### Frontend - Mobile App

Build a mobile app that opens the dApp in MetaMask mobile app in-app browser.

1. The mobile app must be developed and built in React Native written in TypeScript
2. MetaMask in-app browser should be opened if it is installed, otherwise open the specific app store for the platform

#### Bonus - Solidity

If you have time, write your own smart smart contracts for the dApp.

1. Smart contracts must be written in Solidity
2. Write smart contracts for selling NFTs
3. Setup using Hardhat/Truffle and Ether.js/Web3.js
4. 80% test coverage
5. Deploy on testnet and use it for the dApp

# Resources

StormX Shrug NFT Smart Contracts: (https://github.com/stormxio/nft-shrug)[https://github.com/stormxio/nft-shrug]
StormX Shrug NFT dApp: (https://nft.stormx.io/)[https://nft.stormx.io/]

## How to Test

#### Web

- Deployed web frontend to https://stormx-test.surge.sh

- Test Locally

1. Clone this repository
2. run `cd web`
3. run `yarn`
4. web server should be running at `http://localhost:3000`

\*\* Detailed technical instructions can be found in web/readme.md

#### Mobile

1. Clone this repository.
2. run `cd mobile`
3. run `yarn`
4. run `yarn ios` or `yarn android` (Should attach your real iPhone/iPad for the iOS test)
5. App should be running on your emulator.
6. Pressing on `Open dapp` should navigate to your Metamask if installed, and open a dapp (which is deployed to https://stormx-test.surge.sh for testing purposes) through an in-app browser. If Metamask is not installed, it will open a Metamask installation page on the App Store or Google Play Store.

\*\* Detailed technical instructions can be found in mobile/readme.md


## Known issue

- On the dapp, if you switch to the StormX token as the payment option, there's an error to get the NFT price which makes it impossible to purchase NFT using StormX tokens. I assume there's an error in the getPrice method (https://github.com/stormxio/nft-shrug/blob/1b8e1e6323cedb12b449fdc5c7b257cc89fe765d/contracts/sale/ShrugSale.sol#L195) of a Sale smart contract which is deployed to Rinkeby Test Network. Love to talk more about this issue to debug.
