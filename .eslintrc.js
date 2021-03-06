module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "react-app/jest",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
    },
    plugins: [
        "eslint-plugin-import",
        "eslint-plugin-jsdoc",
        "eslint-plugin-react",
        "eslint-plugin-prefer-arrow",
        "@typescript-eslint",
        "@typescript-eslint/tslint",
    ],
    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    Object: {
                        message: "Avoid using the `Object` type. Did you mean `object`?",
                    },
                    Function: {
                        message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
                    },
                    Boolean: {
                        message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
                    },
                    Number: {
                        message: "Avoid using the `Number` type. Did you mean `number`?",
                    },
                    String: {
                        message: "Avoid using the `String` type. Did you mean `string`?",
                    },
                    Symbol: {
                        message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
                    },
                },
            },
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-delimiter-style": [
            "off",
            {
                multiline: {
                    delimiter: "none",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            },
        ],
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                hoist: "all",
            },
        ],
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "error",
            "double",
            {
                avoidEscape: true,
            },
        ],
        "@typescript-eslint/semi": ["off", null],
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                path: "always",
                types: "prefer-import",
                lib: "always",
            },
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "error",
        "array-callback-return": "warn",
        "arrow-parens": ["off", "always"],
        "brace-style": ["off", "off"],
        "comma-dangle": "off",
        "complexity": "off",
        "constructor-super": "error",
        "default-case": [
            "warn",
            {
                commentPattern: "^no default$",
            },
        ],
        "dot-location": ["warn", "property"],
        "eol-last": "off",
        "eqeqeq": ["error", "smart"],
        "getter-return": "warn",
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined",
        ],
        "id-match": "error",
        "import/first": "error",
        "import/no-amd": "error",
        "import/no-anonymous-default-export": "warn",
        "import/no-default-export": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/order": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "linebreak-style": "off",
        "max-classes-per-file": "off",
        "max-len": "off",
        "new-parens": "error",
        "newline-per-chained-call": "off",
        "no-array-constructor": "warn",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": [
            "warn",
            {
                allow: [
                    "warn",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context",
                ],
            },
        ],
        "no-const-assign": "warn",
        "no-control-regex": "warn",
        "no-debugger": "error",
        "no-delete-var": "warn",
        "no-dupe-args": "warn",
        "no-dupe-class-members": "warn",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty": "error",
        "no-empty-character-class": "warn",
        "no-empty-pattern": "warn",
        "no-eval": "error",
        "no-ex-assign": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-func-assign": "warn",
        "no-implied-eval": "warn",
        "no-invalid-regexp": "warn",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "off",
        "no-iterator": "warn",
        "no-label-var": "warn",
        "no-labels": [
            "warn",
            {
                allowLoop: true,
                allowSwitch: false,
            },
        ],
        "no-lone-blocks": "warn",
        "no-loop-func": "warn",
        "no-mixed-operators": [
            "warn",
            {
                groups: [
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"],
                ],
                allowSamePrecedence: false,
            },
        ],
        "no-multi-str": "warn",
        "no-multiple-empty-lines": "off",
        "no-native-reassign": "warn",
        "no-negated-in-lhs": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-symbol": "warn",
        "no-new-wrappers": "error",
        "no-obj-calls": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        "no-redeclare": "warn",
        "no-regex-spaces": "warn",
        "no-restricted-globals": [
            "error",
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
            "external",
            "find",
            "focus",
            "frameElement",
            "frames",
            "history",
            "innerHeight",
            "innerWidth",
            "length",
            "location",
            "locationbar",
            "menubar",
            "moveBy",
            "moveTo",
            "name",
            "onblur",
            "onerror",
            "onfocus",
            "onload",
            "onresize",
            "onunload",
            "open",
            "opener",
            "opera",
            "outerHeight",
            "outerWidth",
            "pageXOffset",
            "pageYOffset",
            "parent",
            "print",
            "removeEventListener",
            "resizeBy",
            "resizeTo",
            "screen",
            "screenLeft",
            "screenTop",
            "screenX",
            "screenY",
            "scroll",
            "scrollbars",
            "scrollBy",
            "scrollTo",
            "scrollX",
            "scrollY",
            "self",
            "status",
            "statusbar",
            "stop",
            "toolbar",
            "top",
        ],
        "no-restricted-properties": [
            "error",
            {
                object: "require",
                property: "ensure",
                message:
                    "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
            },
            {
                object: "System",
                property: "import",
                message:
                    "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
            },
        ],
        "no-restricted-syntax": ["warn", "WithStatement"],
        "no-script-url": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow-restricted-names": "warn",
        "no-sparse-arrays": "warn",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "warn",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unreachable": "warn",
        "no-unsafe-finally": "error",
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
                enforceForJSX: false,
            },
        ],
        "no-unused-labels": "error",
        "no-unused-vars": [
            "warn",
            {
                args: "none",
                ignoreRestSiblings: true,
            },
        ],
        "no-use-before-define": [
            "warn",
            {
                functions: false,
                classes: false,
                variables: false,
            },
        ],
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-escape": "warn",
        "no-useless-rename": [
            "warn",
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],
        "no-var": "error",
        "no-whitespace-before-property": "warn",
        "no-with": "warn",
        "object-shorthand": ["error", "never"],
        "one-var": ["error", "never"],
        "prefer-arrow/prefer-arrow-functions": "error",
        "prefer-const": "error",
        "quote-props": "off",
        "radix": "error",
        "react/forbid-foreign-prop-types": [
            "warn",
            {
                allowInPropTypes: true,
            },
        ],
        "react/jsx-boolean-value": "error",
        "react/jsx-curly-spacing": "off",
        "react/jsx-equals-spacing": "off",
        "react/jsx-key": "error",
        "react/jsx-no-bind": "off",
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-duplicate-props": "warn",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": [
            "warn",
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],
        "react/jsx-tag-spacing": [
            "off",
            {
                afterOpening: "allow",
                closingSlash: "allow",
            },
        ],
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "react/jsx-wrap-multilines": "off",
        "react/no-danger-with-children": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-is-mounted": "warn",
        "react/no-typos": "error",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/style-prop-object": "warn",
        "require-yield": "warn",
        "rest-spread-spacing": ["warn", "never"],
        "space-before-function-paren": "off",
        "space-in-parens": ["off", "never"],
        "spaced-comment": [
            "error",
            "always",
            {
                markers: ["/"],
            },
        ],
        "strict": ["warn", "never"],
        "unicode-bom": ["warn", "never"],
        "use-isnan": "error",
        "valid-typeof": "off",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/restrict-template-expressions": "warn",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                rules: {
                    "jsx-no-string-ref": true,
                    "typedef": [true, "call-signature", "parameter", "property-declaration"],
                    "valid-jsdoc": [
                        true,
                        {
                            requireParamType: false,
                            requireParamDescription: true,
                            requireReturn: false,
                            requireReturnType: false,
                            requireReturnDescription: true,
                        },
                    ],
                },
            },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
