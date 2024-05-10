<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Planeación de proyectos de #[em software]
    
    .row.mb-4
      .col-lg-7
        p.mb-4(data-aos="fade-up") La planificación de proyectos de #[em software] comprende varias actividades destinadas a obtener una visión preliminar del #[em software] a desarrollar, lo que permite realizar estimaciones para determinar la viabilidad del proyecto en función de los recursos asignados.

        .fondo-color-primario.borde-16.p-3(data-aos="fade-down")
          .d-flex.align-items-center.flex-column.flex-md-row
            .col-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/93.png",style="max-width: 72px;")
            .col.ps-md-3
              p.text-white.fw-bold.mb-0 De acuerdo con SCRUMstudy (2013), las actividades de planificación estipuladas en el marco de trabajo de #[em Scrum] se detallan en el siguiente recurso de aprendizaje:
      .col-lg-5.order-first.order-lg-last(data-aos="flip-up")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/92.png",style="max-width: 502px;")

    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/85WG4gS48x8?si=kMAfo3yH6GFz1PjR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Planeación de proyectos de software

    

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
