const parameters = {
  weight: 'wght',
  width: 'wdth',
  slant: 'slnt',
  opticalSizing: 'opsz',
  wonk: 'WONK',
  soft: 'SOFT',
};

export function fontVariationSettingsHelper(
  props: Partial<Record<keyof typeof parameters, number>>,
) {
  return Object.entries(props)
    .map(([key, value]) => {
      return `"${parameters[key as keyof typeof parameters]}" ${value}`;
    })
    .join(', ');
}
