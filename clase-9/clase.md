#Clase 9

> TESTING y REG EXP

1. **Testing**
    Testing es la serie de pruebas que se realizan en nuestro código. 
    
    - Testing Unitario: es el subconjunto de pruebas que realizamos en nuestro software, esto sirve para que asegurar que el código funcione correctamente por separado.
    - TDD (Test drive development): en una metodologia de desarrollo que en vez de realizar las pruebas despues, las hacemos antes.


    **Framework de Testing:**
    - Mocha: Es un framework que me permite realizar pruebas unitarias en JS. Se instala por NPM de manera local en el proyecto.

     ```language
        describe("wadus", function() {
            it("recibe 2 params", function(callback) {
                // Test code
                callback();
            });
        });     
     ```

    - Chai: es una librería de aserciones similar al de Node.js simplifica el test proporcionando muchas aserciones con las que probar el código.

2. **REGEX Expresiones Regulares**
    Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto.

