<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Marcos de trabajo ágiles

    p.mb-4 Los marcos de trabajo ágiles, también conocidos como metodologías ágiles para el desarrollo de #[em software], surgen como alternativa para gestionar proyectos en los que no es posible definir completamente los requerimientos y sus estimaciones en la fase inicial, o cuando se requiere adaptabilidad a lo largo del desarrollo del #[em software]. (Maida y Pacienzia, 2015).

    .row.mb-5
      .col-lg-7
        .fondo-color-sistema-n.borde-10.p-4.mb-4
          p.mb-0 Estas metodologías ofrecen un conjunto de pautas y principios diseñados para facilitar y dar prioridad a la entrega de productos por encima de los procesos de documentación exhaustiva, simplificándolos y promoviendo la participación activa del cliente desde las primeras etapas del proyecto.
        .row
          .col-auto.d-none.d-md-block
            img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 85px;")
          .col
            p.mb-0 El origen de las metodologías ágiles se remonta al año 2001 con la publicación del Manifiesto Ágil para el Desarrollo de #[em Software], que establece cuatro valores fundamentales. (Manifiesto Ágil, 2001):
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/64.png",style="max-width: 502px;")
    
    .row
      .col-lg-3.col-md-6.mb-4
        .fondo-color-primario.py-4.px-4.text-center.borde-20.h-100
          span.d-inline-block.fas.fa-cube.text-white.mb-3(style="font-size: 1.5rem;")
          h4.mb-0.text-white Individuos e interacciones sobre procesos y herramientas.
      .col-lg-3.col-md-6.mb-4
        .fondo-color-sistema-p.py-4.px-4.text-center.borde-20.h-100
          span.d-inline-block.fas.fa-cube.text-white.mb-3(style="font-size: 1.5rem;")
          h4.mb-0.text-white #[em Software] funcionando sobre documentación extensiva.
      .col-lg-3.col-md-6.mb-4
        .fondo-color-sistema-p.py-4.px-4.text-center.borde-20.h-100
          span.d-inline-block.fas.fa-cube.text-white.mb-3(style="font-size: 1.5rem;")
          h4.mb-0.text-white Colaboración con el cliente sobre negociación contractual.
      .col-lg-3.col-md-6.mb-4
        .fondo-color-primario.py-4.px-4.text-center.borde-20.h-100
          span.d-inline-block.fas.fa-cube.text-white.mb-3(style="font-size: 1.5rem;")
          h4.mb-0.text-white Respuesta ante el cambio sobre seguir un plan.
    
    p.mb-5 Adicionalmente a los valores ágiles anteriormente listados, el manifiesto ágil establece 12 principios ágiles para materializar los valores definidos (Manifiesto Ágil, 2001):

    .fondo-personalizado-6.mb-3
      .fondo-personalizado-6__contenido
        .row.align-items-center.py-5
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/65.png",style="max-width: 400px;")
          .col-lg-8
            ul.lista-ul--color.lista-personalizada-2
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") a
                span Nuestra principal prioridad es satisfacer al cliente a través de la entrega temprana y continua de #[em software] de valor.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") b
                | Son bienvenidos los requisitos cambiantes, incluso si llegan tarde al desarrollo. Los procesos ágiles se doblegan al cambio como ventaja competitiva para el cliente.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") c
                span Entregar con frecuencia #[em software] que funcione, en periodos de un par de semanas hasta un par de meses, con preferencia en los períodos breves.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") d
                span Las personas del negocio y los desarrolladores deben trabajar juntos de forma cotidiana a través del proyecto.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") e
                span Construcción de proyectos en torno a individuos motivados, dándoles la oportunidad y el respaldo que necesitan y procurándoles confianza para que realicen la tarea.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") f
                span La forma más eficiente y efectiva de comunicar información de ida y vuelta dentro de un equipo de desarrollo es mediante la conversación cara a cara.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") g
                span El #[em software] que funciona es la principal medida del progreso.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") h
                span Los procesos ágiles promueven el desarrollo sostenido. Los patrocinadores, desarrolladores y usuarios deben mantener un ritmo constante de forma indefinida.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") i
                span La atención continua a la excelencia técnica enaltece la agilidad.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") j
                span La simplicidad como arte de maximizar la cantidad de trabajo que se hace es esencial.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") k
                span Las mejores arquitecturas, requisitos y diseños emergen de equipos que se auto organizan.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") l
                span En intervalos regulares, el equipo reflexiona sobre la forma de ser más efectivo y ajusta su conducta en consecuencia.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Programación Extrema - XP

    .row.mb-4 
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 XP, abreviatura de #[em Extreme Programming], es un marco de desarrollo de #[em software] ágil diseñado para producir #[em software] de alta calidad en entornos con requisitos muy cambiantes. Se enfoca en contextos que presentan riesgos asociados a plazos fijos, la implementación de tecnologías emergentes y equipos de trabajo reducidos localizados en el mismo lugar.
        p.mb-0 En XP se definen cinco valores según Beck y Andrés (2004):
      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/temas/67.png",style="max-width: 502px;")

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

    .row.align-items-center.mb-4
      .col-lg-7
        .fondo-color-sistema-n.borde-10.p-4
          p.mb-0 Además de sus valores, XP se distingue por establecer un conjunto de 12 prácticas de desarrollo de #[em software]. Aunque estas prácticas pueden adoptarse de manera independiente, su importancia se magnifica cuando se implementan conjuntamente (Jeffries, 2011).
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 502px;")

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

    p.mb-4 Los roles fundamentales establecidos por este marco de trabajo ágil son los siguientes: cliente, programador, #[em coach, tester y mánager].

    p(style="color: red;") Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod excepturi officia exercitationem iusto sunt provident a ut rerum, tenetur quae facere aliquid laudantium voluptatum, explicabo facilis vel? Corporis, porro!

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Desarrollo rápido de aplicaciones - RAD

    p.mb-4 RAD (Desarrollo Rápido de Aplicaciones) es una metodología ágil de desarrollo de #[em software] que se enfoca en la rápida creación de aplicaciones a través de iteraciones frecuentes y retroalimentación constante. Fue propuesta por James Martin en 1991. Algunas características fundamentales de RAD son:

    .fondo-personalizado-7.mb-5
      .fondo-personalizado-7__contenido
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            ul.lista-ul--color.lista-personalizada-2
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") 1
                span Mayor flexibilidad y adaptabilidad a cualquier ajuste que deba realizarse durante el proceso de desarrollo.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") 2
                span Iteraciones rápidas que reducen el tiempo de desarrollo y mantienen un ritmo de entrega acelerado.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") 3
                span Se fomenta la reutilización de código.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") 4
                span Mejor gestión del riesgo, ya que las partes interesadas discuten y abordan cualquier vulnerabilidad mientras se construyen los productos.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/69.png",style="max-width: 505px;")

    p.mb-5 A continuación, se describen las fases propuestas en RAD.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2.] Fases definidas en RAD

    .fondo-personalizado-2.pos-2.mb-4
      .fondo-personalizado-2__contenido
        .row.justify-content-center.mb-5
          .col-lg-10
            figure
              .fondo-color-sistema-o.shadow-1.borde-7.px-3.px-lg-5
                img.mx-auto(src="@/assets/curso/temas/71.svg",style="max-width: 882px;",alt="El diagrama muestra el Ciclo de Prototipos que comienza con el análisis y diseño, seguido de construcción, demostración y refinamiento, luego pruebas y finaliza con la implementación, destacando un enfoque iterativo para el desarrollo de prototipos")
              figcaption.mt-1(style="font-size: 14px;font-weight: normal;") Nota: Tomada de Blog Capterra (2019).

        p.mb-0 El proceso de desarrollo en cinco fases clave: desde la definición precisa de los requisitos, pasando por la creación y afinamiento de prototipos, hasta las pruebas rigurosas y el lanzamiento cuidadosamente preparado del producto final.

    .fondo-personalizado-2.pos-3
      .fondo-personalizado-2__contenido
        .row.justify-content-center.mb-5
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

        .row.pb-5
          .col-lg-7.pb-5
            p.mb-0 Según HKSAR (2009), los roles más importantes en la metodología RAD incluyen: el facilitador, el escriba, el equipo SWAT, el administrador del modelo, el administrador de la base de datos, el equipo de planificación del taller, el equipo de diseño de usuario, el equipo de soporte de construcción y el equipo de transición. A continuación, se describen las características más destacadas de cada rol.
          .col-lg-5.order-first.order-lg-last.pb-5
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/72.png",style="max-width: 502px;")

    .row.mb-5
      .col-lg-7
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
          div.ms-md-5(titulo="Facilitador")
            .row.justify-content-start
              .col-lg-6.mb-4.mb-lg-0
                p.ps-md-2.pt-md-0.pt-2.mb-0 Encargado de asegurar los objetivos y de los talleres de captura de requerimientos, prepara materiales, y actúa como mediador en la resolución de conflictos.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 400px;")
          div.ms-md-5(titulo="Escriba")
            .row.justify-content-start
              .col-lg-6.mb-4.mb-lg-0
                p.ps-md-2.pt-md-0.pt-2.mb-0 Responsable de documentar los resultados de los talleres de captura de requerimientos y registrar la información de todo el proceso.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 400px;")
          div.ms-md-5(titulo="Equipo SWAT")
            .row.justify-content-start
              .col-lg-6.mb-4.mb-lg-0
                p.ps-md-2.pt-md-0.pt-2.mb-0 Equipo encargado del diseño y construcción del sistema.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")
          div.ms-md-5(titulo="Administrador del modelo")
            .row.justify-content-start
              .col-lg-6.mb-4.mb-lg-0
                p.ps-md-2.pt-md-0.pt-2.mb-0 Coordinador del desarrollo y mantenimiento de las arquitecturas y modelos resultantes del proyecto.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 400px;")
          div.ms-md-5(titulo="Administrador de bases de datos")
            .row.justify-content-start
              .col-lg-6.mb-4.mb-lg-0
                p.ps-md-2.pt-md-0.pt-2.mb-0 Responsable del rendimiento, integridad y seguridad de la base de datos de la organización.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 400px;")

      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/73.png",style="max-width: 505px;")
    
    .row 
      .col-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/74.png",style="max-width: 505px;")
      .col-lg-7
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
          div.ms-md-5(titulo="Equipo de planificación de los <em>workshops</em>")
            .row.justify-content-start
              .col-lg-6.mb-4.mb-lg-0
                p.ps-md-2.pt-md-0.pt-2.mb-0 Asisten en la definición de requerimientos y el alcance del sistema propuesto.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 400px;")
          div.ms-md-5(titulo="Equipo de diseño de usuario")
            .row.justify-content-start
              .col-lg-6.mb-4.mb-lg-0
                p.ps-md-2.pt-md-0.pt-2.mb-0 Proveen información detallada sobre las funciones del negocio y procesos afectados por el sistema propuesto.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/41.png",style="max-width: 400px;")
          div.ms-md-5(titulo="Equipo de soporte de construcción")
            .row.justify-content-start
              .col-lg-6.mb-4.mb-lg-0
                p.ps-md-2.pt-md-0.pt-2.mb-0 Se aseguran de que las necesidades del usuario final se cumplan en el sistema completo, ofreciendo conocimiento detallado de las actividades del negocio y retroalimentación sobre la usabilidad del sistema al equipo SWAT.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/42.png",style="max-width: 400px;")
          div.ms-md-5(titulo="Equipo de transición")
            .row.justify-content-start
              .col-lg-6.mb-4.mb-lg-0
                p.ps-md-2.pt-md-0.pt-2.mb-0 Desarrollan las tareas necesarias para preparar y llevar el sistema a entornos de producción.
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
