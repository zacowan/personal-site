import Typography from "typography"

const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.2,
  headerFontFamily: ["Abril Fatface", "Georgia", "serif"],
  bodyFontFamily: ["Glacial Indifference", "Arial", "sans-serif"],
  // See below for the full list of options.
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
