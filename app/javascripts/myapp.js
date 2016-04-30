
function showme(){

	var showme = Showme.deployed();

	showme.getOwner.call()
		.then(function(owner) {
			var owner_element = document.getElementById("owner");
			owner_element.innerHTML = owner;
		}).catch(function(e) {
			console.log(e);
			setStatus("Error getting owner; see log.");
	});

	showme.getSender.call({from: account})
		.then(function(sender) {
			var sender_element = document.getElementById("txsender");
			sender_element.innerHTML = sender;
		}).catch(function(e) {
			console.log(e);
			setStatus("Error getting owner; see log.");
	});


}