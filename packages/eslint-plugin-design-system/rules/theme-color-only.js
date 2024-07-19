module.exports = {
  create: function (context) {
    const filename = context.getFilename();

    // "components" 디렉토리 하위의 파일이 아니면 규칙을 적용하지 않습니다.
    if (!filename.includes('/components/')) {
      return {};
    }

    return {
      // 일반적인 javascript object 대상
      Property(node) {
        if (isValidTarget(node.key.name, node.value.value) && !isValidColor(node.value.value)) {
          context.report({
            node,
            messageId: 'noHardcodedColor',
            data: {
              color: node.value.value,
            },
          });
        }
      },

      // JSX 대상
      JSXAttribute(node) {
        const colorValue = getJSXAttributeValue(node);

        if (isValidTarget(node.name.name, colorValue) && !isValidColor(colorValue)) {
          context.report({
            node: node.value,
            messageId: 'noHardcodedColor',
            data: {
              color: colorValue,
            },
          });
        }
      },
    };
  },
  meta: {
    messages: {
      noHardcodedColor: "테마에 정의된 토큰명만 사용하세요.🤗 '{{color}}'는 허용되지 않습니다.",
    },
  },
};

function isValidTarget(name, value) {
  return (
    typeof value === 'string' &&
    (name === 'color' ||
      name === 'textColor' ||
      name === 'backgroundColor' ||
      name === 'bgColor' ||
      (name === 'bg' && !value.includes('gradient') && !value.includes('url')) ||
      (name === 'borderColor' && !value.includes(' ')))
  );
}

function isValidColor(colorValue) {
  // TODO: 나중에 디펜던시 정리되면 하드코딩 안하도록 수정하면 좋겠음
  const validColors = [
    'none',
    'inherit',
    'current',
    'currentColor',
    'transparent',
    'white',
    'black',
    'black_alpha3',
    'black_alpha4',
    'black_alpha8',
    'black_alpha20',
    'black_alpha45',
    'black_alpha60',
    'black_alpha80',
    'black_alpha95',
    'white_alpha20',
    'white_alpha45',
    'white_alpha60',
    'white_alpha80',
    'white_alpha95',
    'warning',
    'warning_loss',
    'positive',
    'success',
    'site.emart_primary',
    'site.shinsegaemall_primary',
    'site.shinsegaemall_secondary',
    'site.department_primary',
    'site.department_secondary1',
    'site.department_secondary2',
    'site.ssg_secondary3_horizontal',
    'site.triip_primary',
    'site.triip_secondary1',
    'site.triip_secondary2',
    'site.wconcept_primary',
    'site.ssglanders_primary',
    'delivery.emart_light',
    'delivery.emart',
    'delivery.emart_dark',
    'delivery.earlymorning_light',
    'delivery.earlymorning',
    'delivery.earlymorning_dark',
    'delivery.traders_light',
    'delivery.traders',
    'delivery.traders_dark',
    'delivery.oneday',
    'delivery.oneday_dark',
    'delivery.post_light',
    'delivery.post',
    'delivery.depart_today_light',
    'delivery.depart_today',
    'delivery.pickup',
    'delivery.mobilecoupon',
    'service.universe_primary_01',
    'service.universe_primary_02',
    'service.universe_secondary_01',
    'service.universe_secondary_02',
    'service.happylounge_primary',
    'service.present_primary',
    'service.present_secondary1',
    'service.present_secondary2',
    'service.ssgtalk_primary',
    'service.obanjang_primary',
    'service.mondaymoon_primary',
    'service.foodmarket_primary1',
    'service.foodmarket_primary2',
    'service.foodmarket_primary3',
    'service.foodmarket_secondary1',
    'service.foodmarket_secondary2',
    'service.nana_primary',
    'service.luxury_primary',
    'service.esg_primary',
    'service.esg_primary_light',
    'service.ssg_food',
    'service.ssg_food_light',
    'service.farmersmarket',
    'service.biz',
    'service.freshgreen_primary',
    'promotion.ssgday_primary',
    'promotion.ssgday_secondary1',
    'promotion.ssgday_secondary2',
    'brand',
    'primary_light',
    'primary',
    'primary_dark',
    'secondary',
    'gray100',
    'gray150',
    'gray200',
    'gray300',
    'gray350',
    'gray400',
    'gray500',
    'gray600',
    'gray700',
    'gray800',
    'gray900',
  ];
  return validColors.includes(colorValue);
}

function getJSXAttributeValue(node) {
  if (node.value && node.value.type === 'Literal') {
    return node.value.value;
  }

  if (
    node.value &&
    node.value.type === 'JSXExpressionContainer' &&
    node.value.expression &&
    node.value.expression.type === 'Literal'
  ) {
    return node.value.expression.value;
  }

  return null;
}
