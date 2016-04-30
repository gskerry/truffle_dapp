
contract Showme {
	
	address public owner;
	mapping (address => uint) balances;

	function getOwner() returns(address) {
		return owner;
	}

	function getOrigin () returns(address) {
		return tx.origin;
	}

}