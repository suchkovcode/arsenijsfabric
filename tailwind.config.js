/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/components/**/*.{js,vue,ts}", "./src/layouts/**/*.vue", "./src/pages/**/*.vue", "./src/plugins/**/*.{js,ts}", "./src/app.vue"],
   theme: {
      screens: {
         "sm": "576px",
         "md": "768px",
         "lg": "992px",
         "xl": "1280px",
         "2xl": "1366px",
         "3xl": "1566px",
      },
      colors: {
         white: "#fff",
         primary: "#514EB7",
         secondary: "#F98076",
         tertiary: "#211747",
         border: "#EAEAEA",
         violet: "#f6f5ff",
         transparent: "transparent",
      },
      fontFamily: {
         Giga: ["Giga Sans"],
         Beret: ["Beret LT Std"],
      },
      container: {
         center: true,
         padding: {
            DEFAULT: "15px",
            sm: "20px",
            xl: "30px",
         },
         screens: {
            "sm": "576px",
            "md": "768px",
            "lg": "992px",
            "xl": "1280px",
            "2xl": "1366px",
         },
      },
      extend: {
         gridTemplateRows: {
           'mini-2': 'min-content min-content',
         }
       }
   },
   plugins: [],
};
