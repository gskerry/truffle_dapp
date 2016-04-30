
// **************************
// intro smart contract courtesy of guidance from: 
// https://consensys.github.io/developers/articles/101-noob-intro
// ************************

contract Ticketbooth {
	address public owner;
	mapping (address => uint) registrantsPaid;
	uint public numRegistrants;
	uint public quota;

	event Deposit(address _from, uint _amount); // (!) optional... just logged in EVM logs
	event Refund(address _to, uint _amount);

	function Conference(){
		owner = msg.sender;
		quota = 500;
		numRegistrants = 0;
	}

	function buyTicket() public returns (bool success) {
		if (numRegistrants >= quota){
			return false;
		} else {
			registrantsPaid[msg.sender] = msg.value;
			numRegistrants++;
			Deposit(msg.sender, msg.value); // optional per above.
			return true;
		}

	}

	function changeQuota(uint newquota) public {
		if (msg.sender != owner){ return; }
		quota = newquota;
	}

	function refundTicket(address recipient, uint amount) public {
		if (msg.sender != owner){ return; }
		if(registrantsPaid[recipient] == amount){
			address myAddress = this;
			if (myAddress.balance >= amount){
				recipient.send(amount);
				registrantsPaid[recipient] = 0;
				numRegistrants--;
				Refund(recipient, amount);
			}
		}
	}

	function destroy(){
		if(msg.sender == owner){
			suicide(owner);
		}
	}

}