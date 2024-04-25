<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-4(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Metodologías de desarrollo de #[em software]
    
    .fondo-personalizado-2.pos-1
      .fondo-personalizado-2__contenido
        .row.mb-4.pt-4
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4(data-aos="fade-up") Es importante aclarar que existe un gran número de definiciones sobre lo que es una metodología para evitar cualquier confusión en este material se utilizará la definición dada por Maida y Pacienzia (2015), quienes indican que:

            .fondo-color-primario.borde-16.p-3(data-aos="fade-down")
              .d-flex.align-items-center.flex-column.flex-md-row
                .col-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/45.png",style="max-width: 72px;")
                .col.ps-md-3
                  p.text-white.fw-bold.mb-0 Una metodología hace referencia a un conjunto de procedimientos genéricos y lógicos que se usan para alcanzar un objetivo particular utilizando un conjunto de habilidades y conocimientos.

          .col-lg-4(data-aos="fade-left")
            figure
              img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 400px;")

        .row.align-items-center.mb-4
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            p.mb-0 Las metodologías de desarrollo de #[em software] siempre parten de un componente teórico y, cuando son usadas por los equipos de trabajo, conllevan a la utilización de un conjunto de técnicas y métodos que al final determinarán las tareas generales y específicas que se deberían realizar para alcanzar un objetivo.
          .col-lg-8(data-aos="fade-left")
            .fondo-color-sistema-l.p-4.borde-20
              .row.align-items-center
                .col-md-3
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/47.png",style="max-width: 146px;")
                .col-md-9
                  p.mb-0 Existen diferentes tipos de metodologías de desarrollo de #[em software] que fueron ideadas pensando en problemas particulares presentados en la industria en contextos específicos, por lo cual es importante conocer sus diferentes características y contrastarlas con las necesidades particulares a las que se enfrenta a la hora de desarrollar un producto o servicio. Es decir, cada una de estas tiene ventajas y enfoques que pueden ser reutilizados en diferentes momentos.

    .row(data-aos="zoom-in-out") 
      .col-auto.d-none.d-md-block
        img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 85px;")
      .col
        p.mb-0 Existen dos grandes clasificaciones de metodologías de desarrollo de #[em software] que se agrupan generalmente como marcos de trabajo tradicionales o marcos de trabajo ágiles que se presentan a continuación.

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
