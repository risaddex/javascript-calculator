const OPS = /\D(?=[+/*\-=.])/g; ///\D(?=\D)/g <- another handy regEx;
// calcular resultado
export function handleOperation(arr) {
  let x = eval(arr
    .join("")
    .replace(OPS,""))   
  return x;
}
// manipular entrada de dados
// todo: permitir repetição de " -"
function parseNumber(num, val = 0) {
  if(Number.isNaN(Number(num))) {
    if (num[num.length - 1].isNaN) {
        return val;
      }
  }
  return num + val;
}

export function customSetter (obj, val) {
  const operator = () => {
    switch(val) {
      case '*':
        return 'mult';

      case '-':
        return 'mult';

      case '/':
          return 'mult';

      case '+':
        return 'add';

      default: 
        return '';
    }
  };

  return {
    display: obj.display === 0  ?  val : parseNumber(obj.display, val),
    operation: operator,
    expression:  [...obj.expression, val],
    result: null,
    lastValue: val
  }
}