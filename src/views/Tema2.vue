<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Entornos de desarrollo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/t2/f1.svg', alt='')
      .col-lg-9
        p En el mundo del 
          em software 
          | y la tecnología, un entorno de desarrollo integrado (IDE) por sus siglas en inglés 
          em Integrated Development Environment
          | , es una herramienta informática que proporciona servicios integrales para facilitar al programador el desarrollo de software a través de un conjunto de procedimientos y aplicaciones que sirven para codificar, integrar, testear, validar, depurar y ejecutar programas.
        p Es decir, un entorno de desarrollo integrado es un espacio de trabajo en el que se puede llevar a cabo la gestión del desarrollo de 
          em software 
          | en todas sus etapas hasta que se implemente una versión real.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .fcac50.p-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          p: b    ¡Importante! 
          p El concepto de «lenguaje de 
            em scripting
            | » se ha transformado ampliamente desde su creación, porque hoy en día Python es usado para desarrollar, de manera rápida, aplicaciones en diversos sectores, especialmente en las plataformas y apps.
          p.mb-0 Es un interpretador de instrucciones que permite usar un lenguaje en forma recíproca, es decir, permite trabajar de manera interactiva en una ventana, y además, a través de programas que pueden desarrollarse y ensayar a medida que son construidos. Cuenta con implícitas estructuras de datos eficientes como conjuntos, diccionarios, listas y tuplas, con un enfoque simple, pero muy eficiente que permiten llevar a cabo múltiples tareas en pocas líneas de código y de manera legible.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/t2/f2.svg', alt='')

    p A continuación, se presentan las funciones y usos de Python 

    .col-md-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 1
        br
        em Funciones y usos de Python
      ImagenInfograficaB.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t2/f3.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center(x="25%" y="92%" tooltip="" numero="A")
          .col-lg-2.col-md-3.col-8
            figure
              img(src='@/assets/curso/temas/t2/f4.svg', alt='')
          .col-lg-10.col-md-9.col-12
            p: b ¿Para qué sirve?
            p Su objetivo principal es la automatización de procesos, permitir que las tareas sean más simples a través de la creación de códigos legibles que ahorran recursos y en especial tiempo. Uno de sus puntos más fuertes es que logra “comprobar los errores sobre la marcha” para ser solucionados cuando se afecta a la memoria, lo que mantiene la integridad de la matriz y evita dificultades a la hora de escribir el código.
        .row.justify-content-center.align-items-center(x="20%" y="20%" tooltip="" numero="B")
          .col-lg-2.col-md-3.col-8
            figure
              img(src='@/assets/curso/temas/t2/f5.svg', alt='')
          .col-lg-10.col-md-9.col-12
            p: b ¿Dónde se utiliza?
            p Al ser un lenguaje de propósito general, se puede utilizar en diferentes campos para análisis de datos, crear aplicaciones de escritorios, bases de datos relacionales, NoSQL, criptomonedas, desarrollo de aplicaciones multimedia, desarrollo de videojuegos, desarrollo móvil y desarrollo 
              em web
              | , prototipado de 
              em software
              | , etc. 
        .row.justify-content-center.align-items-center(x="20%" y="20%" tooltip="" numero="C")
          .col-lg-2.col-md-3.col-8
            figure
              img(src='@/assets/curso/temas/t2/f6.svg', alt='')
          .col-lg-10.col-md-9.col-12
            p: b ¿Cómo funciona?
            p El intérprete de 
              em Python 
              | maneja módulos de código que son intercambiables en lugar de una extensa lista de sentencias de códigos estándar para los lenguajes de programación funcional.
            p Realizando los siguientes pasos:
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                | Paso 1: el intérprete lee un código o instrucción, verifica y comprueba la sintaxis de cada línea; si encuentra un error, detiene la traducción y muestra un mensaje de error.
              li
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0  Paso 2: si no presenta errores, el intérprete lo traduce a un lenguaje intermedio llamado código 
                  em byte. 
              li
                .lista-ol--cuadro__vineta
                  span c
                p.mb-0  Paso 3: el código del 
                  em byte 
                  | se envía a la máquina virtual 
                  em Python
                  | , donde de nuevo se ejecuta el código del byte en PVM. Si se produce un error durante esta ejecución, ésta se detiene con un mensaje de error.
        .row.justify-content-center.align-items-center(x="20%" y="20%" tooltip="" numero="D")
          .col-lg-2.col-md-3.col-8
            figure
              img(src='@/assets/curso/temas/t2/f7.svg', alt='')
          .col-lg-10.col-md-9.col-12
            p: b Características del lenguaje.
            p Python se caracteriza especialmente en:
            ul.lista-ul--color
              li
                i.fas.fa-circle
                | Es un lenguaje interpretado
              li
                i.fas.fa-circle
                | Lenguaje sencillo, legible y elegante
              li
                i.fas.fa-circle
                | Sintaxis simple, clara y sencilla
              li
                i.fas.fa-circle
                | Tiene tipado dinámico
              li
                i.fas.fa-circle
                | Es fuertemente tipado
              li
                i.fas.fa-circle
                | Es multiplataforma
              li
                i.fas.fa-circle
                | Permite llevar a cabo aplicaciones de manera práctica y rápida
              li
                i.fas.fa-circle
                | Soporta programación imperativa, orientada a objetos y funcional
            p Su objetivo principal es aumentar la legibilidad y la facilidad de desarrollo.
        .row.justify-content-center.align-items-center(x="20%" y="20%" tooltip="" numero="E")
          .col-lg-2.col-md-3.col-8
            figure
              img(src='@/assets/curso/temas/t2/f8.svg', alt='')
          .col-lg-10.col-md-9.col-12
            p: b Características del lenguaje 
              em Python.
            ul.lista-ul--color
              li
                i.fas.fa-circle
                p.mb-0 
                  b Es Interpretado: 
                  | el código del programador es traducido mediante un intérprete a medida que lo necesite. 
              li
                i.fas.fa-circle
                p.mb-0 
                  b Multiparadigma: 
                  | soporta más de un paradigma.
              li
                i.fas.fa-circle
                p.mb-0 
                  b Tipo dinámico: 
                  | permite la transformación de variables.
              li
                i.fas.fa-circle
                p.mb-0 
                  b Multiplataforma: 
                  | se puede trabajar en cualquier sistema operativo.
        .row.justify-content-center.align-items-center(x="20%" y="20%" tooltip="" numero="F")
          .col-lg-2.col-md-3.col-8
            figure
              img(src='@/assets/curso/temas/t2/f9.svg', alt='')
          .col-lg-10.col-md-9.col-12
            p: b Ejemplo de empresas a nivel mundial que son un caso de éxito con el uso de Python:
            p 
              em Google, Netflix, YouTube, Dropbox, Spotify, Yahoo!, la NASA, PayPal, Prezi, Instagram 
              | y muchas más.

      .p-4.fcs15
        .border2
          p: b Importante
          p.mb-0 Se debe tener en cuenta que 
            em Python 
            | no es adecuado para la programación de bajo nivel.

    p Instalación de 
      em Python en 
      | Windows: para instalar 
      em Python 
      | en un equipo con el sistema operativo Windows se debe realizar los siguientes pasos:	

    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t2/f10.png', alt='')
      .col-lg-7
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Paso 1") 
            | Ir a la página de descargas para Windows del sitio oficial y descargar la versión adecuada del instalador ejecutable de Python.
          p.text-small(numero="2" titulo="Paso 2") 
            | Realizar la instalación haciendo doble clic sobre el archivo ejecutable descargado para lo cual es necesario tener permisos de Administrador del equipo.
          p.text-small(numero="3" titulo="Paso 3") 
            | Una vez iniciado el instalador, en la ventana 
            em Install Python 
            | se debe activar las casillas de las opciones: 
            em Install launcher for all users (recommended) 
            | y 
            em Add Python to PATH
            | . Después, seleccione la opción 
            em Customize installation.
          p.text-small(numero="4" titulo="Paso 4") 
            | En la ventana optional features seleccione todas las opciones y hacer clic en el botón 
            em [Next].
          p.text-small(numero="5" titulo="Paso 5") 
            | En la ventana 
            em advanced options 
            | activar todas las opciones, aceptar la ruta dada por defecto o escribir una ruta personalizada del directorio de instalación e iniciar la instalación haciendo clic en el botón 
            em [Install].
          p.text-small(numero="6" titulo="Paso 6") 
            | Esperar unos segundos y comenzará el proceso de instalación de 
            em Python.
          p.text-small(numero="7" titulo="Paso 7") 
            | Al finalizar la instalación debe aparecer una ventana con el mensaje 
            em setup was successful. 
            | En esta ventana se puede acceder a un tutorial online, a la documentación oficial de 
            em Python 
            | y a información adicional de las novedades de la versión instalada.
          p.text-small(numero="8" titulo="Paso 8") 
            | Posteriormente se podrá instalar cualquier paquete adicional utilizando el instalador PIP.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        h3.titulo-tercero(data-aos='fade-right')
          i.fas.fa-square.cac.me-2 
          | Un ejemplo introductorio desarrollado en modo interactivo
        p Para iniciar el aprendizaje del lenguaje 
          em Python
          | , en esta sección se desarrolla un ejemplo en forma interactiva en la ventana principal o shell. Se recomienda que el aprendiz realice esta práctica en la computadora.
        .cajon.color-acento-botones.p-4.mb-4
          p Solución en modo interactivo en la ventana principal o  
            em shell 
            | de 
            em Python.
          p.mb-0 Para iniciar el entorno interactivo de 
            em Python 
            | se debe escribir 
            em Python 
            | desde la línea de comando o símbolo del sistema, en el cual puede escribir instrucciones de 
            em Python.
            |  Al inicio de las siguientes líneas se muestra un aviso para escribir cada instrucción. Este aviso son tres ángulos como estos: &gt;&gt;&gt;
        p En esta ventana escriba cada instrucción a la derecha del símbolo >>> 
        p Al final de cada línea presione la tecla Enter. Siga el ejemplo que se muestra a continuación:
        .col-md-9.mx-auto
          .fcac50.p-4.p-4.mb-4(style="border-left: solid #FFB30B 5px")
            p &gt;&gt;&gt;
              em print
              | (&ldquo;&iexcl;Hola Mundo!&rdquo;)
            p &gt;&gt;&gt;&iexcl;Hola Mundo!
            p &gt;&gt;&gt;
              em print
              | (&ldquo;&iexcl;Mis primeras l&iacute;neas de c&oacute;digo en 
              em Python
              | !&rdquo;)
            p.mb-0
              | &gt;&gt;&gt;&iexcl;Mis primeras l&iacute;neas de c&oacute;digo en 
              em Python
              | !
        p En el anterior ejemplo, se ordena visualizar primero un mensaje con las palabras: &iexcl;Hola Mundo! y en la siguiente l&iacute;nea tambi&eacute;n se visualiza el mensaje: &iexcl;mis primeras l&iacute;neas de c&oacute;digo en 
          em Python
          | !
        p El mismo ejemplo se debe resolver posteriormente escribiendo un programa en una ventana de edici&oacute;n de 
          em Python
          | . Esta pr&aacute;ctica permitir&aacute; resaltar las diferencias entre el modo interactivo y el modo de programaci&oacute;n.

      .col-lg-4.tarjeta.p-3.order-first.order-lg-last(style="background-color: #B9DDFC", data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t2/f11.svg', alt='')

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cac.me-2 
      | Operadores de 
      em Python.

    p Son los símbolos utilizados para expresar las operaciones básicas en los programas, por ejemplo, hacer los cálculos matemáticos y la comparación de diferentes expresiones del código.

    .row.justify-content-center.mb-5
      .col-lg-1.col-md-2.col-6
        img(src='@/assets/curso/temas/t2/f12.svg', alt='')
      .col-lg-11.col-md-10.col-12
        p: b Los operadores se clasifican en:
        p 
          span.cuadro.fcac.text-white.me-2.px-1 a
          | Operadores aritméticos&emsp;
          span.cuadro.fcac.text-white.me-2.px-1 b
          | Operadores de comparación&emsp;
          span.cuadro.fcac.text-white.me-2.px-1 c
          | Operadores lógicos&emsp;
          span.cuadro.fcac.text-white.me-2.px-1 d
          | Operadores de asignación&emsp;

    TabsC.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Operadores aritméticos.")
        .row
          .col-md-6.mb-4.mb-md-0
            p Son los símbolos que se utilizan para escribir ecuaciones aritméticas. También se pueden usar los paréntesis para definir el orden de las operaciones. El resultado de estas operaciones siempre será numérico.
            p (+): es el operador para realizar la suma de dos o más valores.
            p (-): es el operador para realizar la resta de dos o más valores.
            p (*): este es el operador para realizar la multiplicación de dos o más valores en la ecuación.
            p (/): este es el operador para realizar la división de dos o más valores.
          .col-md-6
            img(src='@/assets/curso/temas/t2/tabla1.svg', alt='')
      .py-4.py-md-5(titulo="Operadores relacionales o de comparación")
        .row
          .col-md-6.mb-4.mb-md-0
            p Estos símbolos son utilizados para escribir expresiones de comparación entre dos o más valores. El resultado siempre será un valor lógico o booleano (True o False).
            p (==): evaluar si dos valores son iguales
            p (! =): evaluar si dos valores son diferentes
            p (&lt;): evaluar si el valor del lado izquierdo de la expresi&oacute;n es menor que el valor que est&aacute; en el lado derecho.
            p (&gt;): evaluar si el valor del lado izquierdo de la expresi&oacute;n es mayor que el valor que est&aacute; en el lado derecho.
            p (&lt;=): evaluar si el valor del lado izquierdo de la expresi&oacute;n es menor o igual que el valor que est&aacute; en el lado derecho.
            p (&gt; =): evaluar si el valor del lado izquierdo de la expresi&oacute;n es mayor o igual que el valor que est&aacute; en el lado derecho.
          .col-md-6
            img(src='@/assets/curso/temas/t2/tabla2.svg', alt='')
      .py-4.py-md-5(titulo="Los operadores lógicos")
        .row
          .col-md-6.mb-4.mb-md-0
            p Estos operadores se utilizan para evaluar el resultado de dos o m&aacute;s expresiones. El resultado ser&aacute; siempre un valor booleano (
              em True o False
              | ).
            p Los tres principales operadores l&oacute;gicos son: 
              strong
                em And, Or y Not
              | .
            p
              em And
              | : se utiliza entre dos o m&aacute;s expresiones y su resultado ser&aacute; verdadero si sus expresiones son verdaderas.
            p
              em Or:
              |  se utiliza entre dos o m&aacute;s expresiones y su resultado ser&aacute; verdadero si una de sus expresiones es verdadera.
            p
              em Not
              | : es la negaci&oacute;n de una expresi&oacute;n.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f13.svg', alt='')
      .py-4.py-md-5(titulo="Operadores de Asignación")
        .row
          .col-md-6.mb-4.mb-md-0 
            p Estos operadores permiten realizar una operación y guardar su resultado en la misma variable.
            img(src='@/assets/curso/temas/t2/tabla3.svg', alt='')
          .col-md-6 
            p: b Ejemplos de operadores de asignación
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 2
              br
              em Ejemplo de operadores de asignación 
            img(src='@/assets/curso/temas/t2/tabla4.svg', alt='')
      .py-4.py-md-5(titulo="Operadores especiales")
        .row
          .col-md-6.mb-4.mb-md-0
            p Existen otros tipos de operadores, a continuaci&oacute;n, los 2 m&aacute;s usados de esta categor&iacute;a:
            p Operador de inclusi&oacute;n 
              em in o not in.
            p Este operador eval&uacute;a si un valor est&aacute; incluido o no en una colecci&oacute;n de datos. Ejemplo:
            p
              em &apos;o&apos; in &apos;Python&apos; #Resultado: True
            p
              em &apos;z&apos; in &apos;Python&apos; #Resultado: False
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f14.svg', alt='')
      .py-4.py-md-5(titulo="Operador de concatenación")
        .row
          .col-md-6.mb-4.mb-md-0
            p El operador + se puede usar para concatenar cadenas de texto o 
              em strings
              | . Cuando se concatenan cadenas, el resultado es una cadena compuesta por ambas cadenas. Ejemplo:
            p a=&apos;
              em Python
              |  &apos;
            p b=&apos;es un lenguaje de programaci&oacute;n&apos;
            p c=a + b
            p print(c) &nbsp;&nbsp; #Resultado: &apos;
              em Python
              |  es un lenguaje de programaci&oacute;n&apos;
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f15.svg', alt='')

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cac.me-2
      | Precedencia de operadores

    p Si en una expresión hay operadores de diferente tipo, primero se evalúan las operaciones aritméticas, luego las operaciones relacionales y finalmente las lógicas.
    p Los paréntesis se pueden usar para definir con claridad la precedencia de las operaciones.

    .col-md-10.mx-auto.mb-5
      .tarjeta.color-primario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/t2/f16.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Infografía
                p.text-small A continuación, las expresiones más comunes dentro de Python
              .col-auto.mb-3.mb-sm-0
                a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
                  span Descargar 
                  i.fas.fa-file-download

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Estructuras de control

    p Las estructuras de control son las encargadas de direccionar la secuencia o flujo de ejecución de las instrucciones de un algoritmo.
    p: b Las estructuras de control se dividen en tres categorías en función del orden de ejecución:

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-primario(text-small)
        .row(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                p.mb-0 
                  b De secuencia: 
                  | como su nombre lo indica, se ejecutan las instrucciones una seguida de la otra.
              li
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0 
                  b De selección o control condicional: 
                  | controlan si una sentencia o secuencia de sentencias se ejecutan. 
              li
                .lista-ol--cuadro__vineta
                  span c
                p.mb-0 
                  b De iteración o de control de ciclos: 
                  | se refiere a las instrucciones que se repiten.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f17.svg', alt='')
        .row(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            p Las estructuras de secuencias son la forma de solución más sencilla de resolver un problema en un programa, ya que las instrucciones son ejecutadas en un orden secuencial de arriba hacia abajo.
            p Por lo general, el proceso de una estructura secuencial tiene un comienzo, seguido por la sentencia número uno, luego la sentencia número dos, posteriormente la sentencia número tres, y así sucesivamente hasta llegar a la finalización del proceso.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f18.svg', alt='')
        .row(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            p Toda estructura secuencial de un programa se basa en 5 fases:
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                p.mb-0 
                  b Declaración de variables: 
                  | para utilizar una variable tanto en pseudocódigo como en diagrama de flujo, es necesario siempre declararla, es decir, indicarle al algoritmo que va a utilizar una variable.
              li
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0 
                  b Inicialización de variables: 
                  | es asignarle un valor a cada una de las variables dependiendo de su tipo de dato.
              li
                .lista-ol--cuadro__vineta
                  span c
                p.mb-0 
                  b Lectura de datos: 
                  | es el ingreso de datos que se realiza por medio de un dispositivo de entrada.
              li
                .lista-ol--cuadro__vineta
                  span d
                p.mb-0 
                  b Cálculos: 
                  | son las diferentes operaciones que se realizan con los datos de entrada.
              li
                .lista-ol--cuadro__vineta
                  span e
                p.mb-0 
                  b Salida: 
                  | es el resultado final de la estructura secuencial.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f19.svg', alt='')
        .row(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            p Ventajas de las estructuras secuenciales
            p Con este tipo de estructura, se tienen tenemos las siguientes ventajas:
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                | Los programas son más fáciles de crear
              li
                .lista-ol--cuadro__vineta
                  span b
                | Ayuda a entender visualmente la secuencia ordenada
              li
                .lista-ol--cuadro__vineta
                  span c
                | Es fácil identificar y corregir posibles errores
              li
                .lista-ol--cuadro__vineta
                  span d
                | Disminución de pruebas
              li
                .lista-ol--cuadro__vineta
                  span e
                | Mantiene condiciones específicas
              li
                .lista-ol--cuadro__vineta
                  span f
                | Permite la rápida corrección y modificación de las sentencias
              li
                .lista-ol--cuadro__vineta
                  span g
                | Reducción de tareas de mantenimiento
              li
                .lista-ol--cuadro__vineta
                  span h
                | Aumenta la producción del sistema
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f20.svg', alt='')
        .row(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            p Las estructuras de control condicional
            p Son las que manejan diferentes opciones de selecci&oacute;n dependiendo del resultado de una operaci&oacute;n booleana (siempre ser&aacute; un valor verdadero o falso), por ejemplo, una comparaci&oacute;n (x = y). Seg&uacute;n la expresi&oacute;n sea cierta o falsa, se lleva a cabo un c&oacute;digo u otro.
            p En el lenguaje 
              em Python
              |  existen los siguientes tipos de estructuras de control condicional:
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f21.svg', alt='')
        .row(titulo="Paso 6")
          .col-md-6.mb-4.mb-md-0
            p
              strong
                | Estructura condicional 
                em if
            p Son las que permiten evaluar si una o m&aacute;s condiciones se cumplen, para decidir qu&eacute; instrucciones se van a llevar a cabo. El resultado de la condici&oacute;n arroja un valor de solo dos posibilidades: verdadero (
              em True
              | ) o falso (
              em False
              | ).
            p El condicional 
              em if 
              | en el lenguaje de programaci&oacute;n 
              em Pytho
              | n maneja las siguientes estructuras:
            ol(style='list-style-type: lower-alpha;')
              li
                | La sintaxis de una sentencia 
                em if
                |  es la siguiente:
            p
              em if 
              | condici&oacute;n:
            p ejecutar c&oacute;digo si la condici&oacute;n es 
              em True
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f22.svg', alt='')
        .row(titulo="Paso 7")
          .col-md-6.mb-4.mb-md-0
            p b. La sintaxis de una sentencia 
              em if
              |  - else es la siguiente:
            p
              em if
              |  condici&oacute;n:
            p ejecutar c&oacute;digo si la condici&oacute;n es 
              em True
            p
              em else:
            p ejecutar c&oacute;digo si la condici&oacute;n es 
              em False
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f23.svg', alt='')
        .row(titulo="Paso 8")
          .col-md-6.mb-4.mb-md-0
            p c. La sintaxis de una sentencia 
              em if - elif - else
              |  es la siguiente:
            p
              em if
              |  primera_condicion:
            p ejecutar sentencia
            p
              em elif
              |  segunda_condicion:
            p ejecutar sentencia
            p
              em else:
            p ejecutar sentencia alternativa si todas las condiciones previas son evaluadas como 
              em False
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f24.svg', alt='')
        .row(titulo="Paso 9")
          .col-md-6.mb-4.mb-md-0
            p Las estructuras de control usan los siguientes tipos de datos: 
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                p.mb-0 
                  b Datos simples como son: 
                  | numéricos, alfanuméricos y lógicos
              li
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0 
                  b Datos estructurados como son: 
                  | arreglos, registros, archivos y apuntadores 
            p Las estructuras de control también manejan constantes y variables, las cuales pueden ser numéricas, alfanuméricas y lógicas, y por su trabajo, en acumulares y contadores.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f25.svg', alt='')

    separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Ciclos

    p Los ciclos también llamados bucles, son estructuras de control iterativas. Tal como su nombre lo indica, consiste en una forma de trabajar que permite llevar a cabo un pedazo del código varias veces.
    p: b A continuación, se presentan los tipos de ciclos o bucles: 

    .row.justify-content-center.mb-5
      .col-md-6
        img(src='@/assets/curso/temas/t2/f26.svg', alt='')
        .fcs15.p-4
          p
            | El ciclo 
            em for 
            | o bucle es una sentencia que agrupa un conjunto de instrucciones y es controlado por una variable normalmente llamada i (pero puede ser identificada con cualquier otra letra), de tipo entero cuyo valor va cambiando en cada iteraci&oacute;n.
          p
            | El lenguaje 
            em Python
            |  usa ciclos 
            em for 
            | para iterar sobre una lista de elementos, en otras palabras, los ciclos 
            em for
            |  iteran sobre estructuras de datos basadas en colecciones como listas, tuplas y/o diccionarios.
        .fcab17.p-4
          p
            | La sintaxis b&aacute;sica de un ciclo 
            em for
            |  es la siguiente:
          p
            em For
            |  valor in lista_de_valores:
          p # puedes usar la variable valor dentro de este bloque de c&oacute;digo
          p
            | #
            em for, in
            |  --&gt;&gt; son palabras reservadas del bucle 
            em for
          p #se puede leer de la siguiente forma:
          p #por cada &lt;valor&gt; en la &lt;lista_de_valores&gt;
        .fcs15.p-4
          p
            | Ejemplo de una estructura de un ciclo 
            em for
            | :
          p
            em for i in range(5):
          p
            em &nbsp;&nbsp;&nbsp; print(i)
          p El resultado de este ciclo es lo siguiente:
          p
            em range
            | (5)
          p &gt;&nbsp;
          p 0
          p 1
          p 2
          p 3
          p 4
          p &gt;
      .col-md-6
        img(src='@/assets/curso/temas/t2/f27.svg', alt='')
        .fcs15.p-4
          p
            | El ciclo 
            em while
            |  tambi&eacute;n es una sentencia que agrupa un conjunto de instrucciones, las cuales se repiten mientras se cumpla la respectiva condici&oacute;n booleana (es decir, una expresi&oacute;n que su evaluaci&oacute;n sea verdadera o falsa). En el ciclo 
            em while
            |  dif&iacute;cilmente se puede saber con anterioridad el n&uacute;mero de veces que se repetir&aacute;n las instrucciones.
        .fcab17.p-4
          p
            | La sintaxis b&aacute;sica de un ciclo 
            em while
            |  es el siguiente:
          p
            em while 
            | (condici&oacute;n):
          p # Ejecuta este bloque de c&oacute;digo
          p # Siempre que condici&oacute;n sea verdadera
        .fcs15.p-4
          p
            | Ejemplo de una estructura de un ciclo 
            em while
            | :
          p numero = 0&nbsp;&nbsp;&nbsp;
          p nombres = [&apos;Uno&apos;, &apos;Dos&apos;, &apos;Tres&apos;, &apos;Cuatro&apos;, &apos;Cinco&apos;]
          p
            em while
            |  numero &lt; 5:
          p
            em print 
            | (&quot;N&uacute;mero&quot; + nombres[numero])
          p &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; numero + = 1
          p El resultado de este ciclo es lo siguiente:
          p N&uacute;mero Uno
          p N&uacute;mero Dos
          p N&uacute;mero Tres
          p N&uacute;mero Cuatro
          p N&uacute;mero Cinco

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Estructura de datos

    .row.justify-content-center.mb-5
      .col-lg-1.col-md-2.col-6
        img(src='@/assets/curso/temas/t2/f28.svg', alt='')
      .col-lg-11.col-md-10.col-12
        p: b A continuación, se presenta la manera en que están divididas las estructuras de datos:  
        p El lenguaje de programación 
          em Python 
          | maneja diferentes tipos de estructura de datos, las cuales permiten el procesamiento de los datos que utilizan los programas de acuerdo con la respectiva necesidad.
        p Estas estructuras se encuentran divididas en:

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cac.me-2
      | a. Tipos de datos básicos

    p Los tipos de datos básicos más usados son los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        TabsA.color-primario.mb-5
          .tarjeta.fcs15.color-secundario--borde.p-4(titulo="Entero o int")
            p En 
              em Python,
              |  los enteros o tambi&eacute;n conocidos como 
              em int,
              |  son un tipo de datos que permite representar n&uacute;meros enteros, es decir, positivos y negativos sin decimales y sin importar la longitud del n&uacute;mero almacenado.
            p: b Ejemplo:
            p x=12
            p
              em print
              |  (x)
            p: b Resultado:
            p 12
            p Se puede usar la funci&oacute;n 
              em type
              |  () para determinar el tipo de dato de la variable indicada entre par&eacute;ntesis. Ejemplo:
            p
              em print(type
              | (x))
            p Resultado: &lt;
              em class &apos;int&apos;
              | &gt;
          .tarjeta.fcs15.color-secundario--borde.p-4(titulo="Reales o<br>números de punto<br>flotante <em>(float)</em>")
            p Son un tipo de datos que permite representar n&uacute;meros con punto decimal o expresados en notaci&oacute;n de potencias de 10. Ejemplos:
            p 6.52
            p - 0.5
            p 4.3 e-5 es el n&uacute;mero 4.3 multiplicado por 10 elevado a la - 5

          .tarjeta.fcs15.color-secundario--borde.p-4(titulo="Cadena de <br>caracteres o <em>str</em>")
            p Son un tipo de datos que permite representar textos o cadenas de caracteres alfanum&eacute;ricos encerradas entre comillas simples o comillas dobles.
            p: b Ejemplos:
            p s1 = &apos;
              em Pyhton
              |  es un lenguaje de programaci&oacute;n&apos;
            p s2 = &quot;
              em Pyhton
              |  es un lenguaje de programaci&oacute;n&quot;
            p
              em print
              | (s1)
            p
              em print
              | (s2)
            p
              em print(type
              | (s1))
            p
              em print(type
              | (s2))
            p: b Resultado:
            p
              em Pyhton
              |  es un lenguaje de programaci&oacute;n
            p
              em Pyhton 
              | es un lenguaje de programaci&oacute;n
            p &lt;
              em class &apos;str&apos;
              | &gt;
            p &lt;
              em class &apos;str&apos;
              | &gt;

          .tarjeta.fcs15.color-secundario--borde.p-4(titulo="Booleano")
            p En 
              em Python
              |  existe el tipo de dato booleano, el cual es un tipo de dato que permite almacenar dos valores: 
              em True
              |  o 
              em False.
            p: b Ejemplo:
            p X =
              em True
            p
              em print
              |  (x)
            p: b Resultado:
            p: em True

      .col-lg-3.order-first.order-lg-last
        figure
          img(src='@/assets/curso/temas/t2/f29.svg', alt='')

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cac.me-2
      | b. Tipos de datos complejos

    .row.justify-content-center.mb-5
      .col-lg-1.col-md-2.col-6
        img(src='@/assets/curso/temas/t2/f30.svg', alt='')
      .col-lg-11.col-md-10.col-12
        p Python, posee además de los tipos de datos vistos anteriormente, tres tipos más complejos que pueden almacenar colecciones de datos de diversos tipos y se diferencian por su sintaxis, la manera en la que los datos son gestionados y que admiten una colección de datos. 
        p Los tipos de datos complejos son los siguientes:
        p 
          span.cac ● 
          | Listas &emsp;
          span.cac ● 
          | Tuplas &emsp;
          span.cac ● 
          | Diccionarios &emsp;



    ImagenInfograficaB.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t2/f31.svg', alt='Texto que describa la imagen')
      div(x="10%" y="10%" tooltip="" numero="+")
        p: strong Listas: es un tipo de colecci&oacute;n ordenada
        p Las listas son estructuras de datos que permiten guardar datos de cualquier tipo, son din&aacute;micas y mutables porque permiten que se pueda agregar, cambiar o eliminar sus elementos.
        p Las listas son el equivalente a lo que en otros lenguajes se les llama como 
          em arrays,
          |  o vectores y pueden almacenar cualquier tipo de dato: num&eacute;ricos, 
          em strings,
          |  booleanos e incluso otras listas.
        p Una lista se crea sencillamente indicando sus valores entre corchetes y separados por comas.
        p: strong Ejemplo:
        p lista1 = [94, &ldquo;cadena de texto&rdquo;, 
          em True
          | , &apos;otra cadena de texto&apos;, 4.8, [5, 10]]
        p A las listas se accede a sus valores por su n&uacute;mero de &iacute;ndice de la siguiente forma:
        p
          em print
          |  lista1[1]&nbsp;&nbsp; #Resultado: 94
        p
          em print
          |  lista1[2:4] #Resultado: [&quot;cadena de texto&quot;, 
          em True,
          |  &apos;otra cadena de texto&apos;]
        p
          em print
          | &nbsp;lista1[-4] #Resultado: 
          em True

      div(x="20%" y="20%" tooltip="" numero="+")
        p Las listas permiten modificar cada uno de los datos despu&eacute;s de que es creada de la siguiente manera:
        p lista1[5] = 7.1&nbsp; #el quinto elemento de la lista se cambia a 7.1
        p lista1[2] = &quot;primera cadena de texto&quot; #el segundo elemento de la lista se cambia a &quot;primera cadena de texto&quot;
        p: strong Tambi&eacute;n se puede recorrer una tupla de la igual forma que con las listas.
        p: strong Ejemplo:
        p Lista = [1, 3, 5]
        p
          em for 
          | j 
          em in 
          | Lista:
        p
          em print
          | (j)&nbsp; #Resultado 1, 3, 5
        p Las listas permiten agregar nuevos valores de la siguiente forma:
        p lista1.
          em append
          | (&apos;Nuevo elemento de la lista&apos;).
      div(x="30%" y="30%" tooltip="" numero="+")
        p: strong Tuplas
        p El concepto de tupla es muy similar al de lista. Aunque hay algunas diferencias menores, lo fundamental es que, mientras una lista es mutable y se puede modificar, una tupla no admite cambios y, por lo tanto, es inmutable.
        p Son un tipo de datos que permite almacenar varios datos que no se pueden modificar despu&eacute;s de que son declaradas. Una tupla es similar a una lista con la diferencia fundamental de que no permite modificar los datos una vez creados.
        p Las tuplas son declaradas utilizando par&eacute;ntesis en lugar de corchetes.
        p: strong Ejemplo:
        p tupla1 = (23, &apos;cadena de texto&apos;, 
          em False
          | , &apos;otra cadena de texto&apos;, 7.5)
        p A las tuplas se accede a sus valores por su n&uacute;mero de &iacute;ndice de la siguiente forma, siendo 0 (cero), el &iacute;ndice del primer dato:
        p
          em print(type
          | (tupla1))&nbsp; #Resultado: &lt;
          em class &apos;tuple&apos;
          | &gt;
        p
          em print tupla
          | 1[0]&nbsp;&nbsp; #Resultado: 23
        p: strong Tambi&eacute;n se puede obtener una parte de la tupla, indicando el rango de los &iacute;ndices separados por el car&aacute;cter: en el cual algunos de los dos &iacute;ndices pueden ser opcional.
        p: strong Ejemplos:
        p print tupla1[1:3] #Resultado: [&quot;cadena de texto&quot;, False, &apos;otra cadena de texto&apos;]
        p print tupla1[3:]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Resultado: (&apos;otra cadena de texto&apos;, 7.5)
        p print tupla1[:2] #Resultado: (23, &apos;cadena de texto&apos;, False)

      div(x="40%" y="40%" tooltip="" numero="+")
        p: strong Otra forma de acceder a la tupla es de atr&aacute;s hacia adelante, usando un &iacute;ndice negativo.
        p: strong Ejemplos:
        p
          em print tupla1
          | [-1]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Resultado: 7.5
        p
          em print tupla
          | 1[-2] #Resultado: otra cadena de texto
        p Las tuplas tambi&eacute;n pueden declararse sin los par&eacute;ntesis, separando con la coma (,) todos sus elementos.
        p tupla = 1, 2, 3
        p
          em prin
          | t(tupla)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Resultado: (1, 2, 3)
        p: strong Las tuplas tambi&eacute;n pueden declararse sin los par&eacute;ntesis, separando con la coma (,) todos sus elementos.
        p tupla = 1, 2, 3
        p
          em prin
          | t(tupla)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Resultado: (1, 2, 3)
        p: strong Al igual que las listas, las tuplas tambi&eacute;n pueden ser anidadas.
        p: strong Ejemplo:
        p
          em tupla
          |  = 1, 3, (&apos;x&apos;, &apos;y&apos;), 5
        p
          em print
          | (tupla)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Resultado: (1, 3, (&apos;x&apos;, &apos;y&apos;), 5)
        p
          em print
          | (tupla[2][0])&nbsp;&nbsp; #Resultado: x

      div(x="50%" y="50%" tooltip="" numero="+")
        p: strong Tambi&eacute;n se puede convertir una lista en una tupla por medio de la funci&oacute;n 
            em tuple
            | ().
        p: strong Ejemplo:
        p lista = [1, 3, 5]
        p tupla = 
          em tuple
          | (lista)
        p
          em print(type
          | (tupla))&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Resultado: &lt;class &apos;tuple&apos;&gt;
        p
          em prin
          | t(tupla)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Resultado: (1, 3, 5)
        p: strong Tambi&eacute;n se puede asignar el valor de una tupla con varios datos a n variables.
        p: strong Ejemplo:
        p lista = (2, 4, 6)
        p x, y, z = lista
        p
          em print
          | (x, y, z)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Resultado: 2 4 6
        p: strong Tambi&eacute;n es posible declarar una tupla de un solo elemento. Para lo cual se debe usar la coma antes del par&eacute;ntesis, con el fin de que el dato sea interpretado como un valor entero.
        p: strong Ejemplo:
        p tupla = (2,)
        p
          em print(type
          | (tupla))&nbsp;&nbsp;&nbsp; #&lt;
          em class &apos;tuple&apos;
          | &gt;
        p: strong Tambi&eacute;n se puede recorrer una tupla de la igual forma que con las listas.
        p: strong Ejemplo:
        p tupla = (1, 3, 5)
        p
          em for
          |  j 
          em in
          |  tupla:
        p
          em print(
          | j)&nbsp;&nbsp;&nbsp; #Resultado: 1, 3, 5

      div(x="60%" y="60%" tooltip="" numero="+")
        p Aunque puedan parecer estructuras de datos muy similares, las tuplas no cuentan con ciertas operaciones, especialmente las que tienen que ver con la modificación de sus valores, ya que son inmodificables. Si las listas son más potentes y flexibles, ¿por qué́ se necesitan las tuplas? Las siguientes son las ventajas potenciales del uso de tuplas con respecto a las listas:
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 1
            | Las tuplas ocupan menos espacio en memoria
          li
            .lista-ol--cuadro__vineta
              span 2
            | Debido a que las tuplas son inmutables, tienen protección frente a cambios no deseados
          li
            .lista-ol--cuadro__vineta
              span 3
            | Las tuplas se pueden usar como claves de diccionarios

      div(x="70%" y="70%" tooltip="" numero="+")
        p Van Rossum (2017) indica “Lo mejor es pensar en un diccionario como un conjunto no ordenado de pares clave: valor, con el requerimiento de que las claves sean únicas (dentro de un diccionario en particular). Un par de llaves crean un diccionario vacío: {}”.
        p Son una colecci&oacute;n de datos que permite guardar su contenido por medio de unas palabras conocidas como llaves o claves y cada una tiene asignado un valor. Mientras que en las estructuras de listas y tuplas se obtienen sus datos solo y &uacute;nicamente por un n&uacute;mero de &iacute;ndice, los diccionarios permiten usar una clave para declarar y acceder a un valor de acuerdo con la siguiente sintaxis:
        p &nbsp;_diccionario = {&apos;llave1&apos;: valor1, &apos;llave2&apos;: valor2, &apos;llave3&apos;: valor3}
        p: strong Ejemplo:
        p diccionario1 = {&quot;Nombre&quot;: &quot;Ana&quot;, &quot;Edad&quot;: 23, &quot;Documento&quot;: 12345678}
        p print(diccionario1) #Resultado: {&apos;Nombre&apos;: &apos;Ana&apos;, &apos;Edad&apos;: 23, &apos;Documento&apos;: 12345678}
        p: b Otra forma de declarar un diccionario en 
          em Python
          |  es usando 
          em dic
          | t() e colocando los pares llave y valor entre par&eacute;ntesis.
        p: b Ejemplo:
        p diccionario1 = 
          em dict
          | ([
        p &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&apos;Nombre&apos;, &apos;Ana&apos;),
        p &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&apos;Edad&apos;, 23),
        p &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&apos;Documento&apos;, 12345678),
        p ])
        p
          em print
          | (diccionario1) #Resultado: {&apos;Nombre&apos;: &apos;Ana&apos;, &apos;Edad&apos;: 23, &apos;Documento&apos;: 12345678}

      div(x="80%" y="80%" tooltip="" numero="+")
        p: b Los diccionarios en 
          em Python 
          | tienen las siguientes características:
        p
          span.cac ● 
          | Las claves deben ser únicas y pueden ser de cualquier tipo de datos inmutables: cadenas de texto, enteros, flotantes, tuplas, etc.
        p
          span.cac ● 
          | Son 
          b mutables
          | , por lo que permiten añadir, borrar y modificar sus elementos.
        p
          span.cac ● 
          | Mantienen el orden en el que se insertan las claves.
        p
          span.cac ● 
          | Tienen un 
          b acceso muy rápido 
          | a sus elementos, debido a la forma en la que están implementados internamente.
        p Algunas propiedades de los diccionarios en 
          em Python 
          | son las siguientes:
        p Son din&aacute;micos, pueden crecer o decrecer ya que se pueden a&ntilde;adir o eliminar elementos.
        p Son indexados, los elementos del diccionario son accesibles a trav&eacute;s de la respectiva llave.
        p Y son anidados, un diccionario puede contener a otro diccionario en su campo valor.
        p Un diccionario permite eliminar cualquier entrada de la siguiente forma:
        p &nbsp;(diccionario[&apos;llave2&apos;])
        p Al igual que las listas, el diccionario permite modificar los valores
        p diccionario[&apos;clave_1&apos;] = &apos;Nuevo Valor&apos;

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        h3.titulo-tercero(data-aos='fade-right')
          i.fas.fa-square.cac.me-2
          | Otro tipo de estructura de datos:
        .cajon-b.color-primario.p-3.mb-5.abajo-derecha
          p: b Matrices
          p Las matrices no son una estructura propia de 
            em Python
            | . Simplemente, una matriz es una lista de listas que se interpreta desde el punto de vista matemático. 
          p Cuando se habla de matrices en 
            em Python
            | , se está refiriendo a una matriz rectangular bidimensional especializada de datos, los cuales están almacenados en filas y columnas. Dentro de esta matriz puede haber datos en forma de números, cadenas, símbolos, expresiones, etc. La matriz es una de las estructuras de datos más importantes que se pueden utilizar en cálculos matemáticos y científicos.
          p.mb-0 Las 
            b matrices 
            | son una estructura de datos bidimensional donde los elementos se organizan en 
            b filas 
            | y 
            b columnas. 
      .col-lg-4.order-first.order-lg-last 
        figure
          img(src='@/assets/curso/temas/t2/f32.svg', alt='')

    p Ejemplo de esto: 
    .col-md-4.mx-auto.mb-4
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1
        br
        em Matrices

      img(src='@/assets/curso/temas/t2/f33.svg', alt='')

    p Esta 
      b matriz 
      | es una matriz de 3 x 4 porque tiene 3 filas y 4 columnas.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
