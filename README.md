# Private Blockchain Project 1 Submission

Udacity Become Blockchain Developer Nanodegree first project submission branch. In this project we create a private blockchain in javascript. We use Node & Express JS RESTful framework for creating API to interact with blockchain.


### Installation & Setup

1. Make sure you are on `submission_prj1` branch, download the zip file / clone repository.
2. Extract the zip file & open terminal in root directory where `package.json` file is present.
3. To install all libraries execute `npm install`
4. To run the RESTful application execute `npm start`
5. Import [Postman Collection json](https://github.com/kmanadkat/blockchain-nanodegree/blob/submission_prj1/BlockChain%20Prj%201.postman_collection.json) in Postman & interact with Blockchain.


### Problem Statement

Your employer is trying to make a test of concept on how a Blockchain application can be implemented in his company.
He is an astronomy fans and he spend most of his free time on searching stars in the sky, that's why he would like
to create a test application that will allows him to register stars, and also some others of his friends can register stars
too but making sure the application know who owned each star.

#### What is the process describe by the employer to be implemented in the application?

1. The application will create a Genesis Block when we run the application.
2. The user will request the application to send a message to be signed using a Wallet and in this way verify the ownership over the wallet address. The message format will be: `<WALLET_ADRESS>:${new Date().getTime().toString().slice(0,-3)}:starRegistry`;
3. Once the user have the message the user can use a Wallet to sign the message.
4. The user will try to submit the Star object for that it will submit: `wallet address`, `message`, `signature` and the `star` object with the star information.
    The Start information will be formed in this format:
    ```json
        "star": {
            "dec": "68° 52' 56.9",
            "ra": "16h 29m 1.0s",
            "story": "Testing the story 4"
		}
    ```
5. The application will verify if the time elapsed from the request ownership (the time is contained in the message) and the time when you submit the star is less than 5 minutes.
6. If everything is okay the star information will be stored in the block and added to the `chain`
7. The application will allow us to retrieve the Star objects belong to an owner (wallet address). 


## Libraries used for this project

- This application will be created using Node.js and Javascript programming language. The architecture will use ES6 classes
because it will help us to organize the code and facilitate the maintnance of the code.
- Some of the libraries or npm modules you will use are:
    - "bitcoinjs-lib": "^4.0.3",
    - "bitcoinjs-message": "^2.0.0",
    - "body-parser": "^1.18.3",
    - "crypto-js": "^3.1.9-1",
    - "express": "^4.16.4",
    - "hex2ascii": "0.0.3",
    - "morgan": "^1.9.1"
    Remember if you need install any other library you will use `npm install <npm_module_name>`

Libraries purpose:

1. `bitcoinjs-lib` and `bitcoinjs-message`. Those libraries will help us to verify the wallet address ownership, we are going to use it to verify the signature.
2. `express` The REST Api created for the purpose of this project it is being created using Express.js framework.
3. `body-parser` this library will be used as middleware module for Express and will help us to read the json data submitted in a POST request.
4. `crypto-js` This module contain some of the most important cryotographic methods and will help us to create the block hash.
5. `hex2ascii` This library will help us to **decode** the data saved in the body of a Block.
