describe("countToBy", function() {
  it("checks to see if one input is a number", function() {
    expect(countToBy("hello")).to.equal('Please enter a valid number.')
  });

   it("checks to see if two inputs are numbers", function() {
     expect(countToBy("hello", "hello")).to.equal('Please enter a valid number.')
   });

   it("checks to see if both inputs are numbers", function() {
     expect(countToBy("hello", 5)).to.equal('Please enter a valid number.')
     expect(countToBy(5, "hello")).to.equal('Please enter a valid number.')
    //  expect(countToBy(5, 5)).to.equal(true)
   });

   it("counts up to a given number, by a given number", function() {
     expect(countToBy(12, 2)).to.equal("2,4,6,8,10,12")
   });

   it("counts up to the closest number", function() {
     expect(countToBy(12,5)).to.equal("5,10")
     expect(countToBy(5,7)).to.equal("Nice try, smarty pants!")
     expect(countToBy(7,7)).to.equal("7")
   });

   it("counts up to the closest number by float", function () {
     expect(countToBy(3, 1.5)).to.equal("1.5,3")
   });
 });
