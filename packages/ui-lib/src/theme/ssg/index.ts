import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { getFilteredTheme } from '../utils';

// common
import styles from '../common/styles';
import foundations from '../common/foundations';
// TODO: 기본컴포넌트 테마 커스텀 제거
import components from '../common/components';

// ssg
import colors from './foundations/colors';

const config: ThemeConfig = {
  cssVarPrefix: 'm', // mobile 축약어
};

const overrides = {
  id: 'ssg',
  config,
  styles,
  ...foundations,
  colors: {
    ...foundations.colors,
    ...colors,
  },
  components,
};

const theme = extendTheme(overrides);

export default getFilteredTheme(theme);
