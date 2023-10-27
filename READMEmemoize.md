# Sprint 2
https://github.com/solida29/sprint_2

## Entrega 2.3: Funció memoize

### Descripció
La funció memoize permet optimitzar el rendiment en funcions que tenen una gran complexitat computacional o s'executen amb freqüència. Consisteix a guardar en una memòria cau (caché) els resultats de les crides anteriors i els associa amb els valors d'entrada corresponents. 

Quan la mateixa funció s'invoca amb els mateixos valors d'entrada, en lloc d'executar tota la lògica de la funció, es comprova primer si ja existeix un resultat emmagatzemat per a aquells valors i es retorna directament. Això estalvia temps de càlcul i millora el rendiment de la funció.

En aquesta tasca has d'implementar una funció memoize. La funció ha de ser implementada utilitzant TypeScript i TDD.

### Nivell 1
Implementa una funció memoize.
Fes servir tests per comprovar la funcionalitat de la funció memoize.

### Nivell 2
Crea una CLI per comprovar la funcionalitat de la funció memoize.

### Nivell 3
Crea un front-end per comprovar la funcionalitat de la funció memoize.

### Objectius
Aprendre i practicar conceptes clau de JavaScript com ara funcions de retorn, closures, temporitzadors, objectes i mètodes, així com el maneig de comportament asíncron.

### Durada: 3 dies

### Lliurament
- Crea un sol repositori per a l'exercici, i envia l'URL perquè sigui revisat.
- Fes servir com a soport el README.md per escriure les indicacions per executar els scripts.
- Fes ús de CI (Integració Continua) amb GitHub actions.

<hr>

### functionMemoize.ts
Está en la carpeta src.

He hecho una función memoize para una function que permite calcular un número num al cuadrado.

- Se almamcenan los resultados en la memoria cache, que es un array. La posición en el array coincide con num.

- Primero se busca si en la posición num existe un resultado o no con: <br>
cache.hasOwnProperty(num)

- Si existe, devuelve el resultado guardado en cache.

- Si no, hace el calculo, lo almacena en cache y devuelve el resultado.

### Nivel 1: TDD
scr/__tests__/functionMemoize.test.ts

El test se hace con num = 4.
- Se espera primero el resultado de 4 al cuadrado = 16.
- Después se pide el resultado por la posición en cache.
- El último test se pide el resultado de la posición 0 en el array que todavía no existe, y es undefined.

### Nivel 2: CLI
...

### Nivel 3: front-end
...