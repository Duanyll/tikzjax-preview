
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire61ac"];
var parcelRegister = parcelRequire.register;
parcelRegister("7dFT3", function(module, exports) {

$parcel$export(module.exports, "conf", () => $541a3d30963b40ac$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $541a3d30963b40ac$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/sophia/sophia.ts
var $541a3d30963b40ac$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "//",
        blockComment: [
            "/*",
            "*/"
        ]
    },
    brackets: [
        [
            "{",
            "}"
        ],
        [
            "[",
            "]"
        ],
        [
            "(",
            ")"
        ],
        [
            "<",
            ">"
        ]
    ],
    autoClosingPairs: [
        {
            open: '"',
            close: '"',
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "{",
            close: "}",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "[",
            close: "]",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "(",
            close: ")",
            notIn: [
                "string",
                "comment"
            ]
        }
    ]
};
var $541a3d30963b40ac$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".aes",
    brackets: [
        {
            token: "delimiter.curly",
            open: "{",
            close: "}"
        },
        {
            token: "delimiter.parenthesis",
            open: "(",
            close: ")"
        },
        {
            token: "delimiter.square",
            open: "[",
            close: "]"
        },
        {
            token: "delimiter.angle",
            open: "<",
            close: ">"
        }
    ],
    keywords: [
        // Main keywords
        "contract",
        "library",
        "entrypoint",
        "function",
        "stateful",
        "state",
        "hash",
        "signature",
        "tuple",
        "list",
        "address",
        "string",
        "bool",
        "int",
        "record",
        "datatype",
        "type",
        "option",
        "oracle",
        "oracle_query",
        "Call",
        "Bits",
        "Bytes",
        "Oracle",
        "String",
        "Crypto",
        "Address",
        "Auth",
        "Chain",
        "None",
        "Some",
        "bits",
        "bytes",
        "event",
        "let",
        "map",
        "private",
        "public",
        "true",
        "false",
        "var",
        "if",
        "else",
        "throw"
    ],
    operators: [
        "=",
        ">",
        "<",
        "!",
        "~",
        "?",
        "::",
        ":",
        "==",
        "<=",
        ">=",
        "!=",
        "&&",
        "||",
        "++",
        "--",
        "+",
        "-",
        "*",
        "/",
        "&",
        "|",
        "^",
        "%",
        "<<",
        ">>",
        ">>>",
        "+=",
        "-=",
        "*=",
        "/=",
        "&=",
        "|=",
        "^=",
        "%=",
        "<<=",
        ">>=",
        ">>>="
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
    floatsuffix: /[fFlL]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword.$0"
                        },
                        "@default": "identifier"
                    }
                }
            ],
            // whitespace
            {
                include: "@whitespace"
            },
            // [[ attributes ]].
            [
                /\[\[.*\]\]/,
                "annotation"
            ],
            // Preprocessor directive
            [
                /^\s*#\w+/,
                "keyword"
            ],
            //DataTypes
            [
                /int\d*/,
                "keyword"
            ],
            // delimiters and operators
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /[<>](?!@symbols)/,
                "@brackets"
            ],
            [
                /@symbols/,
                {
                    cases: {
                        "@operators": "delimiter",
                        "@default": ""
                    }
                }
            ],
            // numbers
            [
                /\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,
                "number.float"
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,
                "number.float"
            ],
            [
                /0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,
                "number.hex"
            ],
            [
                /0[0-7']*[0-7](@integersuffix)/,
                "number.octal"
            ],
            [
                /0[bB][0-1']*[0-1](@integersuffix)/,
                "number.binary"
            ],
            [
                /\d[\d']*\d(@integersuffix)/,
                "number"
            ],
            [
                /\d(@integersuffix)/,
                "number"
            ],
            // delimiter: after number because of .\d floats
            [
                /[;,.]/,
                "delimiter"
            ],
            // strings
            [
                /"([^"\\]|\\.)*$/,
                "string.invalid"
            ],
            // non-teminated string
            [
                /"/,
                "string",
                "@string"
            ],
            // characters
            [
                /'[^\\']'/,
                "string"
            ],
            [
                /(')(@escapes)(')/,
                [
                    "string",
                    "string.escape",
                    "string"
                ]
            ],
            [
                /'/,
                "string.invalid"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /\/\*\*(?!\/)/,
                "comment.doc",
                "@doccomment"
            ],
            [
                /\/\*/,
                "comment",
                "@comment"
            ],
            [
                /\/\/.*$/,
                "comment"
            ]
        ],
        comment: [
            [
                /[^\/*]+/,
                "comment"
            ],
            [
                /\*\//,
                "comment",
                "@pop"
            ],
            [
                /[\/*]/,
                "comment"
            ]
        ],
        //Identical copy of comment above, except for the addition of .doc
        doccomment: [
            [
                /[^\/*]+/,
                "comment.doc"
            ],
            [
                /\*\//,
                "comment.doc",
                "@pop"
            ],
            [
                /[\/*]/,
                "comment.doc"
            ]
        ],
        string: [
            [
                /[^\\"]+/,
                "string"
            ],
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /\\./,
                "string.escape.invalid"
            ],
            [
                /"/,
                "string",
                "@pop"
            ]
        ]
    }
};

});


//# sourceMappingURL=sophia.e0cca1f1.js.map
