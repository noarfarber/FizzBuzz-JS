describe("FizzBuzz", () => {
  let fizzBuzz
  
  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  it("should output 1 when I enter 1", function(){
    expect(fizzBuzz.play(1)).toEqual(1)
  });

  it("should return 'Fizz' when I enter 3", function(){
    expect(fizzBuzz.play(3)).toEqual("Fizz");
  });

  it("should return 'Buzz' when I enter 5", function(){
    expect(fizzBuzz.play(5)).toEqual("Buzz");
  });

  it("should return 'FizzBuzz' when I enter 15", function(){
    expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
  });

  it("should return 'FizzBuzz' when I enter 30", function(){
    expect(fizzBuzz.play(30)).toEqual("FizzBuzz");
  });

  it("should return 'Fizz' when I enter 9", function(){
    expect(fizzBuzz.play(9)).toEqual("Fizz");
  });
});
