import { useEffect } from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import FontFaces from './FontFace';
import CSSReset from './Reset';

interface IProps extends ChakraProviderProps {
  isDsDebugMode?: boolean;
}

export const ThemeProvider = ({ children, theme, resetCSS, isDsDebugMode, ...rest }: IProps) => {
  useEffect(() => {
    const parentElement = document.querySelector('html');
    const themeKey = theme?.id ?? 'ssg';

    if (parentElement) {
      parentElement.setAttribute('data-ds-theme', themeKey);
      isDsDebugMode
        ? parentElement.setAttribute('data-ds-debug-mode', '')
        : parentElement.removeAttribute('data-ds-debug-mode');
    }
  }, [isDsDebugMode, theme?.id]);

  return (
    <ChakraProvider resetCSS={resetCSS} theme={theme} {...rest}>
      {!resetCSS && <CSSReset />}
      <FontFaces />
      {children}
    </ChakraProvider>
  );
};
