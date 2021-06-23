const { expect } = require("chai");
describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://Qmaeuopsrtvkk4GmvHF6rFAPwDhGJGfnDbZXUo7Eh8ViVp";
    await nft.deployed();
    await nft.mint("0x51C5F4392C01Dd5F1BCfE512916Cc560703e2a3d", URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});