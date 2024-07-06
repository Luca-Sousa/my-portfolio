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
        colorWhite: '#ffffff',
        colorBlack: '#02050a',
        colorRating: '#ffba08',
        colorBody: '#a2a2a2',
        color: 'rgba(1,2,5,0.7)'
      },
      fontFamily: {
        PrimaryFont: "Poppins",
        secondaryFont: "Open Sans"
      },
      boxShadow: {
        boxShadowNav: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        boxShadowProjectCard: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
      },
      backgroundImage: {
        bgBanner: 'url("/src/assets/images/banner.jpg")',
      },
      backgroundSize: {
         '100-100': '100% 100%'
      }
    },
  },
  plugins: [],
}

