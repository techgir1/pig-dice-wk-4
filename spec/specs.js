describe('newPlayer', function () {
	it("allows a player to enter their name", function() {
		var testPlayer = new newPlayer("Beth");
		expect(testPlayer.userName).to.equal("Beth");
	});
});