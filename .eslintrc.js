module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": 0,
        "comma-dangle": 0,
        "semi": 0,
        'indent': [2, 4, {"SwitchCase": 1, "VariableDeclarator": 1}],
        'react/jsx-indent': 0,
        "eol-last": 0,
        "linebreak-style": 0
    },
    "globals": {
        "window": false
    }
}
