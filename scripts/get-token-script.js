const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const CONTRACT_ADDRESS = "0x386a867B3F17d6aA84A8847677A847333Cc10aaB"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(1);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(4);
  console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});