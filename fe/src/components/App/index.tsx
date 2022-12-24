import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/globalStyles';
import defaultTheme from '../../assets/styles/themes/default';
import { Layout } from '../Layout';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Layout />
    </ThemeProvider>
  );
}

export default App;
