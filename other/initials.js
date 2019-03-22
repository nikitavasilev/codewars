function abbrevName(name) {
  name = name.split(' ');
  const str = `${name[0].charAt(0)}.${name[1].charAt(0)}`;
  return str.toUpperCase();
}

console.log(abbrevName('sam Harris')); // 'S.H'
console.log(abbrevName('Patrick Feenan')); // 'P.F'
console.log(abbrevName('Evan Cole')); // 'E.C'
console.log(abbrevName('P Favuzzi')); // 'P.F'
console.log(abbrevName('David Mendieta')); // D.M