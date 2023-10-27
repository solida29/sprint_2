# Srpint 2: Debounce, Throttle y Memoize

## Entrega 2.1: Funció Debounce

### Descripció
Una funció debounce és una tècnica per controlar la freqüència d'execució d'una funció en resposta a esdeveniments com ara clics, desplaçaments o altres accions de l'usuari. L'objectiu d'aquesta funció és evitar que s'executi massa ràpida i repetidament, sobretot quan els esdeveniments es produeixen amb molta freqüència. 

Bàsicament, la funció debounce retarda l'execució fins que ha transcorregut un cert temps sense que es produeixi cap altre esdeveniment. 

En aquesta tasca has d'implementar una funció debounce. La funció ha de ser implementada utilitzant TypeScript i TDD.

### Nivell 1
Fes servir tests per comprovar la funcionalitat de la funció debounce.

### Nivell 2
Crea una CLI per comprovar la funcionalitat de la funció debounce.

### Nivell 3
Crea un front-end per comprovar la funcionalitat de la funció debounce.

### Objectius
Aprendre i practicar conceptes clau de JavaScript com ara funcions de retorn, closures, temporitzadors, objectes i mètodes, així com el maneig de comportament asíncron.

### Durada: 3 dies

### Lliurament
- Crea un sol repositori per a l'exercici, i envia l'URL perquè sigui revisat.
- Fes servir com a soport el README.md per escriure les indicacions per executar els scripts.
- Fes ús de CI (Integració Continua) amb GitHub actions.

<hr>

### functionDebounce.ts
La función debounce devuelve el callback con un tiempo de espera (delay). Es un función génerica.

- La variable timer (línea 2) permite almacenar el tiempo pasado desde la llamada de la función callback.
- Se limpia cada vez que llamamos a la función Debounce para evitar que el callback se ejecute, con el clearTimeout(timer) línea 5.
- Línea 6, el timer se vuelve a iniciar con un setTimeout, de tal manera que se ejecutará el callback después del tiempo elegido (delay).

### Nivel 1: TDD
src/__tests__/functionDebounce.test.ts

- Primer test con Mock: paso el primer test con un callback mock, primero cuando llamamos la función a través del Debounce, no se funciona inmediatamente, pero después de 1000 ms de delay.

- Segundo test con una función sayHello que devuelve un string "Hello World". Lo mismo que con el mock. Cuando se llama la función (línea 19), no se ejecuta enseguida (línea 20), hay que esperar que pase el delay de 1000 ms o 1 segundo (línea 21 con jest.advanceTimersByTime(1000);) para que se ejecute. Lo que nos da el resultado línea 22: la función se ha ejecutado 1 vez.

### Nivel 2: CLI
...

### Nivel 3: front-end
src/functionDebounce_nivel3.ts
Debounce.html (vinculado al js que está transpilado de functionDebounce_nivel3.ts, y que se situa en la carpeta dist)

- Hay un botón "Say Hello" vinculado a la función debounceGreet() que imprime el mensaje "Hello with debounce!" cuando hacemos click.
- Aparece con un debounce 1000 ms.
- Se puede comprobar en la consola también.

<hr>

## Entrega 2.2: Funció Throttle
