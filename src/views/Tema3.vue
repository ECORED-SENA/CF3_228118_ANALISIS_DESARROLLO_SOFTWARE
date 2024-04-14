<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Marcos de trabajo ágiles

    TabsB.color-acento-botones.mb-5
      .fondo-personalizado-3(titulo="Comunicación" :icono="require('@/assets/curso/temas/23.png')")
        .fondo-personalizado-3__contenido.py-5.px-4.px-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 400px;")
            .col-lg-6
              p.mb-4.fw-bold Comunicación
              p.mb-0 El desarrollo de #[em software] depende del trabajo en equipo, haciendo crucial la transferencia de conocimientos y el uso de medios de comunicación adecuados. Se sugiere la discusión cara a cara con herramientas que faciliten dibujar o escribir, como los tableros.
      .fondo-personalizado-3(titulo="Simplicidad" :icono="require('@/assets/curso/temas/23.png')")
        .fondo-personalizado-3__contenido.py-5.px-4.px-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-4.fw-bold Simplicidad
              p.mb-0 Se refiere a realizar solo lo estrictamente necesario, evitando desperdicios. Las tareas deben ser ejecutadas de manera que resulten fáciles de entender para otros, concentrándose únicamente en los requisitos conocidos.
            .col-lg-4
              figure
                img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 400px;")
      .fondo-personalizado-3(titulo="Retroalimentación" :icono="require('@/assets/curso/temas/23.png')")
        .fondo-personalizado-3__contenido.py-5.px-4.px-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 400px;")
            .col-lg-6
              p.mb-4.fw-bold Retroalimentación
              p.mb-0 Permite identificar áreas de mejora y la revisión constante de las prácticas actuales, de modo que se puedan establecer procesos de mejora continua.
      .fondo-personalizado-3(titulo="Coraje" :icono="require('@/assets/curso/temas/23.png')")
        .fondo-personalizado-3__contenido.py-5.px-4.px-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-4.fw-bold Coraje
              p.mb-0 Implica enfrentarse a situaciones desafiantes para el equipo, como problemas organizacionales o intentar implementar funcionalidades de formas innovadoras cuando las convencionales no funcionan, y aceptar comentarios constructivos.
            .col-lg-4
              figure
                img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 400px;")
      .fondo-personalizado-3(titulo="Respeto" :icono="require('@/assets/curso/temas/23.png')")
        .fondo-personalizado-3__contenido.py-5.px-4.px-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 400px;")
            .col-lg-6
              p.mb-4.fw-bold Respeto
              p.mb-0 Es fundamental que los miembros del equipo se respeten mutuamente para facilitar una comunicación efectiva y un trabajo en equipo armónico. Cada integrante contribuye significativamente al logro del objetivo común.

    AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
      div.ms-md-5(titulo="Dominios de orden superior.")
        p.mb-5.ps-md-2 Para el caso de los dominios de orden superior no comerciales restringidos como, por ejemplo, edu, mil y gov, existen otras organizaciones encargadas de administrarlos. Estos solicitan, además del pago, el cumplimiento de algunos requisitos adicionales que demuestren que, efectivamente, se trata de una organización afín a cada dominio.
      div.ms-md-5(titulo="Dominio .edu")
        p.mb-5.ps-md-2 Para el caso particular del dominio .edu en el dominio geográfico .co, deberá demostrar que es una institución educativa debidamente registrada y avalada por el ministerio de educación, por medio de resolución, y una copia del registro tributario. Los trámites pueden ser realizados directamente desde Internet, en la dirección: https://www.cointernet.com.co

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
