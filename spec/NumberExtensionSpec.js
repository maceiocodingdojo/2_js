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

});
