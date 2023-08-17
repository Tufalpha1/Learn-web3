const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
 async function main() {
   // Deploy the Test Contract
   const greeterContract = await hre.ethers.deployContract("Greeter");
   await greeterContract.waitForDeployment();
   console.log("Greeter Contract deployed to:", greeterContract.target);

   // Sleep for 30 seconds to let Etherscan catch up with the deployments
   await sleep(30 * 1000);

   // Verify the NFT Contract
   await hre.run("verify:verify", {
     address: greeterContract.target,
     constructorArguments: [],
   });
 } 

 // We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
