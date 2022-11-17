<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Métodos y funciones

    .col-md-10.mx-auto.mb-5.invertido
      .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t3/f1.svg', alt='')
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p
                em Python
                |  dispone de algunos objetos denominados clases que contienen funciones definidas para ciertas aplicaciones. Estas funciones se definen como m&eacute;todos y la metodolog&iacute;a se denomina programaci&oacute;n orientada a objetos.
              p.mb-0 Para manejo de listas, 
                em Python
                |  tiene una clase denominada 
                em lis
                | t. Esta clase es residente en la librer&iacute;a est&aacute;ndar y no se necesita importar para usarla. Al crearse una variable u objeto de tipo lista se tiene acceso a las funciones o m&eacute;todos&nbsp;definidos en la clase y se usa con la siguiente notaci&oacute;n:

    .row.justify-content-center.mb-5
      .col-lg-1.col-md-2.col-6
        img(src='@/assets/curso/temas/t3/f2.svg', alt='')
      .col-lg-11.col-md-10.col-12
        p: b objeto.método
        p Algunos métodos disponibles en la clase list son los siguientes:
        p Sean 
          b o 
          | un objeto de tipo lista y 
          b e 
          | un elemento de la lista.

    .col-md-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 2
        br
        em Métodos disponibles en la clase list

      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th(width="150px") Método
              th(width="350px") Resultado
          tbody
            tr
              td
                p
                  | o.
                  em append(
                  | e)
              td
                p
                  | Agrega a la lista 
                  strong o 
                  | el elemento 
                  strong e 
            tr
              td
                p
                  | o.
                  em insert
                  | (i,e)
              td
                p
                  | Inserta el elemento 
                  strong e 
                  | en la posici&oacute;n i de la lista 
                  strong o 
            tr
              td
                p
                  | o.
                  em count
                  | (e)
              td
                p
                  | Cuenta las instancias del elemento 
                  strong e 
                  | en la lista 
                  strong o 
            tr
              td
                p
                  | o.
                  em remove
                  | (e)
              td
                p
                  | Elimina el primer elemento 
                  strong e 
                  | de la lista 
                  strong o 
            tr
              td
                p
                  | o.
                  em index
                  | (e)
              td
                p
                  | Devuelve la posici&oacute;n del primer elemento 
                  strong e 
                  | en la lista 
                  strong o 
            tr
              td
                p
                  | o.
                  em sort
                  | ()
              td
                p
                  | Ordena la lista 
                  strong o 
                  | ascendentemente
            tr
              td
                p
                  | o.
                  em reverse
                  | ()
              td
                p
                  | Invierte la lista 
                  strong o 
            tr
              td
                p
                  | o.
                  em clear
                  | ()
              td
                p
                  | Vac&iacute;a la lista 
                  strong o 

    p Algunas de estas funciones generan un error 
      em ValueError
      |  si no est&aacute; el elemento indicado, por lo cual es recomendable, hacer una validaci&oacute;n previa de la existencia del elemento.


    .fcac50.p-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          p: b ¡Felicitaciones!
          p.mb-0 Ha finalizado el estudio de este componente formativo, a través del cual ha aprendido sobre la construcción de algoritmos en un entorno de desarrollo (IDE). Ahora, es importante revisar y estudiar la síntesis con la que podrá recordar de forma general los saberes que se han desarrollado; realizar la actividad de aprendizaje donde podrá poner a prueba lo aprendido; consultar el material complementario que le servirá como refuerzo y profundización y a estudiar el glosario que le dará un repaso sobre los distintos conceptos .
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/t3/f3.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
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
