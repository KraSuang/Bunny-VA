/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
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