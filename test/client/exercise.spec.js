'use strict';

describe("Callback UnitTest", function(res) {
    it ("should have aCallback", function(){
        namedFunc(function(res){
            expect(res).toBe('"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36"');
            done();
        });
    });
});