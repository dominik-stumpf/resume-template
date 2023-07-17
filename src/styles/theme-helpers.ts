function convertPascalToKebabCase(variable: string) {
  return `${variable.replace(/[A-Z]/g, '-$&').toLowerCase()}`;
}

export function replaceThemeValueToCSSVar<T extends object>(
  themeObject: T,
  defaultPrefix = '',
  useVar = true,
) {
  function parseRecursively(obj: T, prefix = '') {
    let result = {};

    for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
        const value = obj[key as keyof typeof obj] as string;
        if (typeof value === 'object') {
          const newPrefix = `${prefix + key}-`;
          result = { ...result, [key]: parseRecursively(value, newPrefix) };
        } else {
          const variableName = `--${convertPascalToKebabCase(prefix + key)}`;
          result = {
            ...result,
            [key]: useVar ? `var(${variableName})` : variableName,
          };
        }
      }
    }

    return result as T;
  }

  return parseRecursively(
    themeObject,
    defaultPrefix ? `${defaultPrefix}-` : defaultPrefix,
  );
}

export function parseObjToCSSVariables<T extends object>(themeObject: T) {
  function parseRecursively(obj: T, prefix = '') {
    let result: Record<string, string> = {};

    for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
        const value = obj[key as keyof typeof obj] as string;
        if (typeof value === 'object') {
          const newPrefix = `${prefix + key}-`;
          result = { ...result, ...parseRecursively(value, newPrefix) };
        } else {
          result = {
            ...result,
            [`--${convertPascalToKebabCase(prefix + key)}`]: value,
          };
        }
      }
    }

    return result;
  }

  return parseRecursively(themeObject);
}
