# Sprint 2
https://github.com/solida29/sprint_2

## Entrega 2.2: Funció throttle

### Descripció
La funció throttle serveix per limitar la freqüència d'execució d'una funció en resposta a esdeveniments repetits. A diferència de la funció debounce, que retarda l'execució de la funció fins que no es produeix cap esdeveniment durant un determinat temps, la funció throttle permet executar la funció a intervals de temps regulars.

En altres paraules, la funció throttle establirà un interval de temps entre les execucions de la funció per assegurar-se que no s'executi més sovint del necessari. Aquesta tècnica és útil quan es vol controlar la freqüència d'execució d'una funció en resposta a esdeveniments repetitius, com ara desplaçaments, actualitzacions d'interfícies d'usuari o crides a funcions costoses.

En aquesta tasca has d'implementar una funció throttle utilitzant TypeScript i TDD.

### Nivell 1
Implementa una funció throttle utilitzant TypeScript i TDD.
Fes servir tests per comprovar la funcionalitat de la funció throttle.

### Nivell 2
Crea una CLI per comprovar la funcionalitat de la funció throttle.

### Nivell 3
Crea un front-end per comprovar la funcionalitat de la funció throttle.

### Objectius
Aprendre i practicar conceptes clau de JavaScript com ara funcions de retorn, closures, temporitzadors, objectes i mètodes, així com el maneig de comportament asíncron.

### Durada: 3 dies

### Lliurament
- Crea un sol repositori per a l'exercici, i envia l'URL perquè sigui revisat.
- Fes servir com a soport el README.md per escriure les indicacions per executar els scripts.
- Fes ús de CI (Integració Continua) amb GitHub actions.

<hr>

### functionThrottle.ts
Está en la carpeta src.

La función throttle devuelve el callback con un tiempo de espera entre cada ejecución (delay). Es un función génerica.

- La variable timer (línea 2) permite almacenar el tiempo pasado desde la llamada de la función callback. Empieza en null.
- Cuando está null, la función callback puede ser ejecutada inmediatamente (líneas 5 y 6).
- una vez ejecutada, el timer pasa por un setTimeout para que vuelva a null pasado el delay, de tal manera que la función no se vuelva a ejecutar de inmediato si se vuelve a llamar pero que espere a que el delay pase (líneas 7, 8 y 9).

### Nivel 1: TDD
src/__tests__/functionThrottle.test.ts

Se testea con una función mock, que pasa por la función Throttle con un delay de 1 segundo.
- La llamamos y se espera que se ejecute de inmediato una vez (línea 8)
- Después se llama con un tiempo de 500 ms y se ve que solo se ha ejecutado 1 vez y no 2 por el throttle (líneas 11, 12 y 13).
- La volvemos a llamar con un intervalo de tiempo de 1 segundo, y ahora la función mock se ejecuta porque ha pasado el delay (líneas 15, 16 y 17).

### Nivel 3: front-end
src/functionThrottle_nivel3.ts
Throttle.html (vinculado al js que está transpilado de functionThrottle_nivel3.ts, y que se situa en la carpeta dist)

- Hay un botón "Say Hello" vinculado a la función throttleGreet() que imprime el mensaje "Hello with throttle!" cuando hacemos click.
- Aparece enseguida la primera vez.
- Si seguimos haciendo click, los otros mensajes aparecen con 1000 ms (1 segundo) de intervalo.
- Se puede comprobar en la consola también.
