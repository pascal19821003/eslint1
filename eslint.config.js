// import config from "eslint-config-standard";


// export default [
//   ...[].concat(config),
// ];


// export default [
//   {
//       rules: {
//           "no-unused-vars": "error",
//           "no-undef": "error"
//       }
//   }
// ];


// import js from "@eslint/js";

// export default [
//     js.configs.recommended,

//     {
//         rules: {
//             "no-unused-vars": "warn",
//             "no-undef": "warn"
//         }
//     }
// ];


const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,

    {
        rules: {
            "no-unused-vars": "off",
            "no-undef": "off",
            "no-debugger": "off",
        }
    }
];