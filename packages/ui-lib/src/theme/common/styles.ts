import { mode, Styles } from '@chakra-ui/theme-tools';
import { DS_DEBUG_MODE } from '../selector';

const styles: Styles = {
  global: (props) => ({
    html: {
      height: '100%',
    },
    body: {
      fontFamily: 'gothic',
      color: mode(`gray900`, `whiteAlpha.900`)(props),
      bg: mode(`white`, `gray900`)(props),
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode(`gray400`, `whiteAlpha.400`)(props),
    },
    '*:not(.show-scrollbar)::-webkit-scrollbar': {
      display: 'none',
    },
    '*, *::before, &::after': {
      borderColor: mode(`gray150`, `whiteAlpha.300`)(props),
      wordWrap: 'break-word',
    },
    ':focus': {
      boxShadow: '',
    },
    ':focus-visible': {
      boxShadow: 'none',
      outline: '1px dashed rgba(0,0,0,.5)',
      outlineOffset: '-1px',
    },
    'ul, ol': {
      listStyle: 'none',
    },
    em: {
      fontStyle: 'normal',
    },
    /**
     * @info 유저 환경이 '동작 줄이기' 모드일 때, 전체 서비스의 transition과 animation을 none 처리합니다. (하단 OS별 '동작 줄이기' 모드 설정 메뉴 참고)
     * @see https://bit.ssgadm.com/projects/WEB/repos/ssg-mssgmall-reactapp/pull-requests/1071/overview
     */
    '@media (prefers-reduced-motion)': {
      '*, *::before, &::after': {
        transition: 'none !important',
        animation: 'none !important',
      },
    },
    [DS_DEBUG_MODE]: {
      '[data-ds-name][data-ds-colorset]': {
        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(104, 65, 255, .2)',
          border: '0.5px dashed',
          borderColor: 'white',
        },
        _after: {
          content: '"📍" attr(data-ds-name) "\\A" attr(data-ds-colorset)',
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 'sticky',
          background: 'rgba(0, 0, 0, .6)',
          padding: '1px 2px',
          color: 'white',
          fontSize: '8px',
          textAlign: 'left',
          whiteSpace: 'pre',
        },
      },
    },
  }),
};

export default styles;
