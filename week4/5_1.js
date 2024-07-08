const solution = (spell, dic) => {
  let spell_set = new Set(spell);
  for (d of dic) {
    if ([...d].filter((value) => !spell_set.has(value))) {
      return 1;
    }
  }
  return 2;
};

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "sop"]));
