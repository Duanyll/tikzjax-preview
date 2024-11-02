
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire61ac"];
var parcelRegister = parcelRequire.register;
parcelRegister("18RR9", function(module, exports) {

$parcel$export(module.exports, "conf", () => $0d5050874d49e2c6$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $0d5050874d49e2c6$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ 
var $leKFq = parcelRequire("leKFq");
var $0d5050874d49e2c6$var$__defProp = Object.defineProperty;
var $0d5050874d49e2c6$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $0d5050874d49e2c6$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $0d5050874d49e2c6$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $0d5050874d49e2c6$var$__copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of $0d5050874d49e2c6$var$__getOwnPropNames(from))if (!$0d5050874d49e2c6$var$__hasOwnProp.call(to, key) && key !== except) $0d5050874d49e2c6$var$__defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = $0d5050874d49e2c6$var$__getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var $0d5050874d49e2c6$var$__reExport = (target, mod, secondTarget)=>($0d5050874d49e2c6$var$__copyProps(target, mod, "default"), secondTarget && $0d5050874d49e2c6$var$__copyProps(secondTarget, mod, "default"));
// src/fillers/monaco-editor-core.ts
var $0d5050874d49e2c6$var$monaco_editor_core_exports = {};
$0d5050874d49e2c6$var$__reExport($0d5050874d49e2c6$var$monaco_editor_core_exports, $leKFq);
// src/basic-languages/yaml/yaml.ts
var $0d5050874d49e2c6$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "#"
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
        ]
    ],
    autoClosingPairs: [
        {
            open: "{",
            close: "}"
        },
        {
            open: "[",
            close: "]"
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        }
    ],
    surroundingPairs: [
        {
            open: "{",
            close: "}"
        },
        {
            open: "[",
            close: "]"
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        }
    ],
    folding: {
        offSide: true
    },
    onEnterRules: [
        {
            beforeText: /:\s*$/,
            action: {
                indentAction: $0d5050874d49e2c6$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var $0d5050874d49e2c6$export$789c912f57fe164c = {
    tokenPostfix: ".yaml",
    brackets: [
        {
            token: "delimiter.bracket",
            open: "{",
            close: "}"
        },
        {
            token: "delimiter.square",
            open: "[",
            close: "]"
        }
    ],
    keywords: [
        "true",
        "True",
        "TRUE",
        "false",
        "False",
        "FALSE",
        "null",
        "Null",
        "Null",
        "~"
    ],
    numberInteger: /(?:0|[+-]?[0-9]+)/,
    numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
    numberOctal: /0o[0-7]+/,
    numberHex: /0x[0-9a-fA-F]+/,
    numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
    numberNaN: /\.(?:nan|Nan|NAN)/,
    numberDate: /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,
    escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            {
                include: "@comment"
            },
            // Directive
            [
                /%[^ ]+.*$/,
                "meta.directive"
            ],
            // Document Markers
            [
                /---/,
                "operators.directivesEnd"
            ],
            [
                /\.{3}/,
                "operators.documentEnd"
            ],
            // Block Structure Indicators
            [
                /[-?:](?= )/,
                "operators"
            ],
            {
                include: "@anchor"
            },
            {
                include: "@tagHandle"
            },
            {
                include: "@flowCollections"
            },
            {
                include: "@blockStyle"
            },
            // Numbers
            [
                /@numberInteger(?![ \t]*\S+)/,
                "number"
            ],
            [
                /@numberFloat(?![ \t]*\S+)/,
                "number.float"
            ],
            [
                /@numberOctal(?![ \t]*\S+)/,
                "number.octal"
            ],
            [
                /@numberHex(?![ \t]*\S+)/,
                "number.hex"
            ],
            [
                /@numberInfinity(?![ \t]*\S+)/,
                "number.infinity"
            ],
            [
                /@numberNaN(?![ \t]*\S+)/,
                "number.nan"
            ],
            [
                /@numberDate(?![ \t]*\S+)/,
                "number.date"
            ],
            // Key:Value pair
            [
                /(".*?"|'.*?'|[^#'"]*?)([ \t]*)(:)( |$)/,
                [
                    "type",
                    "white",
                    "operators",
                    "white"
                ]
            ],
            {
                include: "@flowScalars"
            },
            // String nodes
            [
                /.+?(?=(\s+#|$))/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "string"
                    }
                }
            ]
        ],
        // Flow Collection: Flow Mapping
        object: [
            {
                include: "@whitespace"
            },
            {
                include: "@comment"
            },
            // Flow Mapping termination
            [
                /\}/,
                "@brackets",
                "@pop"
            ],
            // Flow Mapping delimiter
            [
                /,/,
                "delimiter.comma"
            ],
            // Flow Mapping Key:Value delimiter
            [
                /:(?= )/,
                "operators"
            ],
            // Flow Mapping Key:Value key
            [
                /(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/,
                "type"
            ],
            // Start Flow Style
            {
                include: "@flowCollections"
            },
            {
                include: "@flowScalars"
            },
            // Scalar Data types
            {
                include: "@tagHandle"
            },
            {
                include: "@anchor"
            },
            {
                include: "@flowNumber"
            },
            // Other value (keyword or string)
            [
                /[^\},]+/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "string"
                    }
                }
            ]
        ],
        // Flow Collection: Flow Sequence
        array: [
            {
                include: "@whitespace"
            },
            {
                include: "@comment"
            },
            // Flow Sequence termination
            [
                /\]/,
                "@brackets",
                "@pop"
            ],
            // Flow Sequence delimiter
            [
                /,/,
                "delimiter.comma"
            ],
            // Start Flow Style
            {
                include: "@flowCollections"
            },
            {
                include: "@flowScalars"
            },
            // Scalar Data types
            {
                include: "@tagHandle"
            },
            {
                include: "@anchor"
            },
            {
                include: "@flowNumber"
            },
            // Other value (keyword or string)
            [
                /[^\],]+/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "string"
                    }
                }
            ]
        ],
        // First line of a Block Style
        multiString: [
            [
                /^( +).+$/,
                "string",
                "@multiStringContinued.$1"
            ]
        ],
        // Further lines of a Block Style
        //   Workaround for indentation detection
        multiStringContinued: [
            [
                /^( *).+$/,
                {
                    cases: {
                        "$1==$S2": "string",
                        "@default": {
                            token: "@rematch",
                            next: "@popall"
                        }
                    }
                }
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ]
        ],
        // Only line comments
        comment: [
            [
                /#.*$/,
                "comment"
            ]
        ],
        // Start Flow Collections
        flowCollections: [
            [
                /\[/,
                "@brackets",
                "@array"
            ],
            [
                /\{/,
                "@brackets",
                "@object"
            ]
        ],
        // Start Flow Scalars (quoted strings)
        flowScalars: [
            [
                /"([^"\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /'([^'\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /'[^']*'/,
                "string"
            ],
            [
                /"/,
                "string",
                "@doubleQuotedString"
            ]
        ],
        doubleQuotedString: [
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
        ],
        // Start Block Scalar
        blockStyle: [
            [
                /[>|][0-9]*[+-]?$/,
                "operators",
                "@multiString"
            ]
        ],
        // Numbers in Flow Collections (terminate with ,]})
        flowNumber: [
            [
                /@numberInteger(?=[ \t]*[,\]\}])/,
                "number"
            ],
            [
                /@numberFloat(?=[ \t]*[,\]\}])/,
                "number.float"
            ],
            [
                /@numberOctal(?=[ \t]*[,\]\}])/,
                "number.octal"
            ],
            [
                /@numberHex(?=[ \t]*[,\]\}])/,
                "number.hex"
            ],
            [
                /@numberInfinity(?=[ \t]*[,\]\}])/,
                "number.infinity"
            ],
            [
                /@numberNaN(?=[ \t]*[,\]\}])/,
                "number.nan"
            ],
            [
                /@numberDate(?=[ \t]*[,\]\}])/,
                "number.date"
            ]
        ],
        tagHandle: [
            [
                /\![^ ]*/,
                "tag"
            ]
        ],
        anchor: [
            [
                /[&*][^ ]+/,
                "namespace"
            ]
        ]
    }
};

});


//# sourceMappingURL=yaml.e0c4dd7e.js.map
