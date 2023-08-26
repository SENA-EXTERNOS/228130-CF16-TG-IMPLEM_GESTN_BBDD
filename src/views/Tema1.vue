<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Lenguajes de programación

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cac.me-2
      br
      | ¿Qué es un programa?

    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p: b Según, (Joyanes 2020): “un programa es sólo una secuencia de instrucciones que indican a una computadora las tareas a realizar.  Evidentemente se necesita proporcionar estas instrucciones en un lenguaje que la computadora pueda comprender”.
            i.fas.fa-quote-right
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 En otras palabras, un programa de ordenador es un conjunto de instrucciones o sentencias propias de un determinado lenguaje de programación, ordenadas lógicamente con el fin de solucionar un problema específico.
      .col-lg-4.mb-sm-4.order-first.order-lg-last(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t1/f1.svg', alt='')

    p.mb-5 A lo largo de este componente formativo, se estudia la importancia de saber programar y la lógica que permite comprender cómo se construyen los programas en las computadoras, tomando como base el lenguaje Python que es uno de los más usados actualmente y más fáciles de aprender.


    h3 Definición y características de los lenguajes de programación

    p A continuación, se presenta información relevante sobre la importancia de saber programar y la eficacia de la lógica en este proceso. Se sugiere leer con atención y tomar nota de los aspectos más relevantes para el aprendizaje:

    .tarjeta.fcs15.p-4.mb-5(data-aos="zoom-in")
      SlyderA.color-acento-botones(tipo='b')
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            p: b ¿Qué es un lenguaje?
            p Conjunto de símbolos y palabras (vocabulario o léxico) y conjunto de reglas (sintaxis y semántica) que permiten agrupar los símbolos para formar las frases del lenguaje.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f2.png', alt='Texto que describa la imagen')
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            p: b ¿Qué es programación?
            p Es un programa que escribe una secuencia de frases del lenguaje, es decir, la programación es el conjunto de acciones que incluye el análisis, el diseño, la implementación, la prueba y la depuración de un código en un determinado lenguaje de programación para poder solucionar un problema con la computadora.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f3.png', alt='Texto que describa la imagen')
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            p: b ¿Qué es un lenguaje de programación?
            p El lenguaje de programación es una herramienta que permite crear programas, expresar algoritmos con precisión y, mediante las instrucciones necesarias, crear comunicación persona-equipo con el fin de realizar determinadas tareas en el dispositivo. Está formado de un conjunto de símbolos y reglas sintácticas y semánticas que definen su estructura y el significado de sus elementos y expresiones.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f4.png', alt='Texto que describa la imagen')
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            h3 Léxico
            p Un lenguaje de programación está constituido por un léxico, una sintaxis y una semántica que definen su estructura principal y le dan un significado a sus elementos y expresiones para resolver problemas que se pueden ver interpretados en apps, páginas webs, programas de 
              em software, scripts 
              | y otros elementos que hoy facilitan el día a día de los diferentes tipos de usuarios.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f5.png', alt='Texto que describa la imagen')
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            h3 Atributos
            p De acuerdo con lo mencionado anteriormente, los lenguajes de programación vienen definidos con tres características principales que los identifican:
            p Tienen un 
              b léxico
              | , que son las palabras propias o palabras claves utilizadas en un programa que funcionan como un conjunto de símbolos o elementos básicos dentro de un lenguaje.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f6.png', alt='Texto que describa la imagen')
        .row.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            p Estos símbolos o elementos básicos son los siguientes:
            ol.lista-ol--cuadro
              li.text-small
                .lista-ol--cuadro__vineta
                  span a
                p.mb-0 
                  b Identificadores: 
                  | nombres que se dan a algunos elementos del lenguaje, por ejemplo, los nombres de las variables, los nombres de procedimientos, los nombres de las funciones, los nombres de los módulos, etc.
              li.text-small
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0 
                  b Instrucciones: 
                  | palabras claves propias del lenguaje que representan sentencias de procesamiento y definición de otros elementos del lenguaje.
              li.text-small
                .lista-ol--cuadro__vineta
                  span c
                p.mb-0 
                  b Constantes: 
                  | valores que no cambian a lo largo del programa.
              li.text-small
                .lista-ol--cuadro__vineta
                  span d
                p.mb-0 
                  b Operadores: 
                  | símbolos que se usan para realizar operaciones entre variables y constantes.
              li.text-small
                .lista-ol--cuadro__vineta
                  span e
                p.mb-0 
                  b Comentarios: 
                  | son los caracteres que se utilizan para documentar los procesos de los programas.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f7.png', alt='Texto que describa la imagen')
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            h3 Reglas o sintaxis
            p Tienen una 
              b sintaxis
              | , que es un conjunto de reglas que definen las expresiones de texto que son correctas, así como la secuencia de símbolos que forman las diferentes sentencias del lenguaje. Estas reglas indican si una sentencia está bien escrita o no.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f8.png', alt='Texto que describa la imagen')
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            h3 Semántica
            p Tienen una determinada semántica que define cuál será el resultado de la ejecución de un programa. Indica el significado de las expresiones y los tipos de datos del lenguaje.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f9.png', alt='Texto que describa la imagen')
              
    h3 Tipos de lenguajes de programación

    p Existen diversos tipos de lenguajes de programación, y cada uno es creado para resolver diferentes tipos de problemas con características similares; esto ha hecho que cada día aparezcan distintos tipos de lenguajes y que se les pueda clasificar, comprendiendo que lo principal es que ofrezcan un estilo de programación fácil, con una funcionalidad mayor y con más potencia.
    p A continuación, se presentan algunos lenguajes de programación y sus características propias que los diferencian entre sí:

    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t1/f10.svg', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Los lenguajes de programación están diferenciados por:")
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                | Su propósito (general o específico para cierto tipo de tareas).
              li
                .lista-ol--cuadro__vineta
                  span b
                | La sintaxis.
              li
                .lista-ol--cuadro__vineta
                  span c
                | Los paradigmas de programación (imperativo, declarativo, orientado a objetos, funcional).
              li
                .lista-ol--cuadro__vineta
                  span d
                p Las librerías disponibles, tales como <em>frameworks</em> o comunidad que lo soporta.
          div(titulo="Los tipos de lenguajes de programación se clasifican:")
            p De acuerdo con el nivel de programación, se encuentran de tres tipos:
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                p.mb-0 
                  b Lenguaje de máquina: 
                  | es el más primitivo y se basa en la numeración binaria, 0 y 1. Este lenguaje es utilizado directamente por máquinas o computadoras.
              li
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0 
                  b Lenguajes de programación de bajo nivel: 
                  | es un poco más fácil de interpretar, pero puede variar de acuerdo con la máquina o computadora que se esté programando. 
              li
                .lista-ol--cuadro__vineta
                  span c
                p.mb-0 
                  b Lenguajes de programación de alto nivel: 
                  | son los más utilizados;se usan palabras en inglés, lo cual facilita que una persona pueda intervenir más fácil que en los dos anteriores.
          div(titulo="De acuerdo con su orden cronológico de creación, se clasifican de la siguiente manera:")
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                p.mb-0 
                  b Primera generación: 
                  | el lenguaje máquina y el ensamblador.
              li
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0 
                  b Segunda generación: 
                  | primeros lenguajes de programación de alto nivel, los más reconocidos son: 
                  em Fortran y Cobol.
              li
                .lista-ol--cuadro__vineta
                  span c
                p.mb-0 
                  b Tercera generación: 
                  | alto nivel imperativo, pero mucho más utilizados y vigentes en la actualidad como son: 
                  em Visual Basic, C#, C++, Java y Javascript.
              li
                .lista-ol--cuadro__vineta
                  span d
                p.mb-0 
                  b Cuarta generación: 
                  | más cercanos a la época actual, es común encontrarlos en aplicaciones de gestión y manejo de bases de datos tales como: 
                  em SQL, Perl, PHP, Python y Ruby.
              li
                .lista-ol--cuadro__vineta
                  span e
                p.mb-0 
                  b Quinta generación: 
                  | los más avanzados, creados para la inteligencia artificial y para el procesamiento de lenguajes naturales como son: 
                  em Mercury, Lisp y Prolog.
          div(titulo="De acuerdo con la finalidad y herramientas en las que se use, se clasifican de la siguiente manera:")
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                p.mb-0 
                  b De propósito general:
                  em C, C++, C#, Java, Go y PHP
              li
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0 
                  b Aplicaciones web:
                  em Ruby on Rails, PHP y Python
              li
                .lista-ol--cuadro__vineta
                  span c
                p.mb-0 
                  b Multiuso: 
                  em Java, PHP, Javascript y Python
          div(titulo="De acuerdo con su forma de ejecución, se clasifican en:")
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                p.mb-0
                  b Lenguaje interpretado o de 
                    em script: 
                  | se ejecuta utilizando un programa intermedio llamado intérprete, en lugar de compilar el código a lenguaje máquina que pueda comprender y ejecutar directamente una computadora (lenguajes compilados). La ventaja es que su lenguaje interpretado es más flexible y portable.
              li
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0
                  b Lenguaje compilado: 
                  | convierte un lenguaje “cualquiera” en código máquina. Se pueden ver como traductores, permitiendo a la máquina interpretar lo que se quiere hacer. La ventaja de este lenguaje es que su ejecución es más rápida.

    h3 Sintaxis de los lenguajes de programación

    .col-md-10.mx-auto.invertido
      .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t1/f11.svg', alt='')
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p Se conoce como sintaxis a la parte visible de un lenguaje de programación. Es decir, que es el conjunto de reglas que debe seguirse al escribir el código fuente de los programas para considerarse como correctos para ese lenguaje de programación. 
              p.mb-0 En esta parte de la programación es muy importante el desarrollo de la lógica, ya que es la base de todo el conocimiento en programación; es decir; se debe aprender primero la lógica de programación, antes que la sintaxis de un lenguaje específico o determinado. Así se aprende a resolver problemas independientes de un lenguaje de programación para después tener la experticia de escribir un código que la computadora interpreta correctamente.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
