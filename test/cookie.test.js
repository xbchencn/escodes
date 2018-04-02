describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            escodes.setCookie('test', 'getTestValue')
        })
        it(`escodes.getCookie('test', 'getTestValue') should return true`, function () {
            assert(escodes.getCookie('test') === 'getTestValue')
        })
        after(function () {
            escodes.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            escodes.setCookie('test', 'removeTestValue')
        })
        it(`escodes.removeCookie('test') should return false`, function () {
            escodes.removeCookie('test')
            assert.notEqual(escodes.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`escodes.getCookie('test', 'setCookie') should return true`, function () {
            escodes.setCookie('test', 'setCookie')
            assert(escodes.getCookie('test') === 'setCookie')
        })
        after(function () {
            escodes.removeCookie('test')
        })
    })
})