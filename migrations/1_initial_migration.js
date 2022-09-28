const Migrations = artifacts.require("Migrations");
Migrations.synchronization_timeout = 600; //timeout in seconds

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
