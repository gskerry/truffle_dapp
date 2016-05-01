
contract Policies {
	
	address public owner;
	uint public royalty_rate;

	function Policies(){
		owner = msg.sender;
	}


	function setRate(uint newrate) {
		if (msg.sender != owner){ return; }
		royalty_rate = newrate;
	}


	function getRate() returns(uint) {
		return royalty_rate;
	}


	function destroy(){
		if(msg.sender == owner){
			suicide(owner);
		}
	}

}