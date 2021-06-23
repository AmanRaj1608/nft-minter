const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const URI = "QmRofP1xpMHAZZ13LcgZuT2ywVBwnnDuz8PG2kDVzEh8pH" //your metadata,json cid
  const WALLET_ADDRESS = "0x273F7826cC0741326aaD0e41c125934833D002E8"//YOUR_WALLET_ADDRESS
  const CONTRACT_ADDRESS = "0x386a867B3F17d6aA84A8847677A847333Cc10aaB" //contract address
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
