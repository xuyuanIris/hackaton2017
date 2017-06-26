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
        "linebreak-style": 0,
        "react/jsx-indent-props": 0,
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "react/prop-types": 0,
        "no-underscore-dangle": 0
    },
    "globals": {
        "window": false,
        "describe": false,
        "it": false,
        "expect": false
    }
}
