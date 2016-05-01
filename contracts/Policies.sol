
contract Royalty {
	
	address public owner;
	uint public royalty_rate

	function Royalty(){
		owner = msg.sender;
	}


	function getRate(uint rate) {
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