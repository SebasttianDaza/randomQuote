const getRandomColor = (color) => {
  const random = Math.floor(Math.random() * 8);
  return color[random];
};

export default getRandomColor;
