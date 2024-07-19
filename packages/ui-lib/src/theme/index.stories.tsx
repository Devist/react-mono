import { Fragment, useMemo } from 'react';
import { Box, Flex, SimpleGrid, Text, useTheme } from '@chakra-ui/react';

export default {
  title: 'A. 디자인시스템/1. 파운데이션',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

/**
 * 미리보기용 컴포넌트
 ************************************************************************************/
const FoundationItem = (props: any) => {
  const { title, children, ...rest } = props;

  return (
    <Box pb={5} {...rest}>
      <Text as="h2" fontSize="4xl" fontWeight="bold">
        {title}
      </Text>
      {children}
    </Box>
  );
};

const FoundationValue = (props: any) => {
  const { value, ...rest } = props;
  const isRemValue = useMemo(
    () => typeof value === 'string' && value.substring(value.length - 3) === 'rem',
    [value],
  );

  return (
    <Box my={1} {...rest}>
      <Text as="span" fontSize="xs" color="gray400">
        {value}
        {isRemValue && (
          <Text as="span" ml="1">
            {parseFloat(value) * 16}px
          </Text>
        )}
      </Text>
    </Box>
  );
};

const ColorItem = ({ name, value }: { name: string; value: string }) => (
  <Box display="inline-block" w="30%">
    <Flex alignItems="center" mt={1}>
      <Box
        background={value}
        boxSize={10}
        flexShrink={0}
        boxShadow="inset 0 0 1px rgba(0,0,0,.3)"
      />
      <Box pl="10px">
        <Text fontSize="sm"> {name.toString()}</Text>
        <FoundationValue value={value.toString()} my={0} />
      </Box>
    </Flex>
  </Box>
);

// 스토리
export const Color = () => {
  const theme = useTheme();

  const exclusionColors = [
    'gray',
    'whiteAlpha',
    'blackAlpha',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'cyan',
  ];

  const colors = Object.keys(theme.colors)
    .sort((a, b) => (typeof theme.colors[b] === 'object' ? 1 : -1))
    .reverse()
    .reduce((obj: Record<string, any>, key: string) => {
      if (!exclusionColors.includes(key)) {
        obj[key] = theme.colors[key];
      }
      return obj;
    }, {});

  return (
    <>
      {Object.keys(colors).map((key) => (
        <Fragment key={key}>
          {typeof colors[key] === 'object' ? (
            <Box w="full" my={16}>
              <Text as="h2" fontSize="4xl" fontWeight="bold" mb={2}>
                {key}
              </Text>
              {Object.keys(colors[key]).map((c) => (
                <ColorItem key={c} name={c} value={colors[key][c]} />
              ))}
            </Box>
          ) : (
            <ColorItem name={key} value={colors[key]} />
          )}
        </Fragment>
      ))}
    </>
  );
};
Color.parameters = {
  design: {
    type: 'figma',
    url:
      process.env.STORYBOOK_THEME === 'emart'
        ? 'https://www.figma.com/file/yatMtyLaQcSjuqj7wteMTa/%5BDS%5D-EMART-UI-KIT?node-id=6-26&t=Zz7HO6yNXLMZ5tJZ-0'
        : 'https://www.figma.com/file/gjmXdgPXR6dXCgAGDGdLsG/%5BDS%5D-SSG-UI-KIT?node-id=4764%3A95733&t=m0mMng448q7sIzhA-1',
  },
};

export const Border = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.borders).map((key) => (
        <FoundationItem title={key} key={key}>
          <FoundationValue value={theme.borders[key]} />
          <Box borderTop={theme.borders[key]} borderColor="inherit" />
        </FoundationItem>
      ))}
    </>
  );
};

export const Radius = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.radii)
        .filter((v) => !!theme.radii[v])
        .map((key) => (
          <FoundationItem title={key} key={key}>
            <FoundationValue value={theme.radii[key]} />
            <Box bg="gray300" height={14} borderRadius={theme.radii[key]} />
          </FoundationItem>
        ))}
    </>
  );
};

export const Shadow = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.shadows).map((key) => (
        <FoundationItem title={key} key={key}>
          <FoundationValue value={theme.shadows[key]} />
          <Box boxShadow={theme.shadows[key]} height="20" border="1px" borderColor="inherit" />
        </FoundationItem>
      ))}
    </>
  );
};

