var should = require('chai').should(),
    binaryruns = require('../binaryrun.min.js'),
    makeString = binaryruns.makeString,
    makeArray = binaryruns.makeArray;

describe('#makeString', function() {
    it('empty case', function() {
        makeString([]).should.equal('');
    });

    it('a zero', function() {
        makeString([1]).should.equal('0');
    });

    it('a one', function() {
        makeString([0, 1]).should.equal('1');
    });

    it('two-length run', function() {
        makeString([2]).should.equal('00');
    });

    it('2 runs', function() {
        makeString([2, 1]).should.equal('001');
    });

    it('3 runs', function() {
        makeString([0, 1, 2, 1]).should.equal('1001');
    });

    it('5 runs', function() {
        makeString([0, 4, 3, 1, 4, 2]).should.equal('11110001000011');
    });
});

describe('#makeArray', function() {
    it('empty case', function() {
        var arr = makeArray('');

        arr.length.should.equal(0);
    });

    it('a zero', function() {
        var arr = makeArray('0');

        arr[0].should.equal(1);
    });

    it('a one', function() {
        var arr = makeArray('1');

        arr[0].should.equal(0);
        arr[1].should.equal(1);
    });

    it('two-length run', function() {
        var arr = makeArray('00');

        arr[0].should.equal(2);
    });

    it('2 runs', function() {
        var arr = makeArray('001');

        arr[0].should.equal(2);
        arr[1].should.equal(1);
    });

    it('3 runs', function() {
        var arr = makeArray('1001');

        arr[0].should.equal(0);
        arr[1].should.equal(1);
        arr[2].should.equal(2);
        arr[3].should.equal(1);
    });

    it('5 runs', function() {
        var arr = makeArray('11110001000011');

        arr[0].should.equal(0);
        arr[1].should.equal(4);
        arr[2].should.equal(3);
        arr[3].should.equal(1);
        arr[4].should.equal(4);
        arr[5].should.equal(2);
    });
});
