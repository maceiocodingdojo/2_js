describe("NumbersLength", function(){
  var conversor;

  beforeEach(function() {
  	conversor = new NumbersLength();
  });

  describe("when number is simple", function(){

	  it("Number 'um' must return size 2", function(){
	    expect(conversor.length_for_number(1)).toBe('um'.length);
	  });
    it("Number 'dois' must return size 4", function(){
	    expect(conversor.length_for_number(2)).toBe('dois'.length);
	  });
	  it("Number 'dez' must return size 3", function(){
	    expect(conversor.length_for_number(10)).toBe('dez'.length);
	  });
	  it("Number 'quinze' must return size 6", function() {
      expect(conversor.length_for_number(15)).toBe('quinze'.length);
	  });
	  it("Number 'trinta' must return size 6", function() {
	  	expect(conversor.length_for_number(30)).toBe("trinta".length);
	  });
	  it("Number 'quinhentos' must return size 10", function() {
	  	expect(conversor.length_for_number(500)).toBe("quinhentos".length);
	  });
  });

  describe("when number is not simple", function(){
    it("Number 'vinte e dois' must return size 10 without spaces", function() {
      expect(conversor.length_for_number(22)).toBe('vinteedois'.length)
    });
    it("Number 'noventa e nove' must return size 12 without spaces", function() {
      expect(conversor.length_for_number(99)).toBe('noventaenove'.length)
    });
    it("Number 'cento e um' must return size 8 without spaces", function(){
      expect(conversor.length_for_number(101)).toBe('centoeum'.length)
    });
    it("Number 'cento e trinta e um' must return size 15 without spaces", function(){
      expect(conversor.length_for_number(131)).toBe('centoetrintaeum'.length)
    });
    it("Number 'quinhentos e vinte e dois' must return size 21 without spaces", function(){
      expect(conversor.length_for_number(522)).toBe('quinhentosevinteedois'.length)
    });
    it("Number 'mil' must return size 3 without spaces", function(){
      expect(conversor.length_for_number(1000)).toBe('mil'.length)
    });
  });

  describe("#sum_by_range", function(){
    it("Sum between 9 and 12 must be 15", function(){
      expect(conversor.sum_by_range(9, 12)).toBe(15);
    });
    it("Sum between 501 and 503 must be 43", function(){
      expect(conversor.sum_by_range(501, 503)).toBe(43)
    });
    it("Sum between 1 and 1000 must be 19789", function(){
      expect(conversor.sum_by_range(1, 1000)).toBe(19789)
    });
  });

});



