describe("NumberExtension", function(){
  var conversor;

  beforeEach(function() {
  	conversor = new NumberExtension();
  });

  describe("when number is simple", function(){

	  it("1 must return size 2", function(){
	    expect(conversor.numbers(1)).toBe("um".length);
	  });

	  it("6 must return size 4", function(){
	    expect(conversor.numbers(6)).toBe("seis".length);
	  });

	  it("10 must return size 3", function() {
	  	expect(conversor.numbers(10)).toBe("dez".length);
	  });

	  it("30 must return size 6", function() {
	  	expect(conversor.numbers(30)).toBe("trinta".length);
	  });

    it("100 must return size 3", function(){
      expect(conversor.numbers(100)).toBe("cem".length);
    });
  });

  describe("when number is not simple", function(){

    it("22 must return 10", function() {
      expect(conversor.numbers(22)).toBe("vinteedois".length);
    });

    it("99 must return 13", function() {
      expect(conversor.numbers(99)).toBe("noventaenove".length);
    });

    it("101 must return 8", function(){
      expect(conversor.numbers(101)).toBe("centoeum".length);
    });

    it("513 must return 16", function(){
      expect(conversor.numbers(513)).toBe("quinhentosetreze".length);
    });

    it("726 must return size 21", function(){
      expect(conversor.numbers(726)).toBe("setecentosevinteeseis".length);
    });

    it ("999 must return 26", function(){
      expect(conversor.numbers(999)).toBe("novecentosenoventaenove".length);
    });
 });
});


