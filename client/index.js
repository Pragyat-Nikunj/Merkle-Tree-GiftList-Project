const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';
const MerkleTree = new MerkleTree(niceList)
async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  try {
    const root = MerkleTree.getRoot();
    const name = prompt("Type in your name");
    const index = niceList.findIndex(n => n === name);
    const proof = MerkleTree.getProof(index);
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      // TODO: add request body parameters here!
      name, 
      proof
    });
    console.log({ gift });
  }
  catch(error) {
    console.log("In catch block logging error.message:",error.message);
  }

  
}

main();