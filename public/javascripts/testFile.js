
var ar=[
'1',
'null',
'true',
'"\'quiz\'"',
'undefined',
'Symbol.for("blackbook")',
'new String("Vertech")',
'new Boolean(true)',
'new Number (2)',
'new Date(2015)',
' function X(){return true;}',
'new Object()',
 'var  arr= ["asher","harish","avani"];',
]

for (i=0; i<ar.length; i++){
document.write("<br/>"+(i+1)+".\t");
document.write("\t<input id='chk" + i + "' type='checkbox' value='0'/>\t");
document.write(ar[i]);
}

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