describe("NumberExtension", function(){

  it("1 must return size 2", function(){
    expect(new NumberExtension().numbers(1).length).toBe(2);
  });
  it("2 must return size 4", function(){
    expect(new NumberExtension().numbers(2).length).toBe(4);
  });
  it("3 must return size 4", function(){
    expect(new NumberExtension().numbers(3).length).toBe(4);
  });
  it("4 must return size 6", function(){
    expect(new NumberExtension().numbers(4).length).toBe(6);
  });
  it("5 must return size 5", function(){
    expect(new NumberExtension().numbers(4).length).toBe(6);
  });

});
