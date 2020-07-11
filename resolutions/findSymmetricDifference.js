// DESCRIPTION

/* 
Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must 
contain only unique values (no duplicates).

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but 
not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving 
symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, 
and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
*/

const sym = (...args) => {
  if (args.length === 2) {
    const result = [];

    args[0].forEach((elem) => {
      if (!args[1].includes(elem) && !result.includes(elem)) {
        result.push(elem);
      }
    });
    args[1].forEach((elem) => {
      if (!args[0].includes(elem) && !result.includes(elem)) {
        result.push(elem);
      }
    });

    return result;
  } else {
    const arg = sym(args[0], args[1]);
    const newArgs = [...args];
    newArgs.splice(0, 2, arg);
    const result = sym(...newArgs);
    return result;
  }
};