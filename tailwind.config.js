/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    darkMode: "class",
    theme: {
    extend: {
        spacing: {
            "big": "48rem"
        }
    },
    screens: {
        ss: "300px",
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
    },
    fontFamily: {
        nunito: ['Nunito', 'sans-serif']
    }
},
  plugins: [],
}

