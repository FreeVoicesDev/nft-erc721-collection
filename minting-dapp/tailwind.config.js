const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: colors.yellow[600],
        links: {
          txt: colors.yellow[600],
          hover_txt: colors.yellow[700],
        },
        loading_spinner: colors.yellow[500],
        popups: {
          bg: colors.white,
          txt: colors.slate[800],
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.slate[800],
          bg: colors.white,
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.white,
          bg: colors.yellow[500],
          border: colors.yellow[500],
          hover_txt: colors.white,
          hover_bg: colors.yellow[600],
          hover_border: colors.yellow[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.yellow[600],
        txt_input: {
          txt: colors.yellow[600],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.yellow[600],
          focus_bg: colors.slate[50],
          focus_border: colors.yellow[300],
          placeholder_txt: colors.yellow[600],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.yellow[100],
        },

        // Mint widget
        token_preview: colors.yellow[200],
      },
    },
  },
  variants: {},
  plugins: [],
};
