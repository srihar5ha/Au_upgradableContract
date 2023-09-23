const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xc3539427F03B2d1B2c2C7e5F9C9b24344940aF4b";
// 0xc3539427F03B2d1B2c2C7e5F9C9b24344940aF4b
// implementation address is 0xD60c73D54428FA1E2C5493838fF00C9629eaa203

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    upgraded.target
  );

  console.log("The current contract owner is: " + (await upgraded.owner()));
  console.log("Implementation contract address: " + implementationAddress);
//   0x97c8685337F365613dc91C8a059152d9b1479F11
}

main();