export default {
  colors: {
    background: '#F6F5FC',
    success: '#51CA73',
    primary: {
      lighter: '#E0E3FF',
      light: '#6674F4',
      main: '#5061fc',
      dark: '#3346F0',
    },
    danger: {
      light: '#F97171',
      main: '#FC5050',
      dark: '#F63131',
    },
    gray: {
      900: '#222222',
      200: '#BCBCBC',
      100: '#E6E6E6',
    },
  },
};

export interface Themes {
  colors: {
    background: string;
    success: string;
    primary: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
    };
    danger: {
      light: string;
      main: string;
      dark: string;
    };
    gray: {
      900: string;
      200: string;
      100: string;
    };
  };
}
