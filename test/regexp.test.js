describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('escodes.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(escodes.isEmail("leiquanlive.com"))
        });
        it('escodes.isEmail("leiquan@live.com") should return true ', function () {
            assert(escodes.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('escodes.isIdCard("622224188203234033") should return true ', function () {
            assert(escodes.isIdCard("622224188203234033"))
        });
        it('escodes.isIdCard("zas224188203234033") should return false', function () {
            assert(!escodes.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('escodes.isPhoneNum("18882324234") should return true ', function () {
            assert(escodes.isPhoneNum("18882324234"))
        });
        it('escodes.isPhoneNum("8618882324234") should return true ', function () {
            assert(escodes.isPhoneNum("8618882324234"))
        });
        it('escodes.isPhoneNum("5534553") should return false', function () {
            assert(!escodes.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('escodes.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(escodes.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('escodes.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(escodes.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('escodes.isUrl("www.baidu.com") should return true', function () {
            assert(escodes.isUrl("www.baidu.com"))
        });
        it('escodes.isUrl("baidu.com") should return true', function () {
            assert(escodes.isUrl("baidu.com"))
        });
        it('escodes.isUrl("http://baiducom") should return false', function () {
            assert(!escodes.isUrl("http://baiducom"))
        });
    });

});