export const getFilteredTheme = (theme: any) => {
  const filterByExclusionList = (source: Record<string, any>, exclusionList: string[]) =>
    Object.fromEntries(Object.entries(source).filter(([key]) => !exclusionList.includes(key)));

  // 참고: https://bit.ssgadm.com/projects/WEB/repos/ssg-mssgmall-reactapp/pull-requests/345/diff#src/@core/theme/foundations/modules/colors.ts
  const colors = filterByExclusionList(theme.colors, [
    'teal',
    'purple',
    'pink',
    'linkedin',
    'facebook',
    'messenger',
    'whatsapp',
    'twitter',
    'telegram',
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'cyan',
  ]);
  const fonts = filterByExclusionList(theme.fonts, ['heading', 'body', 'mono']);

  return {
    ...theme,
    colors,
    fonts,
  };
};
