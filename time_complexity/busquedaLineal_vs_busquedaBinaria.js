const busquedaLineal = (list, target) => {
  console.time("Tiempo de Búsqueda Lineal");
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      console.timeEnd("Tiempo de Búsqueda Lineal");
      return i;
    }
  }
  console.timeEnd("Tiempo de Búsqueda Lineal");
  console.log("No se encontró " + target);
  return -1;
};

const busquedaBinaria = (list, target) => {
  console.time("Tiempo de Búsqueda Binaria");
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (list[middle] === target) {
      console.timeEnd("Tiempo de Búsqueda Binaria");
      return middle;
    } else if (list[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  console.timeEnd("Tiempo de Búsqueda Binaria");
  console.log("No se encontró " + target);
  return -1;
};

// Ejemplo de uso
let listado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

console.log("Resultado Búsqueda Binaria: " + busquedaBinaria(listado, 25)); // Debería imprimir el índice de 25
console.log("Resultado Búsqueda Lineal: " + busquedaLineal(listado, 25)); // Debería imprimir el índice de 25
