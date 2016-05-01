
import "Policies.sol";

contract Royalty {
	
	address public owner;
	mapping (address => uint) balances;
	Policies public policies;
	uint public called;
	uint public payorBal;

	function Royalty(){
		owner = msg.sender;
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

	function setPayorBal () {
		payorBal = web3.eth.getBalance(msg.sender);
		/*  !!!!
		NO-GO
		Solidity can't make web3 calls... So solidity contracts can't get 'real' balances of 'real' accounts on the chain?
		*/
	}

	function getPayorBal () returns(uint) {
		return payorBal;
	}

	function destroy(){
		if(msg.sender == owner){
			suicide(owner);
		}
	}

}