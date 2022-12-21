import { Themes } from '../assets/styles/themes/default';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Themes {}
}
