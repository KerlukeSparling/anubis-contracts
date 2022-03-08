const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  // const deployerAddress = deployer.address;
  const deployerAddress = await deployer.getAddress();
  console.log('Deploying GHG Contract with address:', deployerAddress);

  const GoldStake = await hre.ethers.getContractFactory("GoldStake");
  
  const goldstake = await GoldStake.deploy();
  await goldstake.deployed();
  console.log('GoldStake contract deployed at', goldstake.address);

  const Gold = await hre.ethers.getContractFactory("Gold");
  
  const gold = await Gold.deploy();
  await gold.deployed();
  console.log('Gold contract deployed at', gold.address);

  const GoldHunter = await hre.ethers.getContractFactory("GoldHunter");
  
  const goldhunter = await GoldHunter.deploy();
  await goldhunter.deployed();
  console.log('GoldHunter contract deployed at', goldhunter.address);

  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });