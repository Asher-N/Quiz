var testCallBack= function(res)
{
 console.log(res);
}

var aCallback = function(res) {
  console.log(res);
  
    if(document.getElementById('dvResult') !=null)
    {
      console.log('inside dvResult');
      document.getElementById('dvResult').innerHTML=res;
  }
};

var namedFunc = (function namedFunc() {
  var aUrl='http://httpbin.org/user-agent';
    console.log('httpget');
    //var response ='';s
    
   console.log(aUrl);
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() { 
        if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200){
           console.log(anHttpRequest.readyState);
            aCallback(anHttpRequest.responseText); 
          };
    };
    anHttpRequest.open( "GET", aUrl, true );          
    anHttpRequest.send( null );
    return namedFunc;
})();


