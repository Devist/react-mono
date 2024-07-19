import type {
  BorderProps,
  ComponentWithAs,
  HTMLChakraProps,
  IconProps,
  LinkProps,
  SystemProps,
} from '@chakra-ui/react';

type ButtonShape = 'rectangle' | 'round' | 'oval';

type ButtonFontWeight = 'medium' | 'bold';

/**
 * border-radius 관련 chakra-ui style prop 사용불가 처리 : 컴포넌트 자체 prop인 radius 만을 사용하기 위함
 */
type ButtonRadiusOmitType = keyof Pick<
  BorderProps,
  | 'borderRadius'
  | 'rounded'
  | 'borderTopRadius'
  | 'roundedTop'
  | 'borderRightRadius'
  | 'roundedRight'
  | 'roundedEnd'
  | 'borderInlineEndRadius'
  | 'borderEndRadius'
  | 'borderBottomRadius'
  | 'roundedBottom'
  | 'borderLeftRadius'
  | 'roundedLeft'
  | 'roundedStart'
  | 'borderInlineStartRadius'
  | 'borderStartRadius'
  | 'borderTopLeftRadius'
  | 'borderTopStartRadius'
  | 'borderStartStartRadius'
  | 'roundedTopLeft'
  | 'roundedTopStart'
  | 'borderTopRightRadius'
  | 'borderTopEndRadius'
  | 'borderStartEndRadius'
  | 'roundedTopRight'
  | 'roundedTopEnd'
  | 'borderBottomLeftRadius'
  | 'borderBottomStartRadius'
  | 'borderEndStartRadius'
  | 'roundedBottomLeft'
  | 'roundedBottomStart'
  | 'borderBottomRightRadius'
  | 'borderBottomEndRadius'
  | 'borderEndEndRadius'
  | 'roundedBottomRight'
  | 'roundedBottomEnd'
>;

/**
 * 피그마 시스템이 border 와 패딩이 함께 있는 경우 border 가 패딩영역에 겹쳐서 그려지고 있어서, 사용하실 때 padding 값에 대한 혼선이 없도록 padding 값을 피그마와 동일하게 바라보기 위해 border css 를 사용하지 않고. boxShadow inset 을 사용함
 * 아웃라인은 border 가 아닌 boxShadow 로 표현하고 있으므로 border관련 prop 사용을 제한함
 */
type ButtonBorderOmitType = keyof Pick<
  BorderProps,
  | 'border'
  | 'borderWidth'
  | 'borderStyle'
  // | 'borderColor' // colorScheme 이 필수가 아닌 동안에는 outline 색상 커스텀 할 수 있게 borderColor 만 포함함. (theme-color-only 규칙 적용할 수 있게 커스텀 props 생성하지 않고 borderColor 로 사용함)
  | 'borderTop'
  | 'borderBlockStart'
  | 'borderTopWidth'
  | 'borderBlockStartWidth'
  | 'borderBottomWidth'
  | 'borderBlockEndWidth'
  | 'borderLeftWidth'
  | 'borderStartWidth'
  | 'borderInlineStartWidth'
  | 'borderRightWidth'
  | 'borderEndWidth'
  | 'borderInlineEndWidth'
  | 'borderTopStyle'
  | 'borderBlockStartStyle'
  | 'borderBottomStyle'
  | 'borderBlockEndStyle'
  | 'borderLeftStyle'
  | 'borderStartStyle'
  | 'borderInlineStartStyle'
  | 'borderRightStyle'
  | 'borderEndStyle'
  | 'borderInlineEndStyle'
  | 'borderTopColor'
  | 'borderBlockStartColor'
  | 'borderBottomColor'
  | 'borderBlockEndColor'
  | 'borderLeftColor'
  | 'borderStartColor'
  | 'borderInlineStartColor'
  | 'borderRightColor'
  | 'borderEndColor'
  | 'borderInlineEndColor'
  | 'borderRight'
  | 'borderEnd'
  | 'borderInlineEnd'
  | 'borderBottom'
  | 'borderBlockEnd'
  | 'borderLeft'
  | 'borderStart'
  | 'borderInlineStart'
  | 'borderX'
  | 'borderInline'
  | 'borderY'
  | 'borderBlock'
