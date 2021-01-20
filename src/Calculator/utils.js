// calcular resultado
export function handleOperation(arr) {
  let x =  arr.map( x => {
   return x.isNaN ? 'op' : x;
  })

  return x;
}

// manipular entrada de dados
export function parseNumber(num, val = 0) {
  if(Number.isNaN(Number(num))) {
    if (num[num.length - 1] === val) {
        return num;
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
  }

  return {
    display: obj.display === 0  ?  val : parseNumber(obj.display, val),
    operation: operator,
    expression:  [...obj.expression, val],
    result: null,
    lastValue: val
  }
}