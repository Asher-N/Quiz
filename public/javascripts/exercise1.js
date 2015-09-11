function angularFunc() {
    var promise = $.get('http://httpbin.org/user-agent');
    console.log("hello");
    console.log(promise); 
    promise.then(
      function(payload) {
        console.log(payload);
        if(document.getElementById('dvResult') !==null)
            {
              //console.log('inside dvResult');
             document.getElementById('dvResult1').innerHTML=JSON.stringify(payload);
          }     
      });
};
//console.log('test');
angularFunc();
