export type Theme = "light" | "dark" | "violet" | "blue" | "green" | "red" | "pink" | "orange";
export const THEMES = ["light","dark","violet","blue","green","red","pink","orange"] as const;

export function isTheme(x: unknown): x is Theme {
  return typeof x === "string" && (THEMES as readonly string[]).includes(x);
}