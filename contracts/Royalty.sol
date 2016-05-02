
import "Policies.sol";

contract Royalty {
	
	address public owner;
	mapping (address => uint) balances;
	Policies public policies;
	uint public called;
	uint public payorBal;

	function Royalty(){
		owner = msg.sender;
		payorBal = msg.sender.balance;
	}

	function callPolicies(){
		called = policies.getRate();
		/* !!!
		NO-GO. Can't return dynamically-sized objects.
		Returning arrays also problematic.
		*/
	}

	function getOwner() returns(address) {
		return owner;
	}

	function getSender () returns(address) {
		return msg.sender;
	}

	 	
	// function setPayorBal (uint val) {
	// 	payorBal = web3.eth.getBalance(msg.sender);
	// 	...
	// }
	/*
		NO! Per Karl... contracts are imported/compiled/appended to single large app on EVM. All objects accessible (certainly with some exceptions) 
		
		See above... already have access "msg.sender.balance"... simple object notation.  
		
		Though...
		 - is msg.sender.balance property somehow set during compilation? deployment? 
		 - or does EVM interpolate msg.sender to an address, then return property of realAddress.balance?
	*/

	function getPayorBal () returns(uint) {
		return payorBal;
	}

	function destroy(){
		if(msg.sender == owner){
			suicide(owner);
		}
	}

}