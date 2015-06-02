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

  describe("count letters in a number range", function(){
    it("2 to 3 must return 8", function(){
      expect(conversor.main(2, 3)).toBe("doistres".length);
    });

    it("63 to 65 must return 42", function(){
      expect(conversor.main(63, 65)).toBe("sessentaetressessentaequatrosessentaecinco".length);
    });

    it ("231 to 232 must return 38", function(){
      expect(conversor.main(231, 232)).toBe("duzentosetrintaeumduzentosetrintaedois".length);
    });

    it("998 to 1000 must return 49", function(){
      expect(conversor.main(998,1000)).toBe("novecentosenoventaeoitonovecentosenoventaenovemil".length);
    });
  });
});