export const Space = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.space)
        .sort((a, b) => (Number(a !== 'px' && a) > Number(b !== 'px' && b) ? 1 : -1))
        .map((key) => (
          <FoundationItem title={key} key={key}>
            <FoundationValue value={theme.space[key]} />
            <SimpleGrid columns={2} spacing={theme.space[key]}>
              <Box bg="gray300" height="20" />
              <Box bg="gray300" height="20" />
            </SimpleGrid>
          </FoundationItem>
        ))}
    </>
  );
};

export const Size = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.sizes).map((key) => (
        <Box key={key}>
          {typeof theme.sizes[key] === 'object' ? (
            <Box>
              <Text as="h2" fontSize="4xl" py="5">
                Container Sizes
              </Text>
              {Object.keys(theme.sizes[key]).map((c) => (
                <FoundationItem title={c} key={key + c}>
                  <FoundationValue value={theme.sizes[key][c]} />
                </FoundationItem>
              ))}
            </Box>
          ) : (
            <FoundationItem title={key}>
              <FoundationValue value={theme.sizes[key]} />
              <Box bg="gray300" boxSize={theme.sizes[key]} />
            </FoundationItem>
          )}
        </Box>
      ))}
    </>
  );
};

const lorem = `
  SSG.COM 에스에스지닷컴
  SSG Only SSG에서만 만날 수 있어요
  SSG.LIVE 쇼핑 라이브쇼의 신세계
  abcdefghijklmnopqrstuvwxyz
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
  😀😃😄🤢🌱🌿🪴🌹🌷💐❤️🧡💛💚💙💜🖤🤍🤎
`;

export const Font = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.fonts)
        .filter((v) => !!theme.fonts[v])
        .map((key) => (
          <FoundationItem title={key} key={key} color="primary">
            <FoundationValue value={theme.fonts[key]} />
            <Text fontFamily={theme.fonts[key]} color="gray900">
              {lorem}
            </Text>
          </FoundationItem>
        ))}
    </>
  );
};

export const FontSize = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.fontSizes)
        .filter((v) => !!theme.fontSizes[v])
        .sort((a, b) => parseInt(theme.fontSizes[a], 10) - parseInt(theme.fontSizes[b], 10))
        .map((key) => (
          <FoundationItem title={key} key={key}>
            <FoundationValue value={theme.fontSizes[key]} />
            <Text fontSize={theme.fontSizes[key]} lineHeight="normal">
              {lorem}
            </Text>
          </FoundationItem>
        ))}
    </>
  );
};
FontSize.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gjmXdgPXR6dXCgAGDGdLsG/%5BDS%5D-SSG-UI-KIT?node-id=37-2503&t=yKwnoYUqsEABoX6C-0',
  },
};

export const FontWeight = () => {
  const theme = useTheme();

  return (
    <>
      {['normal', 'medium', 'semibold', 'bold'].map((key) => (
        <FoundationItem title={key} key={key}>
          <FoundationValue value={theme.fontWeights[key]} />
          <Text fontWeight={key}>[gothic(Pretendard)] {lorem}</Text>
          {key !== 'bold' && (
            <Text fontFamily="serif" fontWeight={key}>
              [serif(PlayfiarDisplay)] {lorem}
            </Text>
          )}
        </FoundationItem>
      ))}
    </>
  );
};

export const LetterSpacing = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.letterSpacings).map((key) => (
        <FoundationItem title={key} key={key}>
          <FoundationValue value={theme.letterSpacings[key]} />
          <Text letterSpacing={theme.letterSpacings[key]}>{lorem}</Text>
        </FoundationItem>
      ))}
    </>
  );
};

export const LineHeight = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.lineHeights)
        .filter((v) => !parseInt(v))
        .map((key) => (
          <FoundationItem title={key} key={key}>
            <FoundationValue value={theme.lineHeights[key]} />
            <Text lineHeight={theme.lineHeights[key]}>{lorem}</Text>
          </FoundationItem>
        ))}
    </>
  );
};

export const ZIndex = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.zIndices).map((key) => (
        <FoundationItem title={key} key={key}>
          <FoundationValue value={theme.zIndices[key]} />
        </FoundationItem>
      ))}
    </>
  );
};
