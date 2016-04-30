

contract('Ticketbooth', function(accounts) {
	
	/* it("should assert true", function(done) {
		var ticketbooth = Ticketbooth.at(Ticketbooth.deployed_address); // deployed_address method retrieves address from blockchain
		assert.isTrue(true);
		done();   // stops tests at this point
	}); */


	it("Initial settings should match", function(done) {
		var ticketbooth = Ticketbooth.at(Ticketbooth.deployed_address);  // same as previous
		
		Ticketbooth.new({ from: accounts[0]  })
			.then(function(ticketbooth) {
				ticketbooth.quota.call().then(
					function(quota) {
						console.log("retrieved quota:",quota);
						assert.equal(quota, 500, "Quota doesn't match!"); 
					done();   // to stop these tests earlier, move this up
					
					}).then( function() {
						return ticketbooth.numRegistrants.call();
					}).then( function(num) {
						assert.equal(num, 0, "Registrants should be zero!");
						return ticketbooth.organizer.call();
					}).then( function(organizer) {
						assert.equal(organizer, accounts[0], "Owner doesn't match!");
					}).catch(done);
				}).catch(done);
	});


});