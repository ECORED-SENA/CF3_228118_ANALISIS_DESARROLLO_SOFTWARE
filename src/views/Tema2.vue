<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 2
      h1 Marcos de trabajos tradicionales

    .row.mb-4 
      .col-lg-8
        p.mb-4(data-aos="fade-up") Para el desarrollo de un buen producto de #[em software] se debe iniciar con un excelente proceso de planificación y gestión durante todas las etapas y actividades que involucran transformar una idea o requerimiento en un producto o servicio que será utilizado por un cliente particular.

        .bloque-texto-b.p-4(data-aos="fade-left")
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 Los marcos de trabajo o metodologías tradicionales se caracterizan por centrar la mayor parte de su esfuerzo en la planificación y control del proceso, lo que conlleva a una documentación exhaustiva y precisa de los artefactos que describen los requisitos y los modelos del sistema en las etapas iniciales del desarrollo del proyecto.
            i.fas.fa-quote-right
          p.mb-0 (Maida y Pacienzia, 2015).
        
        p.mb-4(data-aos="fade-down") Lo anterior supone que este tipo de enfoques son óptimos en proyectos en los cuales los requisitos están plenamente identificados y delimitados, y donde no se espera que se produzca ningún cambio en lo establecido mientras el proyecto es finalizado.

        p.mb-0(data-aos="fade-right") A continuación, se describen algunas metodologías que se enmarcan en los marcos tradicionales de desarrollo de #[em software].

      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/49.png",style="max-width: 400px;")

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Cascada

    .row.mb-5
      .col-lg-9
        p.mb-5(data-aos="fade") Este es uno de los modelos genéricos más ampliamente conocidos en la ingeniería de #[em software] y se deriva de procesos de ingeniería de sistemas más generales (Royce, 1970). Este modelo plantea un proceso lineal donde las actividades de desarrollo de un producto o servicios de #[em software] se agrupan en un conjunto de fases sucesivas. Estas son desarrolladas una única vez y los resultados de cada fase son la entrada requerida para la siguiente, ninguna fase puede iniciar si la fase anterior no ha sido finalizada, generalmente mediante un formalismo que puede ser un documento.

        .fondo-color-sistema-n.p-3.p-md-2.borde-10(data-aos="fade")
          .row.align-items-center
            .col-md-2.pe-md-0
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 71px;")
            .col-md-10.ps-md-0
              p.mb-0 Según Sommerville (2005), el modelo en cascada se compone de cinco etapas principales que se asocian con actividades fundamentales en el proceso de desarrollo de #[em software], las cuales son:

      .col-lg-3.order-first.order-lg-last(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 292px;")

    .fondo-personalizado-1.mb-5
      .fondo-personalizado-1__contenido.py-5
        ImagenInfografica.imagen-infografica-personalizada-2.color-acento-botones.px-3.px-md-5.mx-md-5.d-lg-none(data-aos="flip-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/52.png')

          .borde-9.fondo-color-blanco.p-4(x="51%" y="13%" numero="+")
            .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Requerimientos
            p Se lleva a cabo la recopilación y análisis detallado de las necesidades del sistema o #[em software]. Se definen los objetivos, funciones, interfaces de usuario y demás necesidades del cliente o mercado.
          .borde-9.fondo-color-blanco.p-4(x="51%" y="29%" numero="+")
            .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Diseño
            p Se establece cómo será construido el sistema para cumplir con los requerimientos identificados. Incluye la arquitectura del sistema, la selección de patrones de diseño, y la planificación de interfaces y experiencias de usuario.
          .borde-9.fondo-color-blanco.p-4(x="52%" y="45%" numero="+")
            .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Implementación
            p En esta fase, se escribe el código fuente del #[em software], basado en el diseño previamente establecido. Cada componente es desarrollado y probado individualmente antes de ser integrado en el sistema mayor.
          .borde-9.fondo-color-blanco.p-4(x="52%" y="61%" numero="+")
            .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Verificación
            p Esta etapa implica probar el sistema completo para validar que cumple con los requerimientos especificados. Incluye pruebas unitarias, de integración, de sistema y de aceptación del usuario.
          .borde-9.fondo-color-blanco.p-4(x="51%" y="78%" numero="+")
            .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Mantenimiento
            p Una vez que el #[em software] está en operación, esta fase aborda la corrección de errores, la actualización de funciones y la optimización del rendimiento. También se pueden incorporar nuevos requerimientos según sea necesario.

        .fondo-color-blanco.shadow-1.borde-7.p-3.d-none.d-lg-block
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
              p En esta fase, se escribe el código fuente del #[em software], basado en el diseño previamente establecido. Cada componente es desarrollado y probado individualmente antes de ser integrado en el sistema mayor.
            .borde-9.fondo-color-blanco.p-4(x="61%" y="63%" numero="+")
              .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Verificación
              p Esta etapa implica probar el sistema completo para validar que cumple con los requerimientos especificados. Incluye pruebas unitarias, de integración, de sistema y de aceptación del usuario.
            .borde-9.fondo-color-blanco.p-4(x="74%" y="80%" numero="+")
              .h5.mb-4.d-inline-block.p-2.pe-5.text-white(style="background-color: #3A1D71;") Mantenimiento
              p Una vez que el #[em software] está en operación, esta fase aborda la corrección de errores, la actualización de funciones y la optimización del rendimiento. También se pueden incorporar nuevos requerimientos según sea necesario.


    .fondo-personalizado-burbuja
      .burbuja.right
      .burbuja.left(style="bottom: 20%;")
      .fondo-personalizado-burbuja__contenido
        p.mb-5(data-aos="fade") Continuando con el tema, se presenta un comparativo que resume las principales ventajas y desventajas de este modelo.
        .row.justify-content-center.mb-1
          .col-lg-4.col-md-6.mb-4(data-aos="fade-up")
            .fondo-color-primario.borde-16.p-4.h-100
              .d-flex.justify-content-between.align-items-center.mb-1
                img(src="@/assets/curso/temas/53.png",style="max-width: 84px;")
                img(src="@/assets/curso/temas/54.png",style="max-width: 40px;")
              p.fw-bold.mb-4.text-white Ventaja
              ul.lista-ul--color.text-white
                li 
                  i.fas.fa-cube
                  | La definición clara de fases permite el desarrollo de una estructura sencilla que es ideal para proyectos sencillos y cortos.

                li 
                  i.fas.fa-cube
                  | Siguiendo este modelo se genera una muy buena documentación del proceso y es posible definir hitos claros.

                li 
                  i.fas.fa-cube
                  | Es más fácil realizar la estimación de costos al inicio del proyecto.

                li 
                  i.fas.fa-cube
                  | Es fácil elaborar cronogramas de trabajo con base al desarrollo de las actividades de cada fase.
          .col-lg-4.col-md-6.mb-4(data-aos="fade-down")
            .fondo-color-primario.borde-16.p-4.h-100
              .d-flex.justify-content-between.align-items-center.mb-1
                img(src="@/assets/curso/temas/53.png",style="max-width: 84px;")
                img(src="@/assets/curso/temas/55.png",style="max-width: 20px;")
              p.fw-bold.mb-4.text-white Desventaja
              ul.lista-ul--color.text-white
                li 
                  i.fas.fa-cube
                  | No se acopla muy bien a proyectos complejos con múltiples equipos trabajando en paralelo, ya que las fases normalmente se traslapan y es difícil diferenciarlas.

                li 
                  i.fas.fa-cube
                  | Es difícil introducir cambios en el transcurso del proyecto.

                li 
                  i.fas.fa-cube
                  | Los usuarios finales y clientes normalmente son integrados al final del proceso, lo que impide tener realimentación y ajustes en etapas tempranas.

                li 
                  i.fas.fa-cube
                  | Existen fallos que solo son detectados cuando el sistema entra en funcionamiento, lo que puede ser desastroso para un proyecto que sigue este modelo.
    p.mb-5(data-aos="fade-right") El modelo en cascada define cuatro grupos de roles típicos, los cuales se mencionan a continuación:

    .fondo-personalizado-2.pt-5.mb-5(style="padding-bottom: 4rem;")
      .fondo-personalizado-2__contenido
        .row(data-aos="flip-up")
          .col-lg-3.col-md-6.mb-5(data-aos="fade-right")
            .tarjeta-avatar.estilo-tarjetas-personalizado-1
              img(src='@/assets/curso/temas/5.png')
              .tarjeta
                .p-4
                  h4.text-center Desarrolladores
                  p Es el rol más importante en la metodología cascada, ya que son los encargados directos de la creación de código. 
          .col-lg-3.col-md-6.mb-5(data-aos="fade-up")
            .tarjeta-avatar.estilo-tarjetas-personalizado-1
              img(src='@/assets/curso/temas/6.png')
              .tarjeta
                .p-4
                  h4.text-center #[em Testers]
                  p Encargados de encontrar fallas en los productos finales y retornar el #[em software] a los desarrolladores para arreglar todos los defectos.
          .col-lg-3.col-md-6.mb-5(data-aos="fade-down")
            .tarjeta-avatar.estilo-tarjetas-personalizado-1
              img(src='@/assets/curso/temas/7.png')
              .tarjeta
                .p-4
                  h4.text-center Analista del negocio
                  p Encargado de la realización de estrategias de negocio que le permitan al producto #[em software] alcanzar popularidad en el mercado digital.
          .col-lg-3.col-md-6.mb-5(data-aos="fade-left")
            .tarjeta-avatar.estilo-tarjetas-personalizado-1
              img(src='@/assets/curso/temas/8.png')
              .tarjeta
                .p-4
                  h4.text-center Administrador del proyecto
                  p Es responsable de la calidad final del #[em software]. Administra el proyecto y lo subdivide en tareas entre los miembros del equipo.

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-out")
      h2 2.2 Proceso Racional Unificado - RUP
    
    .row.mb-5
      .col-lg-9
        p.mb-5(data-aos="fade") RUP es una sigla en inglés que corresponde a #[em Rational Unified Process], el cual es un proceso de desarrollo de #[em software] tradicional que se basa en el modelo en cascada y fue desarrollado por la empresa #[em Rational Software], actualmente propiedad de IBM. Esta metodología se enfoca en la arquitectura y es guiada por casos de uso (requerimientos) (#[em Kruchten], 2003).

        .fondo-color-sistema-n.p-3.p-md-2.borde-10.mb-4(data-aos="flip-up")
          .row.align-items-center
            .col-md-2.pe-md-0
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 71px;")
            .col-md-10.ps-md-0
              p.mb-0 RUP divide el proceso de desarrollo en cuatro grandes fases. Dentro de ellas, se realizan iteraciones donde se desglosan, con mayor o menor intensidad, un conjunto de disciplinas según la fase en la que se está.

        .row.align-items-center(data-aos="flip-up")
          .col-auto.d-none.d-md-block
            img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 85px;")
          .col
            p.mb-0 A continuación, se presentarán las fases y disciplinas propuestas por RUP.

      .col-lg-3.order-first.order-lg-last(data-aos="fade")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/56.png",style="max-width: 292px;")

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Fases y disciplinas de RUP
        
        figure.mb-4.mb-lg-0(data-aos="zoom-in-out")
          img.mx-auto(src="@/assets/curso/temas/57.png",style="max-width: 1030px;",alt="La figura presenta la estructura del Proceso Racional Unificado, un método de desarrollo de software que se desarrolla en fases y se organiza en iteraciones, donde diferentes procesos de trabajo se llevan a cabo con variada intensidad a lo largo del proyecto.")
        figcaption Nota. Tomada de Man, Hafriz, Nural, Maizura, Noor, Wan, Bakar y Man (2008).
    
    p.mb-4(data-aos="fade-left") A continuación, se describen las fases y su impacto en el proceso, por lo que se le invita a revisar el siguiente recurso de aprendizaje.

    TabsB.color-acento-botones.mb-5(data-aos="zoom-in-out")
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
              p.mb-0 La tercera fase corresponde a la construcción, donde se centran en las actividades relacionadas con la construcción del producto. Normalmente, esta fase está constituida por varias iteraciones, donde en cada una de ellas se desarrolla un subconjunto de requerimientos que normalmente están especificados como casos de uso.
      .fondo-personalizado-3(titulo="Transición" :icono="require('@/assets/curso/temas/10.png')")
        .fondo-personalizado-3__contenido.py-5.px-4.px-lg-0
          .row.justify-content-center
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 400px;")
            .col-lg-6
              p.mb-4.fw-bold Transición
              p.mb-0 La cuarta fase se desarrolla principalmente las disciplinas de pruebas y despliegue, es decir, las actividades encaminadas a garantizar que el producto esté listo para entrega a sus usuarios.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8
        .borde-16.fondo-color-primario.p-3 
          .row.align-items-center
            .col-md-auto.pe-md-0
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/58.png",style="max-width: 72px;")
            .col-md-10
              p.mb-0.fw-bold.text-white Es importante señalar que, dentro de cada una de las fases del RUP, se desarrollan varias disciplinas, y el esfuerzo y tiempo invertidos en cada una tendrán un enfoque diferente dependiendo de la fase del proyecto en la que se esté.

    p.mb-5(data-aos="fade") Otro aspecto relevante de esta metodología es que se sustenta en un conjunto de artefactos que se elaboran con el objetivo de especificar el proceso de análisis y diseño que respalda la construcción del #[em software]. Entre los artefactos más comunes se incluyen:

    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        ul.lista-ul--color
          li
            span.fondo-color-primario.text-white.px-2.fw-bold(style="height: max-content;") A
            | Documento de visión.
          li
            span.fondo-color-primario.text-white.px-2.fw-bold(style="height: max-content;") B
            | Documento de especificación de requisitos.
          li 
            span.fondo-color-primario.text-white.px-2.fw-bold(style="height: max-content;") C
            | Diagramas de casos de uso.
          li 
            span.fondo-color-primario.text-white.px-2.fw-bold(style="height: max-content;") D
            | Modelos conceptuales (clases y entidad relación).
          li 
            span.fondo-color-primario.text-white.px-2.fw-bold(style="height: max-content;") E
            div
              span Diagramas que representan la vista de implementación como:

              ul.lista-ul--color.lista-personalizada-1.ps-0.pt-1
                li
                  i.fas.fa-cube
                  | Diagramas de secuencia.
                li
                  i.fas.fa-cube
                  | Diagramas de estados.
                li
                  i.fas.fa-cube
                  | Diagramas de colaboración, entre otros.
      .col-lg-6(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/59.png",style="max-width: 610px;")
    
    .fondo-personalizado-2.mb-5.pos-6
      .fondo-personalizado-2__contenido.pt-5.pb-4
        p.mb-4(data-aos="flip-up") Las disciplinas, por otra parte, representan un conjunto de actividades relacionadas con un área específica del proyecto y están inspiradas en el modelo en cascada. RUP establece las siguientes disciplinas según Kruchten (2003):

        .row.justify-content-center.mb-4
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] Secuencia de las fases en el desarrollo de proyectos
            .fondo-color-sistema-o.borde-7.p-4.shadow-1
              figure
                img.mx-auto(src="@/assets/curso/temas/61.svg",style="max-width: 518px;", alt="La imagen presenta una secuencia de fases en el desarrollo de proyectos: empieza con modelado de negocios, luego pasan a requerimientos, análisis y diseño, implementación, pruebas, despliegue, configuración y termina con administración del cambio y de proyectos.")
        p.mb-0 A continuación, se describen cada una de las disciplinas mencionadas y cómo estás aportan en el proceso.
        p.mb-0 RUP propone una categorización de roles encargados de la realización de actividades dentro de cada una de las disciplinas que son:


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
                  span Arquitectos de #[em software].
                li 
                  i.fas.fa-cog
                  | Diseñador de bases de datos.
                li 
                  i.fas.fa-cog
                  span Desarrollador #[em backend y frontend]. 
                li 
                  i.fas.fa-cog
                  | Cualquier otro rol relacionado con procesos de codificación o integración de código.
            .col-lg-5.order-first.order-lg-last
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 491px;")
          .row.justify-content-end
            .col-lg-6
              p.mb-lg-5.mb-3.fw-bold #[em Testers]
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
              p.mb-3 Incluye a todos los roles mencionados anteriormente en las categorías de Analistas, Desarrolladores y #[em Testers], reflejando su importancia en la gestión y operación de proyectos.
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
                  span #[em Stakeholders].
                li 
                  i.fas.fa-cog
                  | Cualquier otro rol no especificado anteriormente.
            .col-lg-5.order-first.order-lg-last
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 491px;")

    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")
        .borde-10.fondo-color-primario.p-3 
          .row.align-items-center
            .col-md-2.pe-md-0
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/62.svg",style="max-width: 106px;")
            .col-md-10
              p.mb-0.text-white Existen también metodologías catalogadas dentro de los marcos de trabajo tradicionales. Sin embargo, el propósito de este texto es resaltar las características principales de las más destacadas en la industria del #[em software]. Para aquellos interesados en profundizar sobre las ventajas y desventajas de estas y otras metodologías, se recomienda revisar la sección de materiales complementarios.
      .col-lg-5(data-aos="fade")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/63.png",style="max-width: 502px;")

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
