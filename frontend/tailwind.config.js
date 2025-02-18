/*eslint-env node*/
// const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
module.exports = {
  content: ["./index.html",
    "./src/*/.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/*/.js",
  flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}
// /*eslint-env node*/

// /** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')
// //const flowbite = require("flowbite-react/tailwind");
// import flowbite from "flowbite-react/tailwind";

// module.exports = {

//   content: [
//       './src/**/*.{js,jsx,ts,tsx}',
//       './src/**/**/*.{js,jsx,ts,tsx}',
//       'node_modules/flowbite-react/lib/esm/**/*.js',
//       "./layouts/**/*.html", 
//       "./content/**/*.md", 
//       "./content/**/*.html", 
//       "./src/**/*.js"
//   ],
//   theme: {
//     extend: {
//     colors: {
//       transparent: 'transparent',
//       current: 'currentColor',
//       white: colors.white,
//       gray: colors.slate,
//         red: {
//           200: '#FECACA'
//         },
//         orange: {
//           600: '#EA580C'
//         },
//         teal: {
//           100: '#CCFBF1',
//           600: '#0D9488'
//         },
//         slate: {
//           300: '#CBD5E1'
//         },
//         cyan: {
//           950: '#083344',
//         },
//         stone: {
//           300: '#D6D3D1'
//         },
//         neutral: {
//           100: '#F5F5F5'
//         },
//         black: colors.black
//       }
//     }
//   },
//   plugins: [
//     require('flowbite-typography'),
//     require('flowbite/plugin'),
//     flowbite.plugin()]
// }

