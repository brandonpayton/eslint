/**
 * @fileoverview Disallow shadowing of NaN, undefined, and Infinity (ES5 section 15.1.1)
 * @author Michael Ficarra
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("../../../lib/tests/eslintTester");

eslintTester.addRuleTest("no-shadow-restricted-names", {
    valid: [
        "function foo(bar){ var baz; }",
        "!function foo(bar){ var baz; }",
        "!function(bar){ var baz; }",
        "try {} catch(e) {}"
    ],
    invalid: [
        { code: "function NaN(NaN) { var NaN; !function NaN(NaN) { try {} catch(NaN) {} }; }",
          errors: [
            { message: "Shadowing of global property \"NaN\".", type: "Identifier"},
            { message: "Shadowing of global property \"NaN\".", type: "Identifier"},
            { message: "Shadowing of global property \"NaN\".", type: "Identifier"},
            { message: "Shadowing of global property \"NaN\".", type: "Identifier"},
            { message: "Shadowing of global property \"NaN\".", type: "Identifier"},
            { message: "Shadowing of global property \"NaN\".", type: "Identifier"}
          ]
        },
        { code: "function undefined(undefined) { var undefined; !function undefined(undefined) { try {} catch(undefined) {} }; }",
          errors: [
            { message: "Shadowing of global property \"undefined\".", type: "Identifier"},
            { message: "Shadowing of global property \"undefined\".", type: "Identifier"},
            { message: "Shadowing of global property \"undefined\".", type: "Identifier"},
            { message: "Shadowing of global property \"undefined\".", type: "Identifier"},
            { message: "Shadowing of global property \"undefined\".", type: "Identifier"},
            { message: "Shadowing of global property \"undefined\".", type: "Identifier"}
          ]
        },
        { code: "function Infinity(Infinity) { var Infinity; !function Infinity(Infinity) { try {} catch(Infinity) {} }; }",
          errors: [
            { message: "Shadowing of global property \"Infinity\".", type: "Identifier"},
            { message: "Shadowing of global property \"Infinity\".", type: "Identifier"},
            { message: "Shadowing of global property \"Infinity\".", type: "Identifier"},
            { message: "Shadowing of global property \"Infinity\".", type: "Identifier"},
            { message: "Shadowing of global property \"Infinity\".", type: "Identifier"},
            { message: "Shadowing of global property \"Infinity\".", type: "Identifier"}
          ]
        },
        { code: "function arguments(arguments) { var arguments; !function arguments(arguments) { try {} catch(arguments) {} }; }",
          errors: [
            { message: "Shadowing of global property \"arguments\".", type: "Identifier"},
            { message: "Shadowing of global property \"arguments\".", type: "Identifier"},
            { message: "Shadowing of global property \"arguments\".", type: "Identifier"},
            { message: "Shadowing of global property \"arguments\".", type: "Identifier"},
            { message: "Shadowing of global property \"arguments\".", type: "Identifier"},
            { message: "Shadowing of global property \"arguments\".", type: "Identifier"}
          ]
        },
        { code: "function eval(eval) { var eval; !function eval(eval) { try {} catch(eval) {} }; }",
          errors: [
            { message: "Shadowing of global property \"eval\".", type: "Identifier"},
            { message: "Shadowing of global property \"eval\".", type: "Identifier"},
            { message: "Shadowing of global property \"eval\".", type: "Identifier"},
            { message: "Shadowing of global property \"eval\".", type: "Identifier"},
            { message: "Shadowing of global property \"eval\".", type: "Identifier"},
            { message: "Shadowing of global property \"eval\".", type: "Identifier"}
          ]
        }
    ]
});
