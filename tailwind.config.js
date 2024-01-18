/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT : "#004C94"
                },
                content: {
                    DEFAULT: "#0054A3"
                },
                navbar: {
                    DEFAULT: "#0054A3"
                },
                button: {
                    DEFAULT: "#006FD5",
                    hover: "#FFFFFF",
                    text: {
                        DEFAULT: "#FFFFFF",
                        hover: "#000000"
                    }
                },
                text:{
                    DEFAULT: "#FFFFFF",
                    hover1: "#006FD5",
                    hover2: "#000000"
                }
            },
            fontFamily: {
                Roboto: ['Roboto Condensed', 'sans-serif']
            },
            backgroundImage: {
                'cover': "url('./src/assets/image/cover-1.jpg')",
            }
        },
    },
    plugins: [],
}