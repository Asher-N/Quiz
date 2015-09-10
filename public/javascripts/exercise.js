var myObj = Object.create(Object, (function(){
    var numbers =[];
    var shadow = {};
    return {
        myPropGreaterThanTen : {
        get : function(){return shadow.value }
    },
   myProp : {
       get: function(){return numbers},
       set: function(x){
       if(typeof(x) ==='number'){
          if(numbers.length===0)
              numbers.push(x);
          else if ( numbers[numbers.length-1]<x)
              numbers.push(x);
           }
       },
       enumerable : true
   }
}})());
var sealer = Object.seal(myObj);