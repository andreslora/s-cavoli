module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        xl: "1200px",
        xxl: "1281px",
        xxxl: "1600px",
        '3xl': "1920px"
      },
      spacing: {
        fit: "fit-content",
      },
    },
    colors: {
      primary: {
        100: "#F4D449",
        80: "#FFD300",
        60: "#F3E084",
        20: "#F9F6EB",
        10: "#FFFBE6",
        5: "#FEFBF4",
      },
      secondary: {
        100: "#4B2F01",
        90: "#767676",
        80: "#6F4400",
        70: "#925248",
        40: "#DBBBB6",
        20: "#EDDDDB",
        10: "#F6EEED",
        5: "#F7F7F7",
      },
      neutral: {
        100: "#D9D9D9",
        90: "#858585",
        80: "#8E8E8E",
      },
      semantic: {
        black: '#2C2C2C',
        black2: '#000000',
        white: '#ffffff',
        success: '#53A019',
        warning: '#EAA000',
        error: '#FF3D3D',
        info: '#0D8FBE',
        transparent: "transparent",
      },
    },
    fontSize: {
      "heading-1-lg": ["44px", "50px"],
      "heading-1-md": ["36px", "44px"],
      "heading-1-sm": ["32px", "40px"],
      "heading-2-lg": ["32px", "56px"],
      "heading-2-md": ["28px", "40px"],
      "heading-2-sm": ["26px", "32px"],
      "heading-3-lg": ["28px", "40px"],
      "heading-3-md": ["26px", "40px"],
      "heading-3-sm": ["24px", "32px"],
      "heading-4-lg": ["24px", "32px"],
      "heading-4-md": ["22px", "32px"],
      "heading-5-lg": ["20px", "32px"],
      "lead-lg": ["20px", "24px"],
      "lead-md": ["18px", "60px"],
      "body-1": ["16px", "24px"],
      "body-2": ["14px", "16px"],
      nav: ["16px", "24px"],
      caption: ["12px", "16px"],
    },
    fontFamily: {
      display: ["cooperHewitt", "sans-serif"],
      body: ["fontspringHernandezbros", "serif"],
      body2: ["circularStd", "serif"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 15px',
          '@screen sm': {
            maxWidth: '540px'
          },
          '@screen md': {
            maxWidth: '720px'
          },
          '@screen lg': {
            maxWidth: '960px'
          },
          '@screen xl': {
            maxWidth: '1120px'
          },
        }
      })
    }
  ],
}
