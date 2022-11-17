<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .invertido
      .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/if1.svg', alt='')
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Apreciado aprendiz, sea bienvenido a este momento de formación orientado a los procesos de implementación y gestión de soluciones de 
                em software 
                | de acuerdo con el diseño y metodologías de desarrollo, aplicando todo el conocimiento con criterios propios de desempeño en diferentes campos como el del sector académico, productivo e investigativo. 

    p En el siguiente video conocerá, de forma general, la temática que se explorará a lo largo de este componente formativo.
    p: b ¡Muchos éxitos en este proceso de aprendizaje!

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
