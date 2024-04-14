<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 El mundo del desarrollo de #[em software] es complejo y variado, con una amplia gama de metodologías y marcos de trabajo diseñados para enfrentar los retos que supone la creación de sistemas efectivos y eficientes. En este componente, se exploran las principales metodologías y marcos de trabajo que han moldeado la ingeniería de #[em software] moderna.

    .p-3.p-lg-2.borde-18.fondo-color-primario.mb-3
      .row.align-items-center
        .col-md-2
          figure.mb-4.mb-md-0
            img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 102px;")
        .col-md-10
          p.mb-0.fw-bold.text-white Metodologías de desarrollo de #[em software]
          p.mb-0.text-white Aquí se examina el enfoque estructurado para el desarrollo de #[em software], incluyendo la comprensión de requisitos, diseño, implementación, pruebas y mantenimiento. Discutiremos cómo estas metodologías ayudan a gestionar la complejidad y asegurar la calidad en la entrega de productos de #[em software].
    .p-3.p-lg-2.borde-18.fondo-color-sistema-i.mb-3
      .row.align-items-center
        .col-md-2
          figure.mb-4.mb-md-0
            img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 102px;")
        .col-md-10
          p.mb-0.fw-bold.text-white Marcos de trabajos tradicionales
          p.mb-0.text-white Este apartado se sumerge en las metodologías clásicas como el modelo en Cascada y el Proceso Racional Unificado (RUP). Analizaremos cómo estos enfoques secuenciales y predecibles pueden proporcionar una estructura sólida para el desarrollo de #[em software], a la vez que consideramos sus limitaciones en entornos de cambio rápido.
    .p-3.p-lg-2.borde-18.fondo-color-primario.mb-3
      .row.align-items-center
        .col-md-2
          figure.mb-4.mb-md-0
            img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 102px;")
        .col-md-10
          p.mb-0.fw-bold.text-white Marcos de trabajo ágiles
          p.mb-0.text-white La agilidad es la clave de las metodologías modernas, permitiendo a los equipos responder a la imprevisibilidad y al cambio constante. Exploraremos las prácticas y principios de marcos ágiles como la Programación Extrema (XP), el Desarrollo Rápido de Aplicaciones (RAD) y Scrum, que promueven la colaboración, adaptabilidad y entrega continua.
    .p-3.p-lg-2.borde-18.fondo-color-sistema-i.mb-3
      .row.align-items-center
        .col-md-2
          figure.mb-4.mb-md-0
            img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 102px;")
        .col-md-10
          p.mb-0.fw-bold.text-white Planeación de proyectos de #[em software]
          p.mb-0.text-white Desde la asignación de recursos hasta la gestión de riesgos y la definición de cronogramas, la planificación es vital para el éxito y la sostenibilidad de cualquier proyecto de #[em software].

    
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
