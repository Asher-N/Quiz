describe("A suite", function() {
   it("Test array values", function(){
    expect(true).toBe(true);
  });

  it("Add a new value", function(){
    expect(myObj.myProp=3).toEqual(3);
  });

  it("Add a new value", function(){
    expect(myObj.myProp=6).toEqual(6);
  });

   it("Test array values", function(){
     myObj.myProp=5;
     expect(myObj.myProp.indexOf(5)).toBe(-1);
   });

    it("Test array values", function(){
     myObj.myProp="7";
     expect(myObj.myProp.indexOf("7")).toBe(-1);
   });

});