function createColorHelper(series){

const helpers = series.map((s) => {
    const helper = {};
    helper.name = s.name;
    helper.text = s.title;
    helper.light = s.colorLight;
    helper.dark = s.colorDark;
    return helper;
})

return helpers;

}

module.exports = createColorHelper;