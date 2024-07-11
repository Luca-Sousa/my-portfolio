/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#55e6a5',
        colorBg: '#09101a',
        colorBodyBg: '#02050a',
        colorBody: '#a2a2a2',
      },
      fontFamily: {
        PrimaryFont: "Poppins",
        secondaryFont: "Open Sans",
      },
      boxShadow: {
        boxShadowNav: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        boxShadowProjectCard: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
        swTags: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        shape:"0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
      },
      backgroundImage: {
        bgBanner: 'url("/src/assets/images/banner.jpg")',
      },
      backgroundSize: {
         '100-100': '100% 100%',
      }
    },
  },
  plugins: [],
}

