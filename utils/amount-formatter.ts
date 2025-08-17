export const formatAmount = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  style: "decimal",
});
