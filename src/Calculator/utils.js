const OPS = /\D(?=[+/*\-=.])/g; ///\D(?=\D)/g <- another handy regEx;
// calcular resultado
function handleOperation(arr, op, res) {
  
  let x = arr;
  if(x[x.length -1] === op) {
  return x.join("").replace(/[-+*/=]/,"");
  }
  return eval(x.join("").replace(OPS,"")) ;
}
// manipular entrada de dados
// to-do: permitir repetição de "-"
function parseNumber(val, expr, res) {
  
  if(res === "") {
    return expr.concat(val).join("") // still needs to remove last value to screen
  }
  return res + (val);

}

export function customSetter (obj, val) {
  let result = "";
  const operator = () => {
    switch(val) {
      case '*':
        return '*';

      case '-':
        return '-';

      case '/':
          return '/';

      case '+':
        return '+';
      
      default: 
        return 'number';
    }
  }
  if(val === "="){ // tratamento de resultado
    result = handleOperation(obj.expression, obj.operation, obj.result);
  }

  return {
    display: val === "=" ? result : parseNumber(val, obj.expression, obj.result),
    operation: operator(),
    expression:  result ? [result] : [...obj.expression, val],
    lastValue: val,
    result: result
  }
}