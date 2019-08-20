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

Nuestro diseñador propuso el siguiente mock-up para la lista de actividades. Los colores pretenden resaltar la jerarquía de la información, más no es una plantilla pre-definida.

La misión es implementar este mockup según el diseño propuesto por el equipo de diseño. Cabe resaltar que al ser un mockup, no necesariamente refleja 100% lo que sería un producto terminado.

[mockup](https://raw.githubusercontent.com/lstaleroc/xavy-app/master/assets/lista.png)


#### Punto 2

Partiendo del punto anterior, queremos realizar la implementación del botón `Ver más` presentado en el mockup del punto uno.

Al dar clic en este botón, la aplicación debe navegar a una nueva pantalla del **detalle** de la película seleccionada.

En esta nueva vista se debe realizar un `query` al endpoint `Film`, y traer la información:

- title
- releaseDate
- director
- isReleased

Y exponerla en la pantalla como texto (el estilo se hará en el punto siguiente)

#### Punto 3

Una vez conectada la nueva vista al `query` la idea es presentar de una forma atractiva la información de una película (`Film`) y las especies (`Species`) que aparecen en ella.

Este punto tiene dos partes:

1.  Consulta la documentación del tipo `Species` en https://swapi.graph.cool/. De los atributos de este tipo, escoje aquellos que te parezcan más relevantes para mostrárselos a nuestros usuarios e inclúyelos en el QUERY.

2.  Implementa un diseño de la vista de la película donde se pueda distinguir la información básica y las distintas especies que aparecen en ella.
