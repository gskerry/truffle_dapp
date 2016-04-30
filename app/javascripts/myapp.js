
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

	showme.getOrigin.call()
		.then(function(origin) {
			var origin_element = document.getElementById("txorigin");
			origin_element.innerHTML = origin;
		}).catch(function(e) {
			console.log(e);
			setStatus("Error getting owner; see log.");
	});


}