var aCallback = function(res) {
  if(document.getElementById('dvResult') !=null)
    document.getElementById('dvResult').innerHTML=JSON.stringify(res);
    };

var aCallbackangular = function(res) {
  if(document.getElementById('dvResult1') !=null)
      document.getElementById('dvResult1').innerHTML=res;
};

var namedFunc = (function namedFunc(cb) {
  var aUrl='http://httpbin.org/user-agent';
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() { 
        if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200){
           //console.log(anHttpRequest.readyState);
            cb(anHttpRequest.responseText); 
          };
    };
    anHttpRequest.open( "GET", aUrl, true );          
    anHttpRequest.send( null );
    return namedFunc;
})(aCallback);

var angularFunc = (function angularFunc(cb){
var promise = $.get('http://httpbin.org/user-agent');
    promise.then(
      function(payload) {
        cb(JSON.stringify(payload));
      });
    return angularFunc;
})(aCallbackangular);


