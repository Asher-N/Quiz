'use strict';
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