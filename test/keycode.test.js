describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`escodes.getKeyName(13) should return "Enter"`, function () {
            assert(escodes.getKeyName(13) === 'Enter')
        });
    });

});