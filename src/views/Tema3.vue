<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Marcos de trabajo ágiles

    p.mb-4(data-aos="fade") Los marcos de trabajo ágiles, también conocidos como metodologías ágiles para el desarrollo de #[em software], surgen como alternativa para gestionar proyectos en los que no es posible definir completamente los requerimientos y sus estimaciones en la fase inicial, o cuando se requiere adaptabilidad a lo largo del desarrollo del #[em software]. (Maida y Pacienzia, 2015).

    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        .fondo-color-sistema-n.borde-10.p-4.mb-4
          p.mb-0 Estas metodologías ofrecen un conjunto de pautas y principios diseñados para facilitar y dar prioridad a la entrega de productos por encima de los procesos de documentación exhaustiva, simplificándolos y promoviendo la participación activa del cliente desde las primeras etapas del proyecto.
        .row
          .col-auto.d-none.d-md-block
            img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 85px;")
          .col
            p.mb-0 El origen de las metodologías ágiles se remonta al año 2001 con la publicación del Manifiesto Ágil para el Desarrollo de #[em Software], que establece cuatro valores fundamentales. (Manifiesto Ágil, 2001):
      .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/64.png",style="max-width: 502px;")
    
    .row
      .col-lg-3.col-md-6.mb-4(data-aos="fade-up")
        .fondo-color-primario.py-4.px-4.text-center.borde-20.h-100
          span.d-inline-block.fas.fa-cube.text-white.mb-3(style="font-size: 1.5rem;")
          h4.mb-0.text-white Individuos e interacciones sobre procesos y herramientas.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-down")
        .fondo-color-sistema-p.py-4.px-4.text-center.borde-20.h-100
          span.d-inline-block.fas.fa-cube.text-white.mb-3(style="font-size: 1.5rem;")
          h4.mb-0.text-white #[em Software] funcionando sobre documentación extensiva.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-up")
        .fondo-color-sistema-p.py-4.px-4.text-center.borde-20.h-100
          span.d-inline-block.fas.fa-cube.text-white.mb-3(style="font-size: 1.5rem;")
          h4.mb-0.text-white Colaboración con el cliente sobre negociación contractual.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-down")
        .fondo-color-primario.py-4.px-4.text-center.borde-20.h-100
          span.d-inline-block.fas.fa-cube.text-white.mb-3(style="font-size: 1.5rem;")
          h4.mb-0.text-white Respuesta ante el cambio sobre seguir un plan.
    
    p.mb-5(data-aos="fade-left") Adicionalmente a los valores ágiles anteriormente listados, el manifiesto ágil establece 12 principios ágiles para materializar los valores definidos (Manifiesto Ágil, 2001):

    .fondo-personalizado-6.mb-3
      .fondo-personalizado-6__contenido
        .row.align-items-center.py-5
          .col-lg-4(data-aos="fade-down")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/65.png",style="max-width: 400px;")
          .col-lg-8(data-aos="fade-up")
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
                span Las mejores arquitecturas, requisitos y diseños emergen de equipos que se autoorganizan.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") l
                span En intervalos regulares, el equipo reflexiona sobre la forma de ser más efectivo y ajusta su conducta en consecuencia.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.1 Programación Extrema - XP

    .row.mb-4 
      .col-lg-7.mb-4.mb-lg-0(data-aos="zoom-in-out")
        p.mb-4 XP, abreviatura de #[em Extreme Programming], es un marco de desarrollo de #[em software] ágil diseñado para producir #[em software] de alta calidad en entornos con requisitos muy cambiantes. Se enfoca en contextos que presentan riesgos asociados a plazos fijos, la implementación de tecnologías emergentes y equipos de trabajo reducidos localizados en el mismo lugar.
        p.mb-0 En XP se definen cinco valores según Beck y Andrés (2004):
      .col-lg-5(data-aos="zoom-in-out")
        figure
          img.mx-auto(src="@/assets/curso/temas/67.png",style="max-width: 502px;")

    TabsB.color-acento-botones.mb-5(data-aos="flip-up")
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
      .col-lg-7(data-aos="fade")
        .fondo-color-sistema-n.borde-10.p-4
          p.mb-0 Además de sus valores, XP se distingue por establecer un conjunto de 12 prácticas de desarrollo de #[em software]. Aunque estas prácticas pueden adoptarse de manera independiente, su importancia se magnifica cuando se implementan conjuntamente (Jeffries, 2011).
      .col-lg-5.order-first.order-lg-last(data-aos="fade")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 502px;")

    .row.mb-5
      .col-lg-4(data-aos="fade-up")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-down")
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

    p.mb-4(data-aos="fade-right") Los roles fundamentales establecidos por este marco de trabajo ágil son los siguientes: cliente, programador, #[em coach, tester y mánager].

    .fondo-personalizado-8.mb-4
      img.imgf-1(src="@/assets/curso/temas/100.png")
      img.imgf-2(src="@/assets/curso/temas/101.png")
      img.imgf-3(src="@/assets/curso/temas/102.png")
      img.imgf-4(src="@/assets/curso/temas/103.png")
      img.imgf-5(src="@/assets/curso/temas/104.png")
      .fondo-personalizado-8__contenido.pe-3.ps-3.ps-lg-0.pt-5
        .row.align-items-end
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/94.png",style="max-width: 441px;")
          .col-lg-8
            SlyderF.slider-personalizado-2.mb-3(columnas="col-lg-6").pb-4
              .tarjeta.color-primario.borde-16.p-3
                figure.mb-2
                  img.mx-auto(src="@/assets/curso/temas/95.png",style="max-width: 86px;")
                p.mb-0.text-white.text-center Los clientes son los encargados del establecimiento de las prioridades del proyecto y las necesidades puntuales.

              .tarjeta.color-primario.borde-16.p-3
                figure.mb-2
                  img.mx-auto(src="@/assets/curso/temas/96.png",style="max-width: 86px;")
                p.mb-0.text-white.text-center Los programadores se encargan de transformar esos requerimientos en bloques de código funcional, son el centro del marco de #[em Extreme Programming].

              .tarjeta.color-primario.borde-16.p-3
                figure.mb-2
                  img.mx-auto(src="@/assets/curso/temas/97.png",style="max-width: 86px;")
                p.mb-0.text-white.text-center Los #[em testers] se encargan de la aplicación de pruebas para garantizar la calidad de los productos y servicios desarrollados.

              .tarjeta.color-primario.borde-16.p-3
                figure.mb-2
                  img.mx-auto(src="@/assets/curso/temas/98.png",style="max-width: 86px;")
                p.mb-0.text-white.text-center El #[em coach] es una figura encargada de brindar asesoría a los miembros del equipo y son los que definen el rumbo del proyecto.

              .tarjeta.color-primario.borde-16.p-3
                figure.mb-2
                  img.mx-auto(src="@/assets/curso/temas/99.png",style="max-width: 86px;")
                p.mb-0.text-white.text-center El #[em manager] se encarga de la coordinación de actividades, del aseguramiento de los recursos requeridos para el proyecto y quien tiene la responsabilidad de la comunicación externa.


    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-out")
      h2 3.2 Desarrollo rápido de aplicaciones - RAD

    p.mb-4(data-aos="fade") RAD (Desarrollo Rápido de Aplicaciones) es una metodología ágil de desarrollo de #[em software] que se enfoca en la rápida creación de aplicaciones a través de iteraciones frecuentes y retroalimentación constante. Fue propuesta por James Martin en 1991. Algunas características fundamentales de RAD son:

    .fondo-personalizado-7.mb-5
      .fondo-personalizado-7__contenido
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")
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
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src="@/assets/curso/temas/69.png",style="max-width: 505px;")

    p.mb-5(data-aos="fade-left") A continuación, se describen las fases propuestas en RAD.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 3.] Fases definidas en RAD

    .fondo-personalizado-2.pos-2.mb-4(data-aos="zoom-out-up")
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
            .fondo-personalizado-4(data-aos="flip-up")
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
          .col-lg-7.pb-5(data-aos="fade-left")
            p.mb-0 Según HKSAR (2009), los roles más importantes en la metodología RAD incluyen: el facilitador, el escriba, el equipo SWAT, el administrador del modelo, el administrador de la base de datos, el equipo de planificación del taller, el equipo de diseño de usuario, el equipo de soporte de construcción y el equipo de transición. A continuación, se describen las características más destacadas de cada rol.
          .col-lg-5.order-first.order-lg-last.pb-5(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/72.png",style="max-width: 502px;")

    .row.mb-5
      .col-lg-7(data-aos="fade-up")
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

      .col-lg-5.order-first.order-lg-last(data-aos="fade-down")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/73.png",style="max-width: 505px;")
    
    .row 
      .col-lg-5(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/74.png",style="max-width: 505px;")
      .col-lg-7(data-aos="fade-right")
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

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 #[em Scrum]
    
    .fondo-personalizado-6.mb-4
      .fondo-personalizado-6__contenido
        p.mb-5(data-aos="fade") #[em Scrum] es un marco de trabajo ágil de muy amplio uso en la industria del #[em software] que se fundamenta en los valores y principios ágiles definidos en (Manifiesto Ágil, 2001) y donde se definen tres pilares fundamentales según (SCRUMstudy, 2013) los cuales se describen a continuación:

        .row 
          .col-lg-4.col-md-6.mb-4(data-aos="flip-up")
            .estilo-tarjetas-personalizado-2.p-4.borde-16.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/75.png",style="max-width: 101px;")
              h4.mb-4.text-center Transparencia
              ul.lista-ul--color.lista-personalizada-1
                li
                  i.fas.fa-cube
                  span Hace referencia a que cualquier proceso de #[em Scrum] puede ser conocido por cualquiera. Esto es posible por medio de eventos como:
                li
                  i.fas.fa-cube
                  span Las reuniones de revisión y reuniones diarias.
                li
                  i.fas.fa-cube
                  span Artefactos como la pila de producto.
                li
                  i.fas.fa-cube
                  span Cronogramas de lanzamiento.
                li
                  i.fas.fa-cube
                  span Documentos de visión del proyecto.
                li
                  i.fas.fa-cube
                  span Instrumentos de seguimiento, como: el #[em burndown chart] o el tablero de #[em Scrum (Scrum board)].
          .col-lg-4.col-md-6.mb-4(data-aos="flip-up")
            .estilo-tarjetas-personalizado-2.p-4.borde-16.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/76.png",style="max-width: 101px;")
              h4.mb-4.text-center Inspección
              ul.lista-ul--color.lista-personalizada-1
                li
                  i.fas.fa-cube
                  span Permite que cualquiera pueda estar enterado de las actividades realizadas por otros y en general conocer el estado actual de los procesos.
          .col-lg-4.col-md-6.mb-4(data-aos="flip-up")
            .estilo-tarjetas-personalizado-2.p-4.borde-16.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/77.png",style="max-width: 101px;")
              h4.mb-4.text-center Adaptación
              ul.lista-ul--color.lista-personalizada-1
                li
                  i.fas.fa-cube
                  span Por medio de la transparencia y la inspección es posible fijar actividades de mejoras que permitan modificar todo tipo de proceso en pro de lograr más altos estándares de calidad.

    p.mb-4(data-aos="fade") Adicionalmente, este marco de trabajo ágil está estructurado por un conjunto de roles, eventos y artefactos que pueden ser presentados a continuación:

    .fondo-personalizado-burbuja
      .burbuja.right(style="bottom: 20%;")
      .fondo-personalizado-burbuja__contenido(data-aos="flip-up")
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4.] Marco de trabajo #[em Scrum]
            .fondo-color-sistema-r.borde-11.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/78.png",style="max-width: 964px;",alt="El diagrama describe el proceso de Scrum, donde el Product Owner gestiona las prioridades del proyecto que el equipo acuerda completar en ciclos de 1 a 4 semanas llamados Sprints. Se realizan reuniones diarias para supervisar el avance y al final del Sprint se revisa el trabajo terminado y se evalúan los métodos de trabajo para mejorarlos en el siguiente ciclo, manteniendo fechas de entrega fijas.")
              figcaption Nota. Adaptada de ITMadrid Digital School.

        p.mb-5(data-aos="fade-left") Dentro de los roles hay una división en dos categorías fundamentales:

        .row.justify-content-center.mb-5(data-aos="fade")
          .col-lg-5.col-md-6.mb-4(data-aos="fade-right")
            .d-flex.w-100.flex-column.h-100
              .p-1.px-5(style="min-height:53px;display:flex;justify-content: center;align-items:center;background-color: #3A1D71;border-top-left-radius: 8px;border-top-right-radius: 8px;")
                p.mb-0.text-white.text-center #[b Los roles centrales]
              .fondo-color-sistema-l.p-3.h-100
                ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                  li
                    i.far.fa-check-circle
                    span Hacen referencia a los requeridos obligatoriamente para la creación de un producto están altamente comprometidos y de los cuales depende el éxito o no de un proyecto.
          .col-lg-5.col-md-6.mb-4(data-aos="fade-left")
            .d-flex.w-100.flex-column.h-100
              .p-1.px-5(style="min-height:53px;display:flex;justify-content: center;align-items:center;background-color: #6D18B9;border-top-left-radius: 8px;border-top-right-radius: 8px;")
                p.mb-0.text-white.text-center #[b Los roles no centrales]
              .fondo-color-sistema-l.p-3.h-100
                ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                  li
                    i.far.fa-check-circle
                    span Refieren a todo el personal interesado en el proyecto pueden interactuar con el equipo, pero no son los responsables del éxito del mismo, dentro de esta categoría entran los #[em stakeholders], directivos, gerentes, #[em marketing], asesores, etc.

    p.mb-5(data-aos="zoom-in-out") Por otro lado, hay tres roles centrales dentro del marco de trabajo de #[em Scrum] (SCRUMstudy, 2013) que se describen a continuación:

    .row.justify-content-center.mb-1
      .col-lg-4.col-md-8.mb-4(data-aos="flip-up")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/105.png' alt="")
          .crd_hover_txt--body
            h5.mb-3.text-white.text-center Dueño del producto (#[em Product Owner])
            p.mt-4.text-white.mb-0.text-center Persona con amplio conocimiento en el negocio del cliente, sus necesidades y las tendencias del mercado para el área específica. Encargado de maximizar el valor de negocio entregado al cliente y es el único responsable del control del #[em Product Backlog] (requerimientos) y su priorización. Representa al cliente en algunos procesos de demostración de avances y determina cuándo aprobar o no una entrega.
      .col-lg-4.col-md-8.mb-4(data-aos="flip-down")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/106.png' alt="")
          .crd_hover_txt--body
            h5.mb-3.text-white.text-center #[em Scrum Master]
            p.mt-4.text-white.mb-0.text-center  Rol que se encarga de facilitar los procesos al interior del equipo de trabajo removiendo cualquier impedimento y apoyando procesos de empoderamiento personal. Debe velar porque los elementos propios del marco de trabajo #[em Scrum] se apliquen de manera correcta.
      .col-lg-4.col-md-8.mb-4(data-aos="flip-up")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/107.png' alt="")
          .crd_hover_txt--body
            h5.mb-3.text-white.text-center Equipo de desarrollo (#[em Developer Team])
            p.mt-4.text-white.mb-0.text-center Responsables de la transformación de los requerimientos en código ejecutable a ser usado por el cliente. También responsables de la planificación de las iteraciones, establecimiento de características para tener en cuenta en la verificación de un requerimiento terminado y presentación de avances a los clientes. Generalmente es un equipo autoorganizado y autogestionado.
 
    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.d-none.d-md-block
        img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 85px;")
      .col
        p.mb-0 Además de los roles, #[em scrum] define un conjunto de eventos con participantes y objetivos claros que se desarrollan en momentos particulares del flujo general de #[em scrum], a continuación, se detalla cada uno de estos:

    .fondo-personalizado-2.pos-4.mb-5
      .fondo-personalizado-2__contenido
        .row.justify-content-center.mb-5
          .col-lg-10
            .fondo-personalizado-4(data-aos="flip-up")
              img.imgf-1(src="@/assets/curso/temas/15.png")
              img.imgf-2(src="@/assets/curso/temas/16.png")
              img.imgf-3(src="@/assets/curso/temas/29.png")
              .fondo-personalizado-4__contenido.p-4.pb-5
                PasosB.pasos-personalizado-2
                  .row.justify-content-center(titulo="<em>Sprint</em>")
                    .col-md-6.col-lg-6.mb-4.mb-md-0
                      p.mb-4.text-white #[em Sprint]
                      p.text-white.mb-0 Es el corazón de #[em scrum], una iteración acotada entre 2 y 4 semanas donde se realiza un ciclo completo de actividades de análisis, diseño, construcción y pruebas para desarrollar una versión del producto potencialmente. 
      
                    .col-md-6.col-lg-4
                      figure
                        img.mx-auto(src="@/assets/curso/temas/79.png",style="max-width: 295px;")
                  .row.justify-content-center(titulo="Planeación del <em>sprint</em>")
                    .col-md-6.col-lg-6.mb-4.mb-md-0
                      p.mb-4.text-white Planeación del #[em sprint]
                      p.text-white.mb-0 Reunión realizada antes del inicio del #[em sprint] donde se definen los requerimientos a desarrollar, se detallan en tareas concretas, se estima el tiempo/esfuerzo y se distribuyen las responsabilidades.
      
                    .col-md-6.col-lg-4
                      figure
                        img.mx-auto(src="@/assets/curso/temas/80.png",style="max-width: 295px;")
                  .row.justify-content-center(titulo="Reunión diaria <em>(Daily Meeting)</em>")
                    .col-md-6.col-lg-6.mb-4.mb-md-0
                      p.mb-4.text-white Reunión diaria #[em (Daily Meeting)]
                      p.text-white.mb-0 Reunión corta al inicio de cada día donde el equipo informa sobre su trabajo previo, las actividades del día y los problemas encontrados. Debe ser breve y alinearse con los pilares de transparencia e inspección.
      
                    .col-md-6.col-lg-4
                      figure
                        img.mx-auto(src="@/assets/curso/temas/81.png",style="max-width: 295px;")
                  .row.justify-content-center(titulo="Revisión del <em>sprint</em>")
                    .col-md-6.col-lg-6.mb-4.mb-md-0
                      p.mb-4.text-white Revisión del #[em sprint]
                      p.text-white.mb-0 Reunión al final del #[em sprint] donde el equipo de desarrollo muestra los resultados. Para #[em sprints] de 4 semanas, se usan 4 horas para la revisión.
      
                    .col-md-6.col-lg-4
                      figure
                        img.mx-auto(src="@/assets/curso/temas/82.png",style="max-width: 295px;")
                  .row.justify-content-center(titulo="Reunión de retrospectiva")
                    .col-md-6.col-lg-6.mb-4.mb-md-0
                      p.mb-4.text-white Reunión de retrospectiva
                      p.text-white.mb-0 Última reunión después de la revisión del #[em sprint] para autoevaluar el desempeño del equipo durante el #[em sprint], identificando y documentando aprendizajes y respondiendo a preguntas clave sobre lo que se debe continuar, detener o mejorar.
      
                    .col-md-6.col-lg-4
                      figure
                        img.mx-auto(src="@/assets/curso/temas/83.png",style="max-width: 295px;")

        p.mb-5(data-aos="fade") Finalmente, el marco de trabajo #[em scrum] define un conjunto de artefactos que permiten registrar y gestionar información clave para asegurar los tres pilares fundamentales y proveen información valiosa durante todo el proceso de desarrollo de #[em software]. Entre los artefactos representativos de este se encuentran los siguientes:

        .row.justify-content-center(data-aos="zoom-in-out")
          .col-lg-10
            PasosA.color-primario.pasos-a-personalizado-1(tipo="n")
              .row.align-items-center
                .col-md-7.mb-4.mb-md-0
                  p.mb-4.fw-bold Pila de producto #[em (Product Backlog)]:
                  p.mb-0 Lista priorizada de requerimientos generalmente descritos en formato de historias de usuarios que representa todas las características del sistema a construir.
                .col-md-5
                  figure
                    img.mx-auto.me-md-0(src='@/assets/curso/temas/84.png',style="max-width: 295px;")
              .row.align-items-center.justify-content-center
                .col-md-5.mb-4.mb-md-0
                  figure
                    img.mx-auto.me-md-0(src='@/assets/curso/temas/85.png',style="max-width: 287px;")
                .col-md-7
                  p.mb-4.fw-bold.text-start Pila del #[em sprint (Sprint Backlog)]
                  p.mb-0.text-start Lista de requerimientos seleccionados desde el #[em product backlog] por el equipo de trabajo para ser desarrollados durante un #[em sprint] particular. este es uno de los artefactos generados en la reunión de planeación del #[em sprint].
              .row.align-items-center
                .col-md-7.mb-4.mb-md-0
                  p.mb-4.fw-bold #[em Burndown Chart]
                  p.mb-0 Es un gráfico visual de dos ejes que muestra a los equipos la cantidad de trabajo pendiente por completar (eje Y) y el tiempo disponible para hacerlo (eje X). Este generalmente se realiza por cada #[em sprint] ubicando la cantidad de trabajo a realizar del #[em sprint backlog] (usualmente medido por puntos de historia u de horas de trabajo) en un tiempo 0 y por cada día finalizado se resta la cantidad de puntos de historia u horas de cada tarea completada.

                .col-md-5
                  figure
                    img.mx-auto.me-md-0(src='@/assets/curso/temas/86.png',style="max-width: 295px;")

    .fondo-personalizado-burbuja
      .burbuja.left(style="top: 160px;")
      .burbuja.right(style="bottom: 0px;")
      .fondo-personalizado-burbuja__contenido
        .row.mb-5
          .col-lg-7.mb-4.mb-lg-0(data-aos="fade")
            p.mb-0 Por otro lado, también es posible usar este mismo gráfico para representar el avance general del proyecto, ubicando en el eje Y la cantidad total de horas o esfuerzo del #[em Product Backlog] y en el eje X el número de #[em Sprints] proyectados. Cada punto representa el total acumulado hasta ese #[em Sprint] y se une mediante una línea, lo que permite determinar visualmente si el flujo de trabajo está en una situación óptima o no respecto al tiempo restante para completar el #[em Sprint] actual.
          .col-lg-5(data-aos="fade")
            figure
              img.mx-auto(src="@/assets/curso/temas/87.png",style="max-width: 502px;")

        .fondo-personalizado-2.pos-5
          .fondo-personalizado-2__contenido
            .row.justify-content-center.mb-5
              .col-lg-6
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 5.] #[em Burndown Chart]
                figure.mb-4.mb-lg-0(data-aos="flip-up")
                  .fondo-color-sistema-r.p-3.borde-8
                    img.mx-auto(src="@/assets/curso/temas/88.png",style="max-width: 552px;",alt="La figura presenta un gráfico de Sprint Burndown que muestra el progreso de trabajo en un proyecto a través del tiempo, comparando el avance planeado con el real y la tendencia basada en la actividad diaria. Incluye una referencia a la fuente de la imagen del año 2019.")
                  figcaption.mt-1(style="font-size: 14px;font-weight: normal;") Nota. Tomada de intl-blog.imgix.net (2019).

            .row.mb-5
              .col-lg-7.mb-4.mb-lg-0(data-aos="fade-up")
                p.mb-0 #[b Tablero de #[em Scrum (Scrumboard)]:] es un elemento visual donde se integra la mayor parte de los elementos del marco de trabajo #[em Scrum], en él se indica la carga de trabajo, el estado actual de cada una de las actividades y sus respectivos responsables. Este es un elemento que se sincroniza de manera permanente y facilita la implementación de los pilares de transparencia, inspección y adaptabilidad. Si bien se aconseja el uso de un tablero, existen diferentes tipos de herramientas digitales que permiten la implementación de un tablero de #[em Scrum].
              .col-lg-5(data-aos="fade-down")
                figure
                  img.mx-auto(src="@/assets/curso/temas/89.png",style="max-width: 502px;")
            
            .row.justify-content-center.mb-5
              .col-lg-8
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 6.] Tablero de #[em Scrum]
                figure(data-aos="fade")
                  img.mx-auto(src="@/assets/curso/temas/90.png",style="max-width: 820px;",alt="La figura es un tablero de tareas de Scrum que ilustra las etapas de las tareas desde el backlog hasta su finalización, incluyendo columnas para tareas en progreso, revisión, pruebas y bloqueadas.")

    p.mb-5(data-aos="fade-left") Adicionalmente es de vital importancia mencionar que entre los principales beneficios del marco de trabajo #[em Scrum] se encuentran los siguientes elementos:

    .fondo-personalizado-7.pos-1
      .fondo-personalizado-7__contenido
        .row.align-items-center
          .col-lg-8(data-aos="fade-right")
            ul.lista-ul--color.lista-personalizada-2
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") a
                span Es posible gestionar las expectativas del cliente de manera regular, ya que, este puede y debe participar en las reuniones de revisión, por lo que, está enterado todo el tiempo del estado actual del proyecto.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") b
                span El cliente puede obtener resultados importantes y utilizables desde las primeras iteraciones, ya que, la lista de producto está priorizada para ofrecer mayor valor en el menor tiempo posible y porque cada finalización de #[em Sprint] debe tener como resultado una versión totalmente funcional.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") c
                span El proyecto puede iniciar con requerimientos de muy alto nivel y es fácil administrar los cambios.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") d
                span La participación constante del cliente permite mitigar riesgos del proyecto desde sus primeras etapas.
              li
                span.fondo-color-acento-contenido.px-2.fw-bold(style="height: max-content;min-width: 24px;text-align: center;") e
                span Los procesos de retrospectiva permiten establecer actividades permanentes de mejora continua en función de las experiencias del equipo.
          .col-lg-4.order-first(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/91.png",style="max-width: 393px;")
        
        p.pb-4 Un elemento clave en su formación es la planeación de proyectos de #[em software] que aunado con los contenidos ya vistos le permite tener un panorama amplio sobre el tema.
    



    

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
