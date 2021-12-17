```
function calculaNota(ex, p1, p2) {
  const prova1 = p1 * 2;
  const prova2 = p2 * 3;
  const pesos = 1 + 2 + 3;
  const mediaPonderada = (ex + prova1 + prova2) / pesos;

  if(mediaPonderada >= 9){
    return "A";
  } else if (mediaPonderada >= 7.5){
    return "B";
  } else if (mediaPonderada >= 6){
    return "C";
  } else {
    return "D";
  };

};
```
