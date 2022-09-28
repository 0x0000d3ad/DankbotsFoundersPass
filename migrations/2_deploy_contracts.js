const { time } = require( '@openzeppelin/test-helpers' );

var FoundersPass = artifacts.require( "FoundersPass.sol" );
FoundersPass.synchronization_timeout = 600; //timeout in seconds

module.exports = function( deployer ) {
	const addresses = web3.eth.getAccounts();
	var res2 = deployer.deploy( FoundersPass );
}
