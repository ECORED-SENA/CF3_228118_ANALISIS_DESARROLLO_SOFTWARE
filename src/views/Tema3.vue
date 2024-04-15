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

    .row.mb-5
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 400px;")
      .col-lg-8
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
          div.ms-md-5(titulo="El juego de la planificación")
            p.ps-md-2.mb-5.pt-md-0.pt-2 Consiste en una reunión de planificación donde el equipo de desarrollo y el cliente discuten y priorizan las características a desarrollar, promoviendo una comprensión mutua de los requisitos.
          div.ms-md-5(titulo="Pequeños lanzamientos")
            p.ps-md-2.mb-5.pt-md-0.pt-2 Se recomienda realizar iteraciones cortas con funcionalidades reducidas para facilitar la prueba con el cliente, permitiendo obtener retroalimentación temprana y frecuente.
          div.ms-md-5(titulo="Metáfora")
            p.ps-md-2.mb-5.pt-md-0.pt-2 Esta práctica enfatiza la importancia de utilizar nombres coherentes y comprensibles para cualquier identificador en el sistema, facilitando así la comprensión global del proyecto.
          div.ms-md-5(titulo="Diseño simple")
            p.ps-md-2.mb-5.pt-md-0.pt-2 Implica desarrollar un código que solamente haga lo que es necesario en la forma más sencilla posible, evitando duplicaciones y reduciendo el número de métodos y clases.
          div.ms-md-5(titulo="Pruebas")
            p.ps-md-2.mb-5.pt-md-0.pt-2 Sugiere el empleo de técnicas de prueba constantes antes de proceder con la escritura del código, como por ejemplo el TDD (Desarrollo Dirigido por Pruebas).
          div.ms-md-5(titulo="Refactorización")
            p.ps-md-2.mb-5.pt-md-0.pt-2 Se centra en la eliminación de elementos innecesarios, desacoplando componentes y reduciendo redundancias para mantener el código limpio, entendible y fácil de modificar.

    .row.justify-content-center.mb-4
      .col-lg-10 
        .fondo-personalizado-4
          img.imgf-1(src="@/assets/curso/temas/15.png")
          img.imgf-2(src="@/assets/curso/temas/16.png")
          img.imgf-3(src="@/assets/curso/temas/29.png")
          .fondo-personalizado-4__contenido.p-4.pb-5
            PasosB.pasos-personalizado-1
              .row.justify-content-center
                .col-md-6.col-lg-6.mb-4.mb-md-0
                  h3.mb-4.bg-white.d-inline-block.pe-5.ps-1(style="color: #273A89;") Primera fase
                  p.text-white.mb-0 Definición y finalización de requisitos:
                  ul.lista-ul--color.lista-personalizada-1
                    li.text-white
                      i.fas.fa-cog(style="color: white !important;")
                      | Definir los objetivos del proyecto.
                    li.text-white
                      i.fas.fa-cog(style="color: white !important;")
                      | Establecer las expectativas.
                    li.text-white
                      i.fas.fa-cog(style="color: white !important;")
                      | Acordar los plazos.
                    li.text-white
                      i.fas.fa-cog(style="color: white !important;")
                      | Presupuestar el proyecto.
                .col-md-6.col-lg-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 295px;")
              .row.justify-content-center
                .col-md-6.col-lg-6.mb-4.mb-md-0
                  h3.mb-4.bg-white.d-inline-block.pe-5.ps-1(style="color: #273A89;") Segunda fase
                  p.text-white.mb-0 Construcción de prototipos:
                  ul.lista-ul--color.lista-personalizada-1
                    li.text-white
                      i.fas.fa-cog(style="color: white !important;")
                      | Construir prototipos.
                    li.text-white
                      i.fas.fa-cog(style="color: white !important;")
                      | Validar y refinar prototipos con la retroalimentación de los usuarios.
                    li.text-white
                      i.fas.fa-cog(style="color: white !important;")
                      | Aprobar los prototipos para pasar a la siguiente fase.
                .col-md-6.col-lg-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/31.png",style="max-width: 295px;")
              .row.justify-content-center
                .col-md-6.col-lg-6.mb-4.mb-md-0
                  h3.mb-4.bg-white.d-inline-block.pe-5.ps-1(style="color: #273A89;") Tercera fase
                  p.text-white.mb-0 Transformación en modelos funcionales:
                  ul.lista-ul--color.lista-personalizada-1
                    li.text-white
                      i.fas.fa-cog(style="color: white !important;")
                      | Desarrollar modelos funcionales a partir de los prototipos aprobados.
                .col-md-6.col-lg-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 295px;")
              .row.justify-content-center
                .col-md-6.col-lg-6.mb-4.mb-md-0
                  h3.mb-4.bg-white.d-inline-block.pe-5.ps-1(style="color: #273A89;") Cuarta fase
                  p.text-white.mb-0 Pruebas:
                  ul.lista-ul--color.lista-personalizada-1
                    li.text-white
                      i.fas.fa-cog(style="color: white !important;")
                      | Realizar pruebas exhaustivas para asegurar que cada elemento funciona de manera individual y en conjunto.
                .col-md-6.col-lg-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/33.png",style="max-width: 295px;")
              .row.justify-content-center
                .col-md-6.col-lg-6.mb-4.mb-md-0
                  h3.mb-4.bg-white.d-inline-block.pe-5.ps-1(style="color: #273A89;") Quinta fase
                  p.text-white.mb-0 Lanzamiento:
                  ul.lista-ul--color.lista-personalizada-1
                    li.text-white
                      i.fas.fa-cog(style="color: white !important;")
                      | Ejecutar todas las actividades necesarias para el lanzamiento del producto, incluyendo la carga inicial de datos y la capacitación de usuarios.
                .col-md-6.col-lg-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/34.png",style="max-width: 295px;")

    AcordionA.acordion-personalizado-1.mb-5(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
      div.ms-md-5(titulo="Facilitador")
        .row.justify-content-start
          .col-lg-6.mb-4.mb-lg-0
            p.ps-md-2.pt-md-0.pt-2.mb-0.mt-lg-5 Encargado de asegurar los objetivos y de los talleres de captura de requerimientos, prepara materiales, y actúa como mediador en la resolución de conflictos.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 400px;")
      div.ms-md-5(titulo="Escriba")
        .row.justify-content-start
          .col-lg-6.mb-4.mb-lg-0
            p.ps-md-2.pt-md-0.pt-2.mb-0.mt-lg-5 Responsable de documentar los resultados de los talleres de captura de requerimientos y registrar la información de todo el proceso.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 400px;")
      div.ms-md-5(titulo="Equipo SWAT")
        .row.justify-content-start
          .col-lg-6.mb-4.mb-lg-0
            p.ps-md-2.pt-md-0.pt-2.mb-0.mt-lg-5 Equipo encargado del diseño y construcción del sistema.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")
      div.ms-md-5(titulo="Administrador del modelo")
        .row.justify-content-start
          .col-lg-6.mb-4.mb-lg-0
            p.ps-md-2.pt-md-0.pt-2.mb-0.mt-lg-5 Coordinador del desarrollo y mantenimiento de las arquitecturas y modelos resultantes del proyecto.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 400px;")
      div.ms-md-5(titulo="Administrador de bases de datos")
        .row.justify-content-start
          .col-lg-6.mb-4.mb-lg-0
            p.ps-md-2.pt-md-0.pt-2.mb-0.mt-lg-5 Responsable del rendimiento, integridad y seguridad de la base de datos de la organización.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 400px;")
      div.ms-md-5(titulo="Equipo de planificación de los <em>workshops</em>")
        .row.justify-content-start
          .col-lg-6.mb-4.mb-lg-0
            p.ps-md-2.pt-md-0.pt-2.mb-0.mt-lg-5 Asisten en la definición de requerimientos y el alcance del sistema propuesto.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 400px;")
      div.ms-md-5(titulo="Equipo de diseño de usuario")
        .row.justify-content-start
          .col-lg-6.mb-4.mb-lg-0
            p.ps-md-2.pt-md-0.pt-2.mb-0.mt-lg-5 Proveen información detallada sobre las funciones del negocio y procesos afectados por el sistema propuesto.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/41.png",style="max-width: 400px;")
      div.ms-md-5(titulo="Equipo de soporte de construcción")
        .row.justify-content-start
          .col-lg-6.mb-4.mb-lg-0
            p.ps-md-2.pt-md-0.pt-2.mb-0.mt-lg-5 Se aseguran de que las necesidades del usuario final se cumplan en el sistema completo, ofreciendo conocimiento detallado de las actividades del negocio y retroalimentación sobre la usabilidad del sistema al equipo SWAT.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/42.png",style="max-width: 400px;")
      div.ms-md-5(titulo="Equipo de transición")
        .row.justify-content-start
          .col-lg-6.mb-4.mb-lg-0
            p.ps-md-2.pt-md-0.pt-2.mb-0.mt-lg-5 Desarrollan las tareas necesarias para preparar y llevar el sistema a entornos de producción.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 400px;")
    

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
