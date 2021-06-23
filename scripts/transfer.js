const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const CONTRACT_ADDRESS = "0x386a867B3F17d6aA84A8847677A847333Cc10aaB" //contract address
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const senderaddress = "0x51C5F4392C01Dd5F1BCfE512916Cc560703e2a3d";
  // const owner = await contract.ownerOf(1);
  // console.log("Owner:", owner);
  // const uri = await contract.tokenURI(1);
  // console.log("URI: ", uri);
   tokenId = 18;
  const reciveraddress = "0x8CEA5d950AebaF6BB2461cb48A884740e9Edf7Ee";
  await contract.transferFrom(senderaddress,reciveraddress, tokenId );
  
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
