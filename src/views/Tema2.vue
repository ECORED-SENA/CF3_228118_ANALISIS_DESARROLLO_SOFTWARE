<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Marcos de trabajos tradicionales

    .fondo-personalizado-1.mb-5
      .fondo-personalizado-1__contenido.py-5
        .fondo-color-blanco.shadow-1.borde-7.p-3
          ImagenInfografica.imagen-infografica-personalizada-1.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/2.png')

            .borde-9.fondo-color-blanco.p-4(x="28%" y="10%" numero="+")
              .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Requerimientos
              p Se lleva a cabo la recopilación y análisis detallado de las necesidades del sistema o #[em software]. Se definen los objetivos, funciones, interfaces de usuario y demás necesidades del cliente o mercado.
            .borde-9.fondo-color-blanco.p-4(x="38%" y="28%" numero="+")
              .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Diseño
              p Se establece cómo será construido el sistema para cumplir con los requerimientos identificados. Incluye la arquitectura del sistema, la selección de patrones de diseño, y la planificación de interfaces y experiencias de usuario.
            .borde-9.fondo-color-blanco.p-4(x="50%" y="46%" numero="+")
              .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Implementación
              p En esta fase, se escribe el código fuente del software, basado en el diseño previamente establecido. Cada componente es desarrollado y probado individualmente antes de ser integrado en el sistema mayor.
            .borde-9.fondo-color-blanco.p-4(x="61%" y="63%" numero="+")
              .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Verificación
              p Esta etapa implica probar el sistema completo para validar que cumple con los requerimientos especificados. Incluye pruebas unitarias, de integración, de sistema y de aceptación del usuario.
            .borde-9.fondo-color-blanco.p-4(x="74%" y="80%" numero="+")
              .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Mantenimiento
              p Una vez que el #[em software] está en operación, esta fase aborda la corrección de errores, la actualización de funciones y la optimización del rendimiento. También se pueden incorporar nuevos requerimientos según sea necesario.

    .fondo-personalizado-2.pt-5.mb-5(style="padding-bottom: 4rem;")
      .fondo-personalizado-2__contenido
        .row(data-aos="flip-up")
          .col-lg-3.col-md-6.mb-5
            .tarjeta-avatar.estilo-tarjetas-personalizado-1
              img(src='@/assets/curso/temas/5.png')
              .tarjeta
                .p-4
                  h4.text-center Desarrolladores
                  p Es el rol más importante en la metodología cascada ya que son los encargados directos de la creación de código. 
          .col-lg-3.col-md-6.mb-5
            .tarjeta-avatar.estilo-tarjetas-personalizado-1
              img(src='@/assets/curso/temas/6.png')
              .tarjeta
                .p-4
                  h4.text-center #[em Testers]
                  p Encargados de encontrar fallas en los productos finales y retornar el #[em software] a los desarrolladores para arreglar todos los defectos.
          .col-lg-3.col-md-6.mb-5
            .tarjeta-avatar.estilo-tarjetas-personalizado-1
              img(src='@/assets/curso/temas/7.png')
              .tarjeta
                .p-4
                  h4.text-center Analista del negocio
                  p Encargado de la realización de estrategias de negocio que le permitan al producto #[em software] alcanzar popularidad en el mercado digital.
          .col-lg-3.col-md-6.mb-5
            .tarjeta-avatar.estilo-tarjetas-personalizado-1
              img(src='@/assets/curso/temas/8.png')
              .tarjeta
                .p-4
                  h4.text-center Administrador del proyecto
                  p Es responsable de la calidad final del #[em software]. Administra el proyecto y lo subdivide en tareas entre los miembros del equipo.

    TabsB.color-acento-botones.mb-5
      .fondo-personalizado-3(titulo="Inicio" :icono="require('@/assets/curso/temas/10.png')")
        .fondo-personalizado-3__contenido.py-5.px-4.px-lg-0
          .row.justify-content-center
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 400px;")
            .col-lg-6
              p.mb-4.fw-bold Inicio
              p.mb-0 La primera gran fase definida por RUP es la de inicio, en la cual se abordan actividades principalmente enfocadas en la comprensión del problema y el tipo de tecnología a utilizar, por lo que hay una gran carga en actividades relacionadas con la disciplina de modelado del negocio y especificación de requisitos.
      .fondo-personalizado-3(titulo="Elaboración" :icono="require('@/assets/curso/temas/10.png')")
        .fondo-personalizado-3__contenido.py-5.px-4.px-lg-0
          .row.justify-content-center
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 400px;")
            .col-lg-6
              p.mb-4.fw-bold Elaboración
              p.mb-0 La segunda fase es la elaboración, donde se centra la mayor parte del esfuerzo en la definición general de la arquitectura del sistema y el refinamiento de requisitos y modelado del negocio. RUP generalmente se apoya en el lenguaje de modelado UML para el modelado del negocio y descripción de la arquitectura.
      .fondo-personalizado-3(titulo="Construcción" :icono="require('@/assets/curso/temas/10.png')")
        .fondo-personalizado-3__contenido.py-5.px-4.px-lg-0
          .row.justify-content-center
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 400px;")
            .col-lg-6
              p.mb-4.fw-bold Construcción
              p.mb-0 La tercera fase corresponde a la construcción, donde se centran en las actividades relacionadas con la construcción del producto. Normalmente esta fase está constituida por varias iteraciones donde en cada una de ellas se desarrollan un subconjunto de requerimientos que normalmente están especificados como casos de uso.
      .fondo-personalizado-3(titulo="Transición" :icono="require('@/assets/curso/temas/10.png')")
        .fondo-personalizado-3__contenido.py-5.px-4.px-lg-0
          .row.justify-content-center
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 400px;")
            .col-lg-6
              p.mb-4.fw-bold Transición
              p.mb-0 La cuarta fase se desarrollan principalmente las disciplinas de pruebas y despliegue, es decir las actividades encaminadas a garantizar que el producto esté listo para entrega a sus usuarios.

    .slider-personalizado-1.py-5.mb-5(data-aos="flip-up")
      img.imgf-1(src="@/assets/curso/temas/15.png")
      img.imgf-2(src="@/assets/curso/temas/16.png")
      img.imgf-3(src="@/assets/curso/temas/17.png")
      .slider-personalizado-1__contenido.p-3.pe-lg-5.pt-5
        SlyderA(tipo="b")
          .row.justify-content-end
            .col-lg-6
              p.mb-lg-5.mb-3.fw-bold Analistas
              ul.lista-ul--color.lista-personalizada-1
                li 
                  i.fas.fa-cog
                  | Analistas de procesos de negocio.
                li 
                  i.fas.fa-cog
                  | Diseñadores del negocio.
                li 
                  i.fas.fa-cog
                  | Analistas del sistema.  
                li 
                  i.fas.fa-cog
                  | Especificador de requisitos. 
                li 
                  i.fas.fa-cog
                  | Diseñadores de interfaces de usuario o similares.  
            .col-lg-5.order-first.order-lg-last
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/18.png",style="max-width: 491px;")
          .row.justify-content-end
            .col-lg-6
              p.mb-lg-5.mb-3.fw-bold Desarrolladores
              ul.lista-ul--color.lista-personalizada-1
                li 
                  i.fas.fa-cog
                  | Arquitectos de #[em software].
                li 
                  i.fas.fa-cog
                  | Diseñador de bases de datos.
                li 
                  i.fas.fa-cog
                  | Desarrollador #[em backend y frontend]. 
                li 
                  i.fas.fa-cog
                  | Cualquier otro rol relacionado con procesos de codificación o integración de código.
            .col-lg-5.order-first.order-lg-last
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 491px;")
          .row.justify-content-end
            .col-lg-6
              p.mb-lg-5.mb-3.fw-bold Probadores
              ul.lista-ul--color.lista-personalizada-1
                li 
                  i.fas.fa-cog
                  | Diseñadores de pruebas.
                li 
                  i.fas.fa-cog
                  | Implementadores de pruebas.
            .col-lg-5.order-first.order-lg-last
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 491px;")
          .row.justify-content-end
            .col-lg-6
              p.mb-3.fw-bold Encargados y otros actores
              p.mb-3 Incluye a todos los roles mencionados anteriormente en las categorías de Analistas, Desarrolladores y Probadores, reflejando su importancia en la gestión y operación de proyectos.
              ul.lista-ul--color.lista-personalizada-1
                li 
                  i.fas.fa-cog
                  | Artistas gráficos.
                li 
                  i.fas.fa-cog
                  | Administradores de sistemas.
                li 
                  i.fas.fa-cog
                  | Especialista en herramientas.
                li 
                  i.fas.fa-cog
                  | #[em Stakeholders].
                li 
                  i.fas.fa-cog
                  | Cualquier otro rol no especificado anteriormente.
            .col-lg-5.order-first.order-lg-last
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 491px;")

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
