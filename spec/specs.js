describe('newPlayer', function () {
	it("allows a player to enter their name", function() {
		var testPlayer = new newPlayer("Beth");
		expect(testPlayer.userName).to.equal("Beth");
	});
});

describe('Roll', function() {
    it("returns a random number between 1 and 6", function() {
        var testTurn = new Roll();
        expect(testTurn.activePlayer()).to.be.within(1, 6);
    });
});