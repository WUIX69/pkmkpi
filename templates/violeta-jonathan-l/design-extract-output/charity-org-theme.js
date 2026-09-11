// React Theme — extracted from https://charity.org/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '32': string;
    '38': string;
    '42': string;
    '48': string;
    '50': string;
    '64': string;
    '72': string;
    '80': string;
    '86': string;
    '90': string;
    '130': string;
    '140': string;
 *   };
 *   space: {
    '1': string;
    '30': string;
    '34': string;
    '38': string;
    '46': string;
    '60': string;
    '64': string;
    '68': string;
    '75': string;
    '78': string;
    '84': string;
    '90': string;
    '134': string;
    '160': string;
    '264': string;
 *   };
 *   radii: {
    sm: string;
    md: string;
    full: string;
 *   };
 *   shadows: {
    xs: string;
    md: string;
    lg: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#80bc2f",
    "secondary": "#06333c",
    "accent": "#eba92f",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#333333",
    "neutral100": "#ffffff",
    "neutral200": "#000000",
    "neutral300": "#202020",
    "neutral400": "#f1f1f1"
  },
  "fonts": {
    "body": "'eicons', sans-serif"
  },
  "fontSizes": {
    "32": "32px",
    "38": "38px",
    "42": "42px",
    "48": "48px",
    "50": "50px",
    "64": "64px",
    "72": "72px",
    "80": "80px",
    "86": "86px",
    "90": "90px",
    "130": "130px",
    "140": "140px"
  },
  "space": {
    "1": "1px",
    "30": "30px",
    "34": "34px",
    "38": "38px",
    "46": "46px",
    "60": "60px",
    "64": "64px",
    "68": "68px",
    "75": "75px",
    "78": "78px",
    "84": "84px",
    "90": "90px",
    "134": "134px",
    "160": "160px",
    "264": "264px"
  },
  "radii": {
    "sm": "3px",
    "md": "10px",
    "full": "50px"
  },
  "shadows": {
    "xs": "rgba(0, 0, 0, 0) 1px 1px 0px 0px",
    "md": "rgba(0, 0, 0, 0.24) 0px 0px 10px 0px",
    "lg": "rgba(35, 35, 35, 0.1) 0px 0px 30px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#80bc2f",
      "light": "hsl(86, 60%, 61%)",
      "dark": "hsl(86, 60%, 31%)"
    },
    "secondary": {
      "main": "#06333c",
      "light": "hsl(190, 82%, 28%)",
      "dark": "hsl(190, 82%, 10%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#80bc00"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#333333"
    }
  },
  "typography": {
    "fontFamily": "'Times New Roman', sans-serif",
    "h1": {
      "fontSize": "72px",
      "fontWeight": "700",
      "lineHeight": "68px"
    }
  },
  "shape": {
    "borderRadius": 7
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 1px 1px 0px 0px",
    "rgba(0, 0, 0, 0.24) 0px 0px 10px 0px",
    "rgb(0, 0, 0) 8px 8px 5px 0px",
    "rgba(0, 0, 0, 0.99) 8px 8px 5px 0px",
    "rgba(0, 0, 0, 0.33) 0px 7px 10px -3px"
  ]
};

export default theme;
