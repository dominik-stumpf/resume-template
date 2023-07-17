class ThemeParser {
  private prefix;

  constructor(prefix = '') {
    this.prefix = prefix;
  }

  private convertPascalToKebabCase(variable: string) {
    return `${variable.replace(/[A-Z]/g, '-$&').toLowerCase()}`;
  }
  public replaceThemeValueToCSSVar<T extends object>(
    themeObject: T,
    useVar = true,
  ) {
    const parseRecursively = (obj: T, prefix = this.prefix) => {
      let result = {};

      for (const key in obj) {
        const value = obj[key as keyof typeof obj] as string;
        if (typeof value === 'object') {
          const newPrefix = `${prefix + key}-`;
          result = { ...result, [key]: parseRecursively(value, newPrefix) };
        } else {
          const variableName = `--${this.convertPascalToKebabCase(
            prefix + key,
          )}`;
          result = {
            ...result,
            [key]: useVar ? `var(${variableName})` : variableName,
          };
        }
      }

      return result as T;
    };

    return parseRecursively(
      themeObject,
      this.prefix ? `${this.prefix}-` : this.prefix,
    );
  }

  public parseObjToCSSVariables<T extends object>(themeObject: T) {
    const parseRecursively = (obj: T, prefix = this.prefix) => {
      let result: Record<string, string> = {};

      for (const key in obj) {
        const value = obj[key as keyof typeof obj] as string;
        if (typeof value === 'object') {
          const newPrefix = `${prefix + key}-`;
          result = { ...result, ...parseRecursively(value, newPrefix) };
        } else {
          result = {
            ...result,
            [`--${this.convertPascalToKebabCase(prefix + key)}`]: value,
          };
        }
      }

      return result;
    };

    return parseRecursively(
      themeObject,
      this.prefix ? `${this.prefix}-` : this.prefix,
    );
  }
}

export const themeParser = new ThemeParser();
