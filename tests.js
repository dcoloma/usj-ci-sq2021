test("Letters", function (assert) {
    assert.equal(isValidPlate("1234BBB"), true, "ALL UPPERCASE CONSONANTS");
    assert.equal(isValidPlate("2354bnm"), true, "ALL LOWERCASE CONSONANTS");
    assert.equal(isValidPlate("7485AIO"), false, "ALL UPPERCASE VOCALS");
    assert.equal(isValidPlate("1234eou"), false, "ALL LOWERCASE VOCALS");
    assert.equal(isValidPlate("6756ñññ"), false, "ALL LOWERCASE ny");
    assert.equal(isValidPlate("3243ÑÑÑ"), false, "ALL UPPERCASE NY");
    assert.equal(isValidPlate("5416qqq"), false, "ALL LOWERCASE q");
    assert.equal(isValidPlate("5151QQQ"), false, "ALL UPPERCASE Q");
    assert.equal(isValidPlate("2345*_:"), false, "ALL SPECIAL CHARACTER");
    assert.equal(isValidPlate("1111356"), false, "ALL NUMBERS");
});
test("Numbers", function (assert) {
    assert.equal(isValidPlate("SCVSNMC"), false, "ALL UPPERCASE CONSONANTS");
    assert.equal(isValidPlate("vsdfFGD"), false, "ALL DOWNCASE CONSONANTS");
    assert.equal(isValidPlate("AEIALKM"), false, "ALL UPPERCASE VOCALS");
    assert.equal(isValidPlate("iouaPNM"), false, "ALL DOWNCASE VOCALS");
    assert.equal(isValidPlate(":¨-*BMN"), false, "ALL SPECIAL CHARACTER");
    assert.equal(isValidPlate("ññññDGS"), false, "ALL LOWERCASE NY");
    assert.equal(isValidPlate("ÑÑÑÑHNL"), false, "ALL UPPERCASE NY");
    assert.equal(isValidPlate("qqqqCCS"), false, "ALL LOWERCASE q");
    assert.equal(isValidPlate("QQQQPLM"), false, "ALL UPPERCASE Q");
});

test("Length", function (assert) {
    assert.equal(isValidPlate("734NMC"), false, "LESS 7 CHARACTERS(ONE LESS NUMBER)");
    assert.equal(isValidPlate("212MSDF"), false, "LESS 7 CHARACTERS(ONE LESS CHARACTER)");
    assert.equal(isValidPlate("52354NLA"),false, "MORE 7 CHARACTERS(ONE MORE NUMBER)");
    assert.equal(isValidPlate("9544KLMB"),false, "MORE 7 CHARACTERS(ONE MORE CHARACTER)");
});

test("Other", function (assert) {
    assert.equal(isValidPlate("*-? *!+"), false, "ALL SPECIAL CHARACTERS");
    assert.equal(isValidPlate("KLMN562"), false, "CHANGE TYPE");
    assert.equal(isValidPlate("nmbvczs"), false, "ALL DOWNCASE CONSONANTS");
});


