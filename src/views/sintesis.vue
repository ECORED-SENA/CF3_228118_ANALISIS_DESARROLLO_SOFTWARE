<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.borde-20.p-lg-4.p-3
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta las metodologías de desarrollo de software en dos grandes categorías: los marcos de trabajo tradicionales, con ejemplos como el modelo Cascada y el Proceso Racional Unificado (RUP), y los marcos de trabajo ágiles, representados por la Programación Extrema (XP) y Scrum. Detalla las fases y roles asociados con cada metodología, así como los valores y prácticas específicos en el caso de XP y los pilares, roles, eventos y artefactos en el caso de Scrum. Además, subraya la relevancia de la planificación en proyectos de software, destacando su papel en la evaluación de la viabilidad y la asignación de recursos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
