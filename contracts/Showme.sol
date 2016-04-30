
contract Showme {
	
	address public owner;
	mapping (address => uint) balances;

	function Showme(){
		owner = msg.sender;
	}

	function getOwner() returns(address) {
		return owner;
	}

	function getSender () returns(address) {
		return msg.sender;
	}



}