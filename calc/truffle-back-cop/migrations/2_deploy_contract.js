// const HelloWorld = artifacts.require("HelloWorld");
const Calculator = artifacts.require("Calculator");

module.exports = function (deployer) {
  // deployer.deploy(HelloWorld);
  deployer.deploy(Calculator);
};
