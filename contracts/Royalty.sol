
import "Policies.sol";

contract Royalty {
	
	address public owner;
	mapping (address => uint) balances;
	Policies public policies;
	uint	public called;


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

	function destroy(){
		if(msg.sender == owner){
			suicide(owner);
		}
	}

}