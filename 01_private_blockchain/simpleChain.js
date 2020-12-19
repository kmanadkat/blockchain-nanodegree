const SHA256 = require('crypto-js/sha256');

/* ====== Block Class ====================================
|  Class with a constructor for block data model       |
|  ======================================================*/
class Block {
  constructor(data){
    this.hash = "";
    this.height = 0;
    this.body = data;
    this.time = '';
    this.previousblockhash = "";
  }
}

/* ====== Blockchain ====================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - addBlock()                                     |
|  ======================================================*/
class Blockchain{
  constructor(){
    this.chain = [];
    this.addBlock(new Block("Genesis Block"));
  }

  addBlock(newBlock){
    if(this.chain.length > 0){
      newBlock.previousblockhash = this.chain[this.chain.length - 1].hash;
    }
    // Find out hash of new block
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    // Find out height of new block
    newBlock.height = this.chain.length;
    // Time of addition of block
    newBlock.time = new Date().getTime().toString();
    // add new block to chain
    this.chain.push(newBlock);
  }
}

let blockchain = new Blockchain();
blockchain.addBlock(new Block("2nd Block"));
blockchain.addBlock(new Block("3rd Block"));