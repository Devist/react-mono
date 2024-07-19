import { useState, useRef, useEffect } from 'react';
import { Input, FormLabel, FormControl, FormHelperText, Box, Text, Link } from '@chakra-ui/react';

import { Button } from '../../components/button';

export default {
  title: 'Z. 개발도구 / 아이콘',
  parameters: {
    layout: 'padded',
  },
};

export const IconConverterStory = () => {
  const [originalFileNameList, setOriginalFileNameList] = useState<string[]>([]);
  const [colorCode, setColorCode] = useState<string>('black');
  const tempFileNameList = useRef<string[]>([]);
  const svgListRef = useRef<
    Array<{
      fileName: string;
      source: string;
    }>
  >([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const onChangeInput = (e: { target: HTMLInputElement }) => {
    const fileList = e.target.files;

    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const originalFileName = file.name;

        if (!originalFileName.match(/(.svg)$/)) {
          console.debug(`"${originalFileName}" 파일은 .svg 확장자가 아니므로 처리할 수 없습니다.`);
          continue;
        }

        getSvgFileInfo(fileList, i);
      }
    }
  };

  const getSvgFileInfo = (fileList: FileList, index: number) => {
    const file = fileList[index];
    const originalFileName = file.name;
    const iconName = originalFileName
      .replace(/(.svg)$/, '')
      .split(/_|\s/)
      .map((str) => {
        let tempStr = str;
        if (tempStr.toLowerCase() === 's') tempStr = 'small';
        if (tempStr.toLowerCase() === 'm') tempStr = 'medium';
        if (tempStr.toLowerCase() === 'l') tempStr = 'large';
        return tempStr[0].toUpperCase() + tempStr.slice(1);
      })
      .join('');
    const fileName = `${iconName}Icon`;
    const reader = new FileReader();

    reader.onload = function () {
      if (!reader.result) return false;

      tempFileNameList.current.push(originalFileName);
      svgListRef.current.push({
        fileName,
        source: reader.result.toString(),
      });

      if (index + 1 === fileList.length) {
        setOriginalFileNameList(tempFileNameList.current);
      }
    };
    reader.readAsText(file);
  };

  const onClickConvertStartBtn = () => {
    svgListRef.current.forEach((svgItem, index) => {
      const fileName = svgItem.fileName;
      const template = setCreateIconTemplate(svgItem.source, fileName);

      timerRef.current = setTimeout(() => {
        downloadConvertedIconFile(template, fileName);
      }, 500 * index);
    });
  };

  const setCreateIconTemplate = (svgStr: string, fileName: string) => {
    const doc = new DOMParser().parseFromString(svgStr, 'text/xml');
    const svgChildrenList = Array.from(doc.getElementsByTagName('svg')[0].children);
    const convertedPaths = svgChildrenList.map((path) => {
      const tempWrapper = document.createElement('div');
      const node = path.cloneNode(true);
      let convertedPath: string;
      const colorRegex = new RegExp(`fill="${colorCode}"`, 'gi');

      tempWrapper.appendChild(node);
      convertedPath = tempWrapper.innerHTML.replace(colorRegex, 'fill="currentColor"');
      convertedPath = convertedPath.replace(/-rule/gi, 'Rule');
      convertedPath = convertedPath.replace('></path>', ' />');

      return convertedPath;
    });

    const createIconTemplate = `import { createIcon } from './utils/createIcon';

export const ${fileName} = createIcon({
  displayName: '${fileName}',
  path: [
    ${convertedPaths.join(',\n    ')}
  ],
});
`;

    return createIconTemplate;
  };

  const downloadConvertedIconFile = (template: string, fileName: string) => {
    const blob = new Blob([template], { type: 'text/xml' });
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = downloadUrl;
    a.download = `${fileName}.tsx`;
    document.body.appendChild(a);
    a.click();
  };

  const onChangeColor = (e: { target: HTMLInputElement }) => {
    setColorCode(e.target.value);
  };

  return (
    <FormControl>
      <Text mb={3}>
        사용법은{' '}
        <Link
          target="_blank"
          href="https://projectwiki.ssgadm.com/pages/viewpage.action?pageId=37611404"
        >
          컨플루언스 페이지
        </Link>
        를 확인하세요
      </Text>
      <Box p={3} border="1px solid" borderColor="gray300" borderRadius="xl">
        <FormLabel htmlFor="svgUpload" fontSize="3xl">
          SVG 파일 업로드
        </FormLabel>
        <Input
          type="file"
          onChange={onChangeInput}
          id="svgUpload"
          accept=".svg"
          multiple
          height="auto"
          p={2}
          borderRadius="xl"
        />
        <FormHelperText>*.svg 확장자 파일만 처리할 수 있습니다.</FormHelperText>

        <FormLabel htmlFor="colorCode" mt={5} fontSize="3xl">
          fill=&quot;currentColor&quot; 로 변환할 컬러코드 입력
        </FormLabel>
        <Input
          type="text"
          onChange={onChangeColor}
          id="colorCode"
          placeholder={`입력하지 않으면 fill="black"을 fill="currentColor" 로 변환합니다`}
        />
        <FormHelperText>
          색상 커스텀 가능해야 할 요소는 fill=&quot;currentColor&quot; 로 변환되어야 합니다
        </FormHelperText>
      </Box>

      {originalFileNameList.length > 0 && (
        <>
          <Button
            size="xl"
            colorScheme="primary_01"
            onClick={onClickConvertStartBtn}
            w="full"
            mt={3}
          >
            파일 변환 &amp; 다운로드 하기
          </Button>
          <FormHelperText mt={3} fontSize="3xl">
            {`변환할 파일 (${originalFileNameList.length}개)`}
          </FormHelperText>
          <FormHelperText
            p={2}
            border="1px solid"
            borderColor="gray300"
            borderRadius="xl"
            whiteSpace="pre"
          >
            {originalFileNameList.join('\n')}
          </FormHelperText>
        </>
      )}
    </FormControl>
  );
};

IconConverterStory.storyName = '아이콘 파일 변환 - SVG to createIcon 컴포넌트';
