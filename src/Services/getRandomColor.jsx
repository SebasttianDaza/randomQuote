const color = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const getRandomColor = (reverse) => {
  const random = Math.floor(Math.random() * 8);
  // Get random color from array
  return reverse ? color.reverse()[random] : color[random];
};

export default getRandomColor;
