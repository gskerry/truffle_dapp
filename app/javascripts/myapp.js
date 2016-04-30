
function getOwner(){

	var showme = Showme.deployed();

	showme.getOwner.call()
		.then(function(owner) {
			var owner_element = document.getElementById("owner");
			owner_element.innerHTML = owner;
		}).catch(function(e) {
			console.log(e);
			setStatus("Error getting owner; see log.");
	});

}