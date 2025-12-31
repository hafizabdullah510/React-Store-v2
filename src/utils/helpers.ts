export const formatPrice = (price: string | number) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(Number(price) / 100);
  return dollarsAmount;
};

export const generateQuerySting = (
  params: Record<string, string | number | boolean>
) => {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return `?${queryString}`;
};
