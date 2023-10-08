declare type ThemeStorage = {
  mode: Mode;
  theme: Theme;
};

declare type Theme = {
  primary: string;

  text: string;
  textLight: string;

  background: string;
  backgroundLight: string;
  border: string;

  shade: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray600: string;
  gray800: string;
};

declare type Mode = "dark" | "light";
