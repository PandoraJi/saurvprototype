module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '18px'],
      sm2: ['14px', '20px'],
      base: ['15px', '24px'],
      plus: ['16px', '24px'],
      plus2: ['18px', '28px'],
      md: ['20px', '28px'],
      lg: ['30px', 1.2],
      lgsmall: ['22px', 1.2],
      lg2: ['38px', 1.2],
      xl: ['50px', 1.24],
      xlsmall: ['27px', '35px'],
    },
    colors: {
      blue: {
        DEFAULT: '#2a99f7',
        light: '#2a99f7',
        dark: '#2a99f7'
      },
      red: {
        DEFAULT: '#ec1c24',
        light: '#ec1c24',
        dark: '#ec1c24'
      },
      yellow: {
        DEFAULT: '#ffaf00'
      },
      gray: {
        DEFAULT: '#1e2025',
        light: '#bcbcbc',
        lighter: '#a7a7a7',
        dark:'#23252a',
        darker: '#18191d'
      },
      white: '#fff',
      black: '#000'
    },
    borderRadius: {
      DEFAULT:  '12px',
      sm: '4px',
      lg: '20px',
      full: '999999px'
    },

    container: {
      
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1320px"
      },
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '2rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '0',
      }
    },

    
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}