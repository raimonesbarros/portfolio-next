import { makeAutoObservable, makePersistable } from "~/modules";
import { defaultTheme, lightTheme } from "..";

export default class ThemeStore {
  mode: Mode = "light" as Mode;

  theme: Theme = {} as Theme;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "ThemeStore",
      properties: ["mode", "theme"],
    });
  }

  setTheme = () => {
    if (this.mode === "dark") {
      this.mode = "light";
      this.theme = lightTheme;
    } else {
      this.mode = "dark";
      this.theme = defaultTheme;
    }
  };
}
