// const HelloWorld = artifacts.require("HelloWorld");
const Calculator = artifacts.require("Caculator");

module.exports = function (deployer) {
  // deployer.deploy(HelloWorld);
  deployer.deploy(Calculator);
};