>;

/**
 * display: inline-flex 속성가진 요소에 직접 chakra-ui prop "noOfLines" 혹은 "isTruncated" 사용하여 말줄임 처리시 UI 깨지므로 사용 불가 처리함. 말줄임 필요시 children 에서 태그로 감싼 후 감싼 태그에 "noOfLines" 혹은 "isTruncated" 적용 필요.
 */
type ButtonEllipsisOmitType = 'noOfLines' | 'isTruncated';

export type ButtonSolidColorScheme =
  | 'primary_01'
  | 'primary_02'
  | 'gray_01'
  | 'gray_02'
  | 'gray_03'
  | 'gray_04'
  | 'gray_05'
  | 'gray_06'
  | 'white_01'
  | 'ssg_food_01'
  | 'universe_01'
  | 'universe_02'
  | 'universe_03';
export type ButtonOutlineColorScheme =
  | 'primary_01'
  | 'primary_02'
  | 'gray_01'
  | 'gray_02'
  | 'gray_03'
  | 'gray_04'
  | 'white_01';

export type ButtonProps = Omit<
  HTMLChakraProps<'button'> & Omit<LinkProps, 'as'>,
  | ButtonRadiusOmitType
  | ButtonBorderOmitType
  | ButtonEllipsisOmitType
  | 'fontWeight'
  | 'onClick'
  | 'href'
> & {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  variant?: 'solid' | 'outline';
  colorScheme?: ButtonSolidColorScheme | ButtonOutlineColorScheme;
  shape?: ButtonShape;
  LeftIcon?: ComponentWithAs<'svg', IconProps>;
  RightIcon?: ComponentWithAs<'svg', IconProps>;
  iconSpacing?: SystemProps['marginRight'];
  fontWeight?: ButtonFontWeight;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler;
  href?: LinkProps['href'];
};

export type TextButtonColorScheme =
  | 'primary_01'
  | 'gray_01'
  | 'gray_02'
  | 'gray_03'
  | 'white_01'
  | 'black_opacity_01';

export type TextButtonProps = Omit<
  HTMLChakraProps<'button'> & Omit<LinkProps, 'as'>,
  ButtonEllipsisOmitType | 'fontWeight' | 'onClick' | 'href'
> & {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  colorScheme?: TextButtonColorScheme;
  LeftIcon?: ComponentWithAs<'svg', IconProps>;
  RightIcon?: ComponentWithAs<'svg', IconProps>;
  iconSpacing?: SystemProps['marginRight'];
  fontWeight?: ButtonFontWeight;
  hasUnderline?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler;
  href?: LinkProps['href'];
};

export type IconButtonSolidColorScheme =
  | 'white_01'
  | 'white_opacity_01'
  | 'black_opacity_01'
  | 'black_opacity_02'
  | 'black_opacity_03';
export type IconButtonOutlineColorScheme = 'primary_01' | 'gray_01' | 'gray_02' | 'white_01';
export type IconButtonDefaultColorScheme = 'primary_01' | 'gray_01' | 'gray_02' | 'white_01';

export type IconButtonProps = Omit<
  HTMLChakraProps<'button'> & Omit<LinkProps, 'as'>,
  | ButtonRadiusOmitType
  | ButtonBorderOmitType
  | ButtonEllipsisOmitType
  | 'onClick'
  | 'href'
  | 'aria-label'
> & {
  size: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'solid' | 'outline' | 'default';
  colorScheme?:
    | IconButtonSolidColorScheme
    | IconButtonOutlineColorScheme
    | IconButtonDefaultColorScheme;
  shape?: ButtonShape;
  Icon: ComponentWithAs<'svg', IconProps>;
  iconProps?: IconProps;
  'aria-label': string; // IconButton 은 children 을 받지 않으므로 대체텍스트 제공을 필수로 하기 위해 옵셔널이던 타입을 Omit 처리하고 필수로 지정함
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler;
  href?: LinkProps['href'];
};
