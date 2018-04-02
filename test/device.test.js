describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`escodes.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${escodes.getExplore()}`)
            assert(/^Chrome:/.test(escodes.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`escodes.getOS() should return "windows"`, function () {
            console.log(`OS:${escodes.getOS()}`)
            assert(escodes.getOS() === 'windows' || escodes.getOS() === 'MacOSX' || escodes.getOS() === 'linux')
        });
    });
});