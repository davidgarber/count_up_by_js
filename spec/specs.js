describe("countUpby", function() {
  it("will count up to a number in multiples of a specified number", function() {
    expect(countUpby(2,6)).to.eql([2,4,6]);
  });
});
