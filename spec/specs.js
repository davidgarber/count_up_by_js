// describe("countTo", function() {
//   it("will count in numerical order by 1 to a number", function() {
//       expect(countTo(3)).to.equal(1,2,3);
//   });
// });
//
// describe("countBy", function() {
//   it("will count in multiples of a specified number", function() {
//     expect(countBy(2)).to.equal(2,4,6);
//   });
// });

describe("countUpby", function() {
  it("will count up to a number in multiples of a specified number", function() {
    expect(countUpby(2,6)).to.eql([2,4,6]);
  });
});
