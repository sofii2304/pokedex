# pokedex
Al principio pense que era mas sencillo hacer div por div, osea 150, demasiado tiempo gaste en eso, pero despues me di cuenta que era menos complicado.

1.contenedor de empuje constante=document.getElementById('contenedor-poke')
Este código obtiene el elemento del DOM con el id "poke-container" y lo asigna a la variable poke container Este elemento es donde se mostrarán los Pokémon.

2.const pokemon_count 150: Esta línea establece el número de Pokémon que se mostrarán en total. En este caso, se mostrarán los primeros 150 Pokémon.

3.const colors :Este objeto contiene los colores asociados a cada tipo de Pokémon. Cada tipo de Pokémon tiene un color específico que se utiliza para resaltar los Pokémon en la página.

4.tipos principales constantes = Object.keys (colores)Esta línea obtiene los tipos de Pokémon del objeto colors y los guarda en un array llamado main types

5.const fetchPokemons async ()-> (...):Esta función utiliza la función fetch de JavaScript para obtener los datos de cada Pokémon de la API de PokeAPI. La función fetchPokemons es asíncrona y utiliza un bucle for para obtener los datos de cada Pokémon del 1 al 150.
