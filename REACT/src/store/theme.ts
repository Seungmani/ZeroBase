import { atom } from 'recoil';
export enum ThemeEnums {
  LIGHT = "LIGHT",
  DARK = "DARK",
};

const { LIGHT, DARK } = ThemeEnums;

export const getTheme = () => {
  const theme: string = localStorage.getItem('theme') || "DARK";

  if (theme === LIGHT) return LIGHT;
  return DARK;
}

export const themeMode = atom<ThemeEnums>({
  key: 'theme',
  default: DARK,
});