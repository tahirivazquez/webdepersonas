# webdepersonas
Actividad corresondiente a la semana 13 de Fase 2 (JAP).
JSON de personas creado: https://raw.githubusercontent.com/tahirivazquez/jsonpeople/main/db.json

**Objetivo:** En esta actividad, les propongo crear una web de personas (generadas de manera random), que diga donde viven y un número de teléfono. La web permitirá alternar entre el "Modo Día" y el "Modo Noche" utilizando JavaScript y guardarán la preferencia en localStorage.


**Pasos a Seguir:**

Interfaz de Usuario (HTML/CSS):

- Crearemos una interfaz de usuario que mostrará una lista de personas y un buscador, para poder saber quienes tienen datos en común.

- Agregaremos un botón llamado "Modo Día/Noche" que les permitirá alternar entre los modos.

- Utilizaremos CSS para dar estilo a la interfaz de usuario en ambos modos: "Día" y "Noche".

 

**JavaScript para Cargar Personas:**

- Primero tenemos que conseguir un JSON de “personas”, las crearemos aquí: https://generatedata.com/. 

- Crearemos un servidor JSON, los pasos se encuentran aquí: https://my-json-server.typicode.com/ (en caso de que no les funcione prueben en https://www.npoint.io/).

- Allí subiremos las personas que obtuvimos previamente .

- Programaremos una función (la misma deberá usar un fetch Await)

- Mostraremos las personas en la interfaz de usuario cuando cargue la página.

- El buscador recibirá algún dato que coincida con lo que tenemos en nuestro JSON.

 

**Funcionalidad de Cambio de Modo:**

- Implementaremos JavaScript para alternar entre los modos "Día" y "Noche" cuando presionen el botón "Modo Día/Noche".

- Cambiaremos el fondo, los colores y los estilos de la interfaz de usuario según el modo seleccionado.

  

**Uso de localStorage:**

- Utilizaremos localStorage para guardar su preferencia de modo.

- Cuando vuelvan a abrir la aplicación, verificaremos localStorage para establecer el modo inicial.

 

Luego, si queda tiempo:

Vamos a ponerle foto a los usuarios:  https://xsgames.co/randomusers/
