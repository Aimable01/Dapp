const hre = require("hardhat");

async function main() {
  const HelloDapp = await hre.ethers.getContractFactory("HelloDapp");
  const helloDapp = await HelloDapp.deploy("Hello, DApp!");

  await helloDapp.deployed();

  console.log("HelloDapp deployed to:", helloDapp.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
