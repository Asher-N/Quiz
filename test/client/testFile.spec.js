describe("A suite", function() {
  
  //  beforeAll(function(next){
  //   	fixture.setBase('base/public');
  //   	this.result = fixture.load('index.html');
  //   	setTimeout(next,50);
  // });


  // beforeEach(function(){
  //   this.result = fixture.load('index.html', 'test1.json');
  // });
 
  // afterEach(function(){
  //   fixture.cleanup()
  // });
 
  // it('plays with the html fixture', function(){
  //   expect(fixture.el.firstChild).to.equal(this.result[0][0]);
  // });


  it("Test array values", function(){
	 ar.forEach(function(el, index){
		expect(testPrim(el)).toEqual(index<7); 	
	 })
  	
  });



  it("Test pimitive numeric", function(){
  expect(testPrim("100")).toEqual(true);
  });

});