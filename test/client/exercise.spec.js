'use strict';
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

describe("Callback UnitTest", function() {

    it ("should have aCallback", function(done){
        namedFunc(function(res){
            expect(res).toContain('user');
            done();
        });
    });

it ("should have html", function(done){
        angularFunc(function(res){
            expect(res).toContain('user');
            done();
        });
    });

});