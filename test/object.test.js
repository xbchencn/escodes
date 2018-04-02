describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual escodes.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, escodes.deepClone(person))
        });

        it(`person === escodes.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, escodes.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`escodes.isEmptyObject({}) should return true`, function () {
            assert(escodes.deepClone({}))
        });

        it(`escodes.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(escodes.isEmptyObject({
                one: 1
            }))
        });

        it(`escodes.isEmptyObject([]) should return false`, function () {
            assert.notEqual(escodes.isEmptyObject([]))
        });
    });
})