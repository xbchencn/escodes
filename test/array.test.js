describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`escodes.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(escodes.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('escodes.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(escodes.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`escodes.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(escodes.arrayEqual(arr, arr))
        });
    });
});