# Prueba técnica

El objetivo de esta prueba es desarrollar una aplicación en React Native que consulta un endpoint público en GraphQL de películas de Star Wars.

Con este ejercicio queremos validar la capacidad de enfrentarse ante unos requerimientos técnicos expuestos en lenguaje natural y trasladarlos a un desarrollo tecnológico.

## Setup

### Prerequisitos

Tener instalado Node.js en el ambiente de desarrollo. [link](https://nodejs.org/en/)

Tener instalada la herramienta `expo-cli`. [Instrucciones](https://docs.expo.io/versions/v34.0.0/introduction/installation/).

Tener una de las siguientes dos formas de ejecutar la aplicación de expo en ambiente de desarrollo:

- Instalar el cliente de expo en un teléfono Android o iOS
- Ejecutar un emulador de teléfono móvil via Android Studio o XCode.

### Instrucciones

Para empezar a trabajar el ejercicio haz un fork de este repositorio en tu cuenta de github como se indica en este [link](https://help.github.com/en/articles/fork-a-repo#fork-an-example-repository)

Instala las dependencias del proyecto con el comando `yarn install`

Ejecuta el servidor de aplicaciones con `expo start`

Abre la aplicación en tu teléfono o en un emulador.

### Enunciado

Analizando las últimas encuestas de servicio al cliente, hemos notado una correlación entre los usuarios más recurrentes de Savy el gusto por las películas de ciencia ficción. Por lo tanto hemos decidido desarrollar una aplicación móvil que permita a las personas tener acceso a toda la información del universo Star Wars en su bolsillo.

La aplicación se encuentra en una etapa temprana de desarrollo. Únicamente está configurada la navegación a la primera pantalla y la conexión a la API de GraphQL de Star Wars la cuál se puede consultar en este [link](https://swapi.graph.cool/).

#### Punto 1

Inicialmente queremos que la entrada a la aplicación sea una lista de todas las películas disponibles en el API. Para esto, tenemos la siguiente especificación de nuestro equipo de UX:

Los elementos más importantes de una película, son los siguientes:

- Título
- Director
- Productores
- Fecha de lanzamiento

Nuestro diseñador propuso el siguiente mock-up para la lista de actividades.

Según la especificación de nuestro equipo de UX, la información más relevante
