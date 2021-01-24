/* eslint-disable no-eval */
const OPS = /\d?[*/+.]{2}$/;
const PREREQ = /([^.0-9]0|^0)$/; //verifica se há um zero no inicio ou após um operador (zero à esquerda)
const isOperator = /[-.*+/]$/; //verifica se é operador
const DOT = /[-+/*]?\d+\.+\d$/;
const extraZ = /\.\d+\.?$/; // auxiliar para remoção de pontos adicionados

export function customSetter(obj, val) {
  let result = "";
  let exp = obj.expression;
  const operator = () => {
    switch (val) {
      case ".":
        return ".";

      case "=":
        return "=";

      default:
        return "number";
    }
  };

  if (PREREQ.test(exp) && val !== "=" && val !== ".") {
    exp = exp.slice(0, -1) + val;
  } else {
    exp += val;
    if (val.match(isOperator)) {
      // é operador (-+/*)
      if (val === ".") {
        if (DOT.test(exp)) {
          // termina com ponto
          exp = exp.slice(0, -1);
        }
        if (isOperator.test(exp)) {
          if (obj.operation !== "number" && obj.operation !== ".") {
            // adiciona "0" automaticamente após a inserção de um '.' em local válido.
            exp = exp.replace(/([-.*+/])$/, "0$1");
          }
        }
      }
      if (val === "-") {
        // lidar com valores negativos
        console.log("kek");
      }
      if (OPS.test(exp)) {
        // lidar com operadores duplicados
        exp = exp.slice(0, -2) + val; // + / *
      }
      if (extraZ.test(exp)) {
        // remover pontos extras (após ser manipulado por isOperator)
       exp =  exp.slice(0, -1);
      }
    }
  }

  result = operator() === "=" ? eval(exp.slice(0, -1)) : `${exp}`;

  return {
    display: result ? result : "0",
    operation: operator(),
    expression: result ? result : "0",
    lastValue: val,
    result: "",
  };
}
