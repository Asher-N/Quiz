
var ar=[
'1',
'null',
'true',
'"\'quiz\'"',
'undefined',
'Symbol("blackbook")',
'new String("Vertech")',
'new Boolean(true)',
'new Number (2)',
'new Date(2015)',
'  function X(){return true;}',
'new Object()',
 '["asher","harish","avani"];'
]

for (i=0; i<ar.length; i++){
document.write("<br/>"+(i+1)+".\t");
document.write("\t<input id='chk" + i + "' type='checkbox' value='0'/>\t");
document.write(ar[i]);
}

function testPrim(arg){
	console.log("arg:",arg);
	var symRE=/Symbol\([\'\"][^\'\"]*[\'\"]\)/
    return eval(arg) === eval(arg) && arg.trim().indexOf('function') !== 0 || symRE.test(arg);
}

function getScore(){
	var score = 0;
	for (i=0; i<ar.length; i++){
		var result = testPrim(ar[i]);
		var answer = document.getElementById('chk'+i).checked;
		console.log("func:", result, " Student answer:",answer);
		
		if (result===answer) score = score+1;
	}
	alert('Your score is:'+ (score/ar.length*100).toFixed(2));
}