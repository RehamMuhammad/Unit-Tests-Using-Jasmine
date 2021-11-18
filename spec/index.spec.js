/*************************************** Globals Task ************************************************/

const arrayFunctions = require("../index");

describe("testing math utilities", () => {
    let pos_vals;
    let neg_vals;
    let vals;
    let sum_of_vals;
  
    // at before all assign pos vals with array of positive numbers,
  
    // and assign negative vals with negative array of numbers,
  
    // assign vals to pos_vals.concat(neg_vals);
  
    // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));
    beforeAll(function(){
        pos_vals = [11,17,25,28,29];
        neg_vals = [-11,-17,-25,-28,-29];
        vals= pos_vals.concat(neg_vals)
        sum_of_vals=vals.reduce((x, y) => x + y, 0);
    })
  
    
    // at before each console.log all vals
    beforeEach(function(){
       console.log(pos_vals, neg_vals, vals, sum_of_vals);
    })

   
    // at after each console.log done
    afterEach(function(){
        console.log("done");
     })
  
    // at after all set all variables to 0
    afterAll(function(){
        pos_vals=0;
        neg_vals=0;
        vals=0;
        sum_of_vals=0
     })
  
    it("sum function should equal to sum of the values", () => {
        // var sum =0;
        // for(i=0; i<vals.length; i++){
        //     sum = sum + vals[i]
            
        // }
        expect(arrayFunctions.sum(vals)).toEqual(sum_of_vals);
    });
  
    it("positive function should equal to positive values", () => {
        // var posValues = [];
        // for(i=0; i<vals.length; i++){
        //     if (vals[i]>0){
        //         posValues.push(vals[i])
        //     }
        // }
        expect(arrayFunctions.positive(vals)).toEqual(pos_vals);
    });
  });



  /*************************************** Mock Spy Task ************************************************/


  var counter = {
    currentValues: function () {
      return 1;
    },
  };


    
  function sumOfValues() {
    return counter.currentValues();
   }




  describe("mock and spy", function () {

    it("spying", function () {

    //spy on counter object currentValue property and mock its implementation to equal [100]
    counter.currentValues = jasmine.createSpy(100)
    // expect some of values is returning the right value (new mocked value 100) after mocking
    expect(sumOfValues()).toEqual(counter.currentValues());
    // and expect that we called the spy function for one time
    //we have to call it 2 times to execute the above requirements
    expect(counter.currentValues).toHaveBeenCalledTimes(2); 

    });
  
  });
    /*******************************************************************************************************************/