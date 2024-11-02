
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire61ac"];
var parcelRegister = parcelRequire.register;
parcelRegister("jojKd", function(module, exports) {

$parcel$export(module.exports, "conf", () => $e1df930825aa49e6$export$c83be1687c028fc9);
$parcel$export(module.exports, "language", () => $e1df930825aa49e6$export$789c912f57fe164c);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/redis/redis.ts
var $e1df930825aa49e6$export$c83be1687c028fc9 = {
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
    ]
};
var $e1df930825aa49e6$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".redis",
    ignoreCase: true,
    brackets: [
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        }
    ],
    keywords: [
        "APPEND",
        "AUTH",
        "BGREWRITEAOF",
        "BGSAVE",
        "BITCOUNT",
        "BITFIELD",
        "BITOP",
        "BITPOS",
        "BLPOP",
        "BRPOP",
        "BRPOPLPUSH",
        "CLIENT",
        "KILL",
        "LIST",
        "GETNAME",
        "PAUSE",
        "REPLY",
        "SETNAME",
        "CLUSTER",
        "ADDSLOTS",
        "COUNT-FAILURE-REPORTS",
        "COUNTKEYSINSLOT",
        "DELSLOTS",
        "FAILOVER",
        "FORGET",
        "GETKEYSINSLOT",
        "INFO",
        "KEYSLOT",
        "MEET",
        "NODES",
        "REPLICATE",
        "RESET",
        "SAVECONFIG",
        "SET-CONFIG-EPOCH",
        "SETSLOT",
        "SLAVES",
        "SLOTS",
        "COMMAND",
        "COUNT",
        "GETKEYS",
        "CONFIG",
        "GET",
        "REWRITE",
        "SET",
        "RESETSTAT",
        "DBSIZE",
        "DEBUG",
        "OBJECT",
        "SEGFAULT",
        "DECR",
        "DECRBY",
        "DEL",
        "DISCARD",
        "DUMP",
        "ECHO",
        "EVAL",
        "EVALSHA",
        "EXEC",
        "EXISTS",
        "EXPIRE",
        "EXPIREAT",
        "FLUSHALL",
        "FLUSHDB",
        "GEOADD",
        "GEOHASH",
        "GEOPOS",
        "GEODIST",
        "GEORADIUS",
        "GEORADIUSBYMEMBER",
        "GETBIT",
        "GETRANGE",
        "GETSET",
        "HDEL",
        "HEXISTS",
        "HGET",
        "HGETALL",
        "HINCRBY",
        "HINCRBYFLOAT",
        "HKEYS",
        "HLEN",
        "HMGET",
        "HMSET",
        "HSET",
        "HSETNX",
        "HSTRLEN",
        "HVALS",
        "INCR",
        "INCRBY",
        "INCRBYFLOAT",
        "KEYS",
        "LASTSAVE",
        "LINDEX",
        "LINSERT",
        "LLEN",
        "LPOP",
        "LPUSH",
        "LPUSHX",
        "LRANGE",
        "LREM",
        "LSET",
        "LTRIM",
        "MGET",
        "MIGRATE",
        "MONITOR",
        "MOVE",
        "MSET",
        "MSETNX",
        "MULTI",
        "PERSIST",
        "PEXPIRE",
        "PEXPIREAT",
        "PFADD",
        "PFCOUNT",
        "PFMERGE",
        "PING",
        "PSETEX",
        "PSUBSCRIBE",
        "PUBSUB",
        "PTTL",
        "PUBLISH",
        "PUNSUBSCRIBE",
        "QUIT",
        "RANDOMKEY",
        "READONLY",
        "READWRITE",
        "RENAME",
        "RENAMENX",
        "RESTORE",
        "ROLE",
        "RPOP",
        "RPOPLPUSH",
        "RPUSH",
        "RPUSHX",
        "SADD",
        "SAVE",
        "SCARD",
        "SCRIPT",
        "FLUSH",
        "LOAD",
        "SDIFF",
        "SDIFFSTORE",
        "SELECT",
        "SETBIT",
        "SETEX",
        "SETNX",
        "SETRANGE",
        "SHUTDOWN",
        "SINTER",
        "SINTERSTORE",
        "SISMEMBER",
        "SLAVEOF",
        "SLOWLOG",
        "SMEMBERS",
        "SMOVE",
        "SORT",
        "SPOP",
        "SRANDMEMBER",
        "SREM",
        "STRLEN",
        "SUBSCRIBE",
        "SUNION",
        "SUNIONSTORE",
        "SWAPDB",
        "SYNC",
        "TIME",
        "TOUCH",
        "TTL",
        "TYPE",
        "UNSUBSCRIBE",
        "UNLINK",
        "UNWATCH",
        "WAIT",
        "WATCH",
        "ZADD",
        "ZCARD",
        "ZCOUNT",
        "ZINCRBY",
        "ZINTERSTORE",
        "ZLEXCOUNT",
        "ZRANGE",
        "ZRANGEBYLEX",
        "ZREVRANGEBYLEX",
        "ZRANGEBYSCORE",
        "ZRANK",
        "ZREM",
        "ZREMRANGEBYLEX",
        "ZREMRANGEBYRANK",
        "ZREMRANGEBYSCORE",
        "ZREVRANGE",
        "ZREVRANGEBYSCORE",
        "ZREVRANK",
        "ZSCORE",
        "ZUNIONSTORE",
        "SCAN",
        "SSCAN",
        "HSCAN",
        "ZSCAN"
    ],
    operators: [],
    builtinFunctions: [],
    builtinVariables: [],
    pseudoColumns: [],
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            {
                include: "@pseudoColumns"
            },
            {
                include: "@numbers"
            },
            {
                include: "@strings"
            },
            {
                include: "@scopes"
            },
            [
                /[;,.]/,
                "delimiter"
            ],
            [
                /[()]/,
                "@brackets"
            ],
            [
                /[\w@#$]+/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@operators": "operator",
                        "@builtinVariables": "predefined",
                        "@builtinFunctions": "predefined",
                        "@default": "identifier"
                    }
                }
            ],
            [
                /[<>=!%&+\-*/|~^]/,
                "operator"
            ]
        ],
        whitespace: [
            [
                /\s+/,
                "white"
            ]
        ],
        pseudoColumns: [
            [
                /[$][A-Za-z_][\w@#$]*/,
                {
                    cases: {
                        "@pseudoColumns": "predefined",
                        "@default": "identifier"
                    }
                }
            ]
        ],
        numbers: [
            [
                /0[xX][0-9a-fA-F]*/,
                "number"
            ],
            [
                /[$][+-]*\d*(\.\d*)?/,
                "number"
            ],
            [
                /((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/,
                "number"
            ]
        ],
        strings: [
            [
                /'/,
                {
                    token: "string",
                    next: "@string"
                }
            ],
            [
                /"/,
                {
                    token: "string.double",
                    next: "@stringDouble"
                }
            ]
        ],
        string: [
            [
                /[^']+/,
                "string"
            ],
            [
                /''/,
                "string"
            ],
            [
                /'/,
                {
                    token: "string",
                    next: "@pop"
                }
            ]
        ],
        stringDouble: [
            [
                /[^"]+/,
                "string.double"
            ],
            [
                /""/,
                "string.double"
            ],
            [
                /"/,
                {
                    token: "string.double",
                    next: "@pop"
                }
            ]
        ],
        scopes: []
    }
};

});


//# sourceMappingURL=redis.2ca27c3e.js.map
