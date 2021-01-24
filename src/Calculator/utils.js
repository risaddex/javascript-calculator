const OPS = /[-*+/=]{2}$/g; ///\D(?=\D)/g <- another handy regEx;
const NEGATIVE = /\d[x/+‑]{1}‑$/;
const PREREQ = /([^.0-9]0|^0)$/;
const ZERO = /^[0]+(?!0)+/g;
const isOperator = /[-*+/=.]/g;
const MINUS = /\d-$/g;
const DOT = /[-+/*]?\d+\.\d*$/;

export function customSetter (obj, val) {
  debugger
  let d = obj.display;
  let result = '';
  let expression = obj.expression;
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
      
      case '.':
        return '.';
      
      case '=':
          return '=';

      default: 
        return 'number';
    }
  }
  
  if(val === '.') { 
    if(/\.$/.test(expression)) expression = expression.slice(0, -1);
    if(DOT.test(expression)) expression = expression;
  } 
 
  if(PREREQ.test(expression)) expression = expression.slice(0, -1) + val;
 
  else expression += val
  

  if(val.match(isOperator)) {
    if(expression.match(OPS)){
      expression = expression.slice(0, -2) + val;
    } 
  }
  
  result = operator() === '=' ? eval(expression.slice(0,-1)) : `${expression}`
       
  return {
    display: result ? result : 0,
    operation: operator(),
    expression: result ? result : '0',    
    lastValue: val,
    result: ''
  }
}

///todo put current expression to handle 0 and . cases