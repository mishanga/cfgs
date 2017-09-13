module.exports = {
    "plugins": ["bem-xjst", "mocha"],
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6
    },
    "globals": {
        "console": false,
        "Uint8Array": false
    },
    "rules": {
        "valid-jsdoc": [1, {
            "prefer": {
                "arg": "param",
                "argument": "param",
                "class": "constructor",
                "return": "returns",
                "virtual": "abstract"
            },
            "requireReturn": false,
            "requireParamDescription": false,
            "requireReturnDescription": false
        }],
        "semi": [2, "always", {"omitLastInOneLineBlock": true}],
        "semi-spacing": [2, {"before": false, "after": true}],
        "wrap-iife": [2, "inside"],
        "no-use-before-define": [2, "nofunc"],
        // "new-cap": ["error", { "properties": false }], // Сомнительное правило, слишком много левых ошибок
        "no-caller": 2,
        "no-cond-assign": [2, "except-parens"],
        "no-constant-condition": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": [2, {"allowEmptyCatch": true}],
        "no-extra-boolean-cast": 2,
        // "no-extra-parens": [2, "all"],
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-new": 2,
        "no-sparse-arrays": 2,
        "no-undef": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unused-vars": [
            2,
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "strict": 0,
        "max-params": [2, 5],
        "max-depth": [2, 4],
        "no-eq-null": 0,
        "no-unused-expressions": 0,
        "dot-notation": 0,
        "use-isnan": 2,

        // Best practices
        // "array-callback-return": 2,
        "block-scoped-var": 2,
        "complexity": 2,
        // "curly": [2, "multi-line"], // Включить после полного переезда на eslint
        "eqeqeq": [2, "always", {"null": "ignore"}],
        // "no-else-return": 2, // Можно включить после полного переезда на eslint
        "no-extra-bind": 2,
        "no-implicit-coercion": 2,
        "no-return-assign": 0,
        "no-sequences": 2,
        "yoda": 2,

        // Variables
        "no-restricted-globals": [2, "fdescribe", "fit"],

        // Codestyle
        "arrow-parens": [2, "as-needed"],
        "array-bracket-spacing": [2, "never"],
        "brace-style": [2, "1tbs", {"allowSingleLine": true}],
        "camelcase": [2, {"properties": "never"}],
        "comma-dangle": [2, "never"],
        "comma-spacing": [2, {"before": false, "after": true}],
        "eol-last": 2,
        "func-call-spacing": 2,
        "keyword-spacing": [2, {"before": true, "after": true}],
        "max-len": [2, {
            "code": 120,
            "ignoreUrls": true,
            "ignoreRegExpLiterals": true,
            "ignoreTemplateLiterals": true,
            "ignorePattern": "require"
        }],
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-spaces": 2,
        "no-multiple-empty-lines": [2, {"max": 1, "maxBOF": 0, "maxEOF": 0}],
        "no-trailing-spaces": 2,
        "no-unneeded-ternary": 2,
        "object-curly-spacing": [2, "always"],
        "one-var-declaration-per-line": [2, "initializations"],
        "operator-linebreak": [2, "after"],
        "padded-blocks": [2, "never"],
        "quote-props": [2, "as-needed", {"numbers": true}],
        "quotes": [2, "single", {"avoidEscape": true}],
        "space-before-blocks": [2, "always"],
        "space-in-parens": 2,
        "no-console": [2, {allow: ["assert", "error", "warn"]}],
        "key-spacing": [2, {"beforeColon": false, "afterColon": true, "mode": "strict"}],
        "space-infix-ops": 2
    },

    "overrides": [
        // CLIENT JS
        {
            "files": ["**/*blocks*/**/*.js"],
            "env": {
                "browser": true,
                "jquery": true,
                "es5": false,
                "node": false
            },
            "globals": {
                "BEM": false,
                "BEMHTML": false,
                "Ya": false,
                "Lego": false,
                "w": false,
                "wb": false,
                "wbt": false,
                "logSerpJsError": false,
                "Log": false
            },
            "parserOptions": {
                "ecmaVersion": 5
            }
        },

        // DEPS
        {
            "files": ["*.deps.js"],
            "rules": {
                "semi": 0
            },
            "parserOptions": {
                "ecmaVersion": 5
            }
        },

        // BEMHTML
        {
            "files": ["*.bemhtml.js"],
            "env": {
                "bem-xjst/bemhtml": true
            },
            "globals": {
                "BEM": false
            },
            "rules": {
                "semi": 0
            },
            "parserOptions": {
                "ecmaVersion": 5
            }
        },

        // PRIV
        {
            "files": ["*.priv.js"],
            "env": {
                "commonjs": true
            },
            "globals": {
                "blocks": false,
                "defBlock": false,
                "skipWrap": false,
                "_": false,
                "BEM": false,
                "BEMHTML": false,
                "Punycode": false,
                "Region": false,
                "Text": false,
                "Util": false,
                "experimentarium": false
            },
            "rules": {
                "strict": 2 // see also `ecmaFeatures.impliedStrict`
            },
            "parserOptions": {
                "ecmaVersion": 5,
                "ecmaFeatures": {
                    "impliedStrict": true
                }
            }
        },

        // TEST-PRIV
        {
            "files": ["*.test-priv.js"],
            "env": {
                "node": true,
                "mocha": true
            },
            "globals": {
                "_": false,
                "blocks": false,
                "BEM": false,
                "BEMHTML": false,
                "Punycode": false,
                "Text": false,
                "Util": false,

                // см. полный список хелперов в test.test-priv.js
                "assert": false,
                "chai": false,
                "describeBlock": false,
                "every": false,
                "expect": false, // Ересь, заменить на assert
                "findInContent": false,
                "regionStub": false,
                "sinon": false,
                "stubBlocks": false,
                "stubData": false
            },
            "rules": {
                "strict": 2, // see also `ecmaFeatures.impliedStrict`
                "mocha/no-exclusive-tests": 2,
                "mocha/no-global-tests": 2
            },
            "parserOptions": {
                "ecmaVersion": 6,
                "ecmaFeatures": {
                    "impliedStrict": true
                }
            }
        },

        // CLIENT TEST
        {
            "files": ["*.test.js"],
            "env": {
                "browser": true,
                "jquery": true,
                "mocha": true
            },
            "globals": {
                "BEM": false,
                "BEMHTML": false,
                "w": false,
                "wb": false,
                "wbt": false,

                // см. полный список хелперов в test.test.js
                "assert": false,
                "buildDomBlock": false,
                "chai": false,
                "sinon": false,
                "stubAjaxResponse": false,
                "stubBlockPrototype": false,
                "stubBlockStaticMethods": false,
                "stubModHandlers": false,
                "stubObjectMethods": false
            },
            "rules": {
                "mocha/no-identical-title": 2,
                "mocha/no-exclusive-tests": 2,
                "mocha/no-global-tests": 2
            }
        },

        // GEMINI
        {
            "files": ["*.gemini.js"],
            "env": {
                "browser": true,
                "jquery": true,
                "mocha": true,
                "node": true
            },
            "globals": {
                "gemini": false
            }
        }
    ]
};
