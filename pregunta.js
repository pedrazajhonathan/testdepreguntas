       
        
        let preguntas_bajo = [
            {
                pregunta : "para que funciona el lenguaje de programacion",
                respuesta : "para resolver problemas o diseñar sofware",
                respuesta_incorrecta1 : "para jugar",
                respuesta_incorrecta2 : "para bailar",
                respuesta_incorrecta3 : "para hackearle el facebook a tu amiga",
            },
            {
                pregunta : "cual es el resultado de 1 + 1 en un lenguaje",
                respuesta : "2",
                respuesta_incorrecta1 : "error",
                respuesta_incorrecta2 : "4",
                respuesta_incorrecta3 : "ninguna de las anteriores",
            },
            {
                pregunta : "que significa las siglas poo",
                respuesta : "programacion orientada a objetos",
                respuesta_incorrecta1 : "pagina obsoleta a orrores",
                respuesta_incorrecta2 : "no significa nada",
                respuesta_incorrecta3 : "patron ordenado de objetos",
            },
            {
                pregunta : "que es un arreglo",
                respuesta : "una variable que puede almacenar varios elementos a la vez",
                respuesta_incorrecta1 : "un elemento",
                respuesta_incorrecta2 : "un string",
                respuesta_incorrecta3 : "un bucle",
            },
            {
                pregunta : "que es un string",
                respuesta : "es una cadena de texto",
                respuesta_incorrecta1 : "son letras",
                respuesta_incorrecta2 : "son palabras",
                respuesta_incorrecta3 : "son preguntas",
            },
            {
                pregunta : "que es una funcion",
                respuesta : "es un bloque de codigo reutilizable que hace una tarea en especifico",
                respuesta_incorrecta1 : "funciona para hacer solo una cosa",
                respuesta_incorrecta2 : "se usa para recorrer objetos",
                respuesta_incorrecta3 : "es un bloque de codigo nada mas...",
            },
            {
                pregunta : "que es un algoritmo",
                respuesta : "es una serie de pasos para resolver un problema",
                respuesta_incorrecta1 : "es una funcion flecha",
                respuesta_incorrecta2 : "un bloque de codigo",
                respuesta_incorrecta3 : "lo que utilizan los hackers",
            },
        ]
        
        let preguntas_medio = [
            {
                pregunta : "cual es el valor de true en un lenguaje de programacion",
                respuesta : "1",
                respuesta_incorrecta1 : "0",
                respuesta_incorrecta2 : "2",
                respuesta_incorrecta3 : "10",
                img: "assets/monalisa.jpg",
            },
            {
                pregunta : "cuales son las caracteristicas de la programacion orientada a objetos",
                respuesta : "herencia ,encapsulamiento ,abstraccion, polimorfismo",
                respuesta_incorrecta1 : "true , false",
                respuesta_incorrecta2 : "if , else",
                respuesta_incorrecta3 : "for , while y do while",
                img: "assets/monalisa.jpg",
            },
            {
                pregunta : "cuales son las bases de la programacion orientada a objetos",
                respuesta : "objetos , clases , atributos , metodos",
                respuesta_incorrecta1 : "objetos , condicionales y bucles",
                respuesta_incorrecta2 : "bucles y sentencias",
                respuesta_incorrecta3 : "claslist , type of , instance of",
                img: "assets/monalisa.jpg",
            },
            {
                pregunta : "cual es la forma correcta de recibir una promesa de una API en una funcion ",
                respuesta : "async y await",
                respuesta_incorrecta1 : " then y cacth",
                respuesta_incorrecta2 : "this y exec",
                respuesta_incorrecta3 : "thes y search",
                img: "assets/monalisa.jpg",
            },
            {
                pregunta : "cual es el lenguaje que se utiliza para machine learning e inteligencia artificial",
                respuesta : "Python",
                respuesta_incorrecta1 : "go",
                respuesta_incorrecta2 : "php",
                respuesta_incorrecta3 : "javascript",
            },
            {
                pregunta : "cual es el lenguaje de programacion que se utiliza con html y css",
                respuesta : "javascript",
                respuesta_incorrecta1 : "python",
                respuesta_incorrecta2 : "c++",
                respuesta_incorrecta3 : "java",
                img: "assets/lenguajes.jpg"
            },
            {
                pregunta : "cual es el lenguaje mas utilizado para crear bases de datos",
                respuesta : "SQL",
                respuesta_incorrecta1 : "Python",
                respuesta_incorrecta2 : "C#",
                respuesta_incorrecta3 : "Ruby",
            },
            {
                pregunta : "cuales son los operadores logicos",
                respuesta : "AND , OR , NOT",
                respuesta_incorrecta1 : "if , else",
                respuesta_incorrecta2 : "true , false",
                respuesta_incorrecta3 : "string",
                img: "assets/programacion.jpeg"
            },
            {
                pregunta : "cuanto es 5 + 5 x 9",
                respuesta : "50",
                respuesta_incorrecta1 : "45",
                respuesta_incorrecta2 : "55",
                respuesta_incorrecta3 : "90",
                img: "assets/matematica.jpg"
            },
            {
                pregunta : "cual es la etiqueta que se utiliza en html para crear parrafos",
                respuesta : "<p>",
                respuesta_incorrecta1 : "<span>",
                respuesta_incorrecta2 : "<h1>",
                respuesta_incorrecta3 : "<div>",
                img: "assets/rio.jpeg"
            },
            {
                pregunta : "como se puede imprimir en consola 'hola mundo' en el lenguaje de javascirpt",
                respuesta : "console.log('hola mundo')",
                respuesta_incorrecta1 : "alert('hola mundo')",
                respuesta_incorrecta2 : "promp('hola mundo')",
                respuesta_incorrecta3 : "print('hola mundo')",
            },
            {
                pregunta : "cual es el bucle que se repite solo cuando se cumple la condicion",
                respuesta : "while",
                respuesta_incorrecta1 : "for",
                respuesta_incorrecta2 : "forin",
                respuesta_incorrecta3 : "forof",
            },
            {
                pregunta : "con que bucle se recorren los objetos en javascript",
                respuesta : "forin",
                respuesta_incorrecta1 : "for",
                respuesta_incorrecta2 : "foreach",
                respuesta_incorrecta3 : "forof",
            },
        ]

        let preguntas_alto = [
            {
                pregunta : "que tipo de datos son las funciones en javascript",
                respuesta : "de tipo objeto",
                respuesta_incorrecta1 : "de tipo entero",
                respuesta_incorrecta2 : "de tipo booleano",
                respuesta_incorrecta3 : "de tipo string",
            }, 
            {
                pregunta : "cual es la caracteristica de la poo donde se puede usar un metodo en varias subclases",
                respuesta : "polimorfismo",
                respuesta_incorrecta1 : "abstraccion",
                respuesta_incorrecta2 : "encapsulamiento",
                respuesta_incorrecta3 : "static",
            }, 
            {
                pregunta : "como se llama el elemento que permite que dos sistemas se conecten entre si",
                respuesta : "API",
                respuesta_incorrecta1 : "poo",
                respuesta_incorrecta2 : "type of",
                respuesta_incorrecta3 : "programacion estructurada",
            }, 
            {
                pregunta : "cual es el elemento que permite mostrar el tipo de dato de una variable",
                respuesta : "type of",
                respuesta_incorrecta1 : "instance of",
                respuesta_incorrecta2 : "forin",
                respuesta_incorrecta3 : "search",
            }, 
            {
                pregunta : "que elemento se utiliza en javascript para usar APIS",
                respuesta : "fetch",
                respuesta_incorrecta1 : "try",
                respuesta_incorrecta2 : "else if",
                respuesta_incorrecta3 : "Number",
            }, 
        ] 

        let arreglo = [preguntas_bajo , preguntas_medio , preguntas_alto]

        let pregunta_completa

        function elejir(i){
            pregunta_completa = arreglo[i]
            let container = document.getElementById("container")
            container.classList.add("listo")
            pregunta_aleatoria()
        }

        let pregunta = document.getElementById("pregunta")
        let botom1 = document.getElementById("botom1")
        let botom2 = document.getElementById("botom2")
        let botom3 = document.getElementById("botom3")
        let botom4 = document.getElementById("botom4")
        let pregunta_lista
        let cambiar_pregunta
        let puntos = document.getElementById("punto")
        let punto = 0

       

        function pregunta_aleatoria(){
            let random = Math.floor(Math.random() * pregunta_completa.length)
            pregunta_lista = pregunta_completa[random]

            
            pregunta.textContent = `oye ${pregunta_lista.pregunta}`
           

            let arreglo_pregunta = [
                pregunta_lista.respuesta,
                pregunta_lista.respuesta_incorrecta1,
                pregunta_lista.respuesta_incorrecta2,
                pregunta_lista.respuesta_incorrecta3
            ]

            cambiar_pregunta = arreglo_pregunta.sort(()=>Math.random()- 0.5)

            botom1.textContent = cambiar_pregunta[0]
            botom2.textContent = cambiar_pregunta[1]
            botom3.textContent = cambiar_pregunta[2]
            botom4.textContent = cambiar_pregunta[3]

            puntos.textContent = punto
            
        }
     

        let botones = [botom1,botom2,botom3,botom4]

        function mostrar(i){
            if(cambiar_pregunta[i] == pregunta_lista.respuesta){
                botones[i].style.boxShadow = '0 0 10px green'
                setTimeout(() => {
                    pregunta_aleatoria()
                    cambiar_color()
                    if(punto == 10){
                        ganador()
                    }
                }, 1000);
                punto ++
            }else{
                botones[i].style.boxShadow = '0 0 10px red'
                setTimeout(() => {
                    cambiar_color()
                    error()
                }, 1000);
            }
        }
        
        function cambiar_color(){
            botones.forEach(botom => {
                botom.style.boxShadow = '0 0 10px #fff'
            })
        }

        function error(){     
            alert(`lo siento perdiste :) , actualiza la pagina para jugar de nuevo`)
        }

        function ganador(){
                alert(`felicidades has ganado el test de pregunta y tienes un conocimiento basico sobre la programacion`)
                punto = 0
                puntos.textContent = 0          
        }