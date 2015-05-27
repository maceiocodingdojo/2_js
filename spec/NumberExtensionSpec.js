describe("NumberExtension", function(){
  var conversor;

  beforeEach(function() {
  	conversor = new NumberExtension();
  });

  describe("when number is simple", function(){

	  it("1 must return size 2", function(){
	    expect(conversor.numbers(1)).toBe(2);
	  });
	  it("2 must return size 4", function(){
	    expect(conversor.numbers(2)).toBe(4);
	  });
	  it("3 must return size 4", function(){
	    expect(conversor.numbers(3)).toBe(4);
	  });
	  it("4 must return size 6", function(){
	    expect(conversor.numbers(4)).toBe(6);
	  });
	  it("5 must return size 5", function(){
	    expect(conversor.numbers(4)).toBe(6);
	  });
	  it("6 must return size 4", function(){
	    expect(conversor.numbers(6)).toBe(4);
	  });

	  it("10 must return size 3", function() {
	  	expect(conversor.numbers(10)).toBe(3);
	  });
	  it("30 must return size 6", function() {
	  	expect(conversor.numbers(30)).toBe("trinta".length);
	  });
  });

  it("22 must return 10", function() {
  	expect(conversor.numbers(22)).toBe(10)
  })
  it("99 must return 13", function() {
  	expect(conversor.numbers(99)).toBe(12)
  })

  it("101 must return ", function(){
  	expect(conversor.numbers(101)).toBe(8)
  })
  //it("129 must return ")

});


