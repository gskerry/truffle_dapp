
contract Royalty {
	
	address public owner;
	mapping (address => uint) balances;

	function Royalty(){
		owner = msg.sender;
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