
contract Policies {
	
	address public owner;
	uint public royalty_rate;
	string public mymessage;

	function Policies(){
		owner = msg.sender;
		// royalty_rate = 0.07; // NO. "invalid literal value error"
		royalty_rate = 1 / 2;
	}

	function getMessage() returns(string){
		mymessage = "HELLO.";
		return mymessage;
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