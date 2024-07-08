const solution = (babbling) => {
  let result;
  let dictionary = ["aya", "ye", "woo", "ma"];
  babbling.forEach((baby) => {
    dictionary.forEach((item) => {
      console.log(baby.includes(item));
    });
  });
  return result;
};
