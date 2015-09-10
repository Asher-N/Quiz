


function Operations(input){
    //console.log(input);

	if (isNaN(+input))
    	return 'BAD';

	var myvar=input ||0;

	this.increment = function(){
	        myvar+=1;
	        return myvar;
	};
	this.decrement = function(){
	        myvar -=1;
	        return myvar;
	};
}


var y = new Operations(100);
console.log(y.increment());
console.log(y.decrement());

var z = new Operations('BBO');
