module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "flowtype",
        "react",
    ],
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    },
    "rules": {
        "flowtype/use-flow-type": 1,
        "flowtype/valid-syntax": 1,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": 0,
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1
            }
        ],
    }
};