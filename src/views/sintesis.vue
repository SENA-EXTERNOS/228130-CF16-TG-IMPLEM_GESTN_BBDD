<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En este estudio de creación de algoritmos en un entorno de desarrollo (IDE), el aprendiz se puede sumergir en una variedad de conceptos y temas muy interesantes que permiten obtener la información suficiente dentro del componente formativo. Podrá diseñar, programar y desarrollar su propio pensamiento lógico basado en la construcción de algoritmos en un entorno de desarrollo, nombre y misión de esta componente. Los temas que son tratados en todo este ciclo son de gran ayuda para resolver tipos de problemas con características tanto simples como complejas, lo que conlleva a un reto constante, debido a que cada día se indagan nuevas tecnologías para la automatización de procesos, con una mayor funcionalidad y potencia; todo esto enfocado en los lenguajes de programación. Como aspecto final de este recurso, los invitamos a observar el siguiente gráfico, que contempla de manera resumida la temática estudiada en este componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
