

function testPrim(arg){
	console.log("arg:",arg);
    return eval(arg) === eval(arg) && arg.indexOf('function') !==0;
}

function getScore(){
	var score = 0;
	for (i=0; i<ar.length; i++){
		var answer1 = document.getElementById('chk'+i).checked;
		console.log("answer1:",answer1);
		var answer =testPrim(ar[i]);
		
		if (answer==answer1) score = score+1;
	}
	alert('Your score is:'+ (score/ar.length*100).toFixed(2));
}