export default {
  global: {
    componenteFormativo: 'Metodologías de desarrollo de <em>software</em>',
    descripcionCurso:
      'Las metodologías de desarrollo de <em>software</em> proponen un conjunto de procesos y actividades que deben ser desarrolladas por el equipo de desarrollo de <em>software</em> para realizar un trabajo organizado que sea fácil hacerle seguimiento y de esta forma establecer planes de mejora en busca de una mejor calidad de los productos y servicios que se desarrollan.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Metodologías de desarrollo de <em>software</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marcos de trabajos tradicionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cascada',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Proceso Racional Unificado - RUP',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Marcos de trabajo ágiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Programación Extrema - XP',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Desarrollo rápido de aplicaciones - RAD',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<em>Scrum</em>',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planeación de proyectos de <em>software</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '¿Qué son las metodologías tradicionales en el desarrollo de software?',
      referencia:
        'Henao, C. (2018). #1. ¿Qué son las metodologías tradicionales en el desarrollo de software?',
      tipo: 'Video',
      link: 'https://youtu.be/i8CPD1dW88k?si=n_wD0LM5WHg59CoO',
    },
    {
      tema: '¿Qué son las metodologías ágiles en el desarrollo de Software?',
      referencia:
        'Henao, C. (2018b). #2. ¿Qué son las metodologías ágiles en el desarrollo de Software?',
      tipo: 'Video',
      link: 'https://youtu.be/fHKsufzM7qQ?si=9HPATMJdNFGJeYHW',
    },
    {
      tema: 'SCRUM en 6 minutos | Metodologías Ágiles',
      referencia:
        'Henao, C. (2018d). #3. SCRUM en 6 minutos | Metodologías Ágiles.',
      tipo: 'Video',
      link: 'https://youtu.be/HhC75IonpOU?si=9zcH8SvcdPyHmgwJ',
    },
  ],
  glosario: [
    {
      termino: 'Iteración',
      significado:
        'hace referencia a un ciclo limitado por tiempo donde se ejecutan actividades de análisis, diseño, construcción y pruebas.',
    },
    {
      termino: '<em>Product Owner</em>',
      significado:
        'rol central de <em>Scrum</em> encargado de la gestión de la pila de producto y representante del cliente dentro del grupo de trabajo.',
    },
    {
      termino: '<em>Scrum Master</em>',
      significado:
        'rol central de <em>Scrum</em> encargado de facilitar el trabajo del equipo de desarrollo y de mantener la aplicación del marco de trabajo <em>SCRUM</em>.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'persona, organización o empresa interesada en el desarrollo del proyecto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agilemanifesto.org. (2021). Manifiesto por el desarrollo ágil de software. Agilemanifesto.org.',
      link: 'https://agilemanifesto.org/iso/es/manifesto.html',
    },
    {
      referencia:
        'Beck, K., & Andrés, C. (2004b). Extreme Programming Explained: Embrace Change, 2nd Edition (The XP Series). Addison-Wesley.',
      link: '',
    },
    {
      referencia: 'Intl-blog.imgix.net. (2019). Burndown-chart.',
      link: '',
    },
    {
      referencia:
        'Jeffries, R. (2011). What is Extreme Programming? Ronjeffries.com.',
      link: 'https://ronjeffries.com/xprog/what-is-extreme-programming/',
    },
    {
      referencia:
        'Kruchten, P. (2003). The Rational Unified Process: An Introduction. Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Maida, E, G., Pacienzia, J. (2015). Metodologías de desarrollo de software [en línea]. Tesis de Licenciatura en Sistemas y Computación. Facultad de Química e Ingeniería Fray Rogelio Bacon. Universidad Católica Argentina.',
      link:
        'https://repositorio.uca.edu.ar/bitstream/123456789/522/1/metodologias-desarrollo-software.pdf',
    },
    {
      referencia:
        'Man, M., Hafriz, M., Nural, A., Mohd, H., Maizura, N., Noor, M., Wan, W., Bakar, A., & Man, M. (2008). eWorks: Development of a Web Based Site Assessment Software for Construction Progress Project. Communications of the IBIMA, (5), 93-99.',
      link: '',
    },
    {
      referencia:
        'Martin, J. (1991). Rapid Application Development. Macmillan Coll. Pngwing.com (s.f.) Marco de trabajo Scrum.',
      link: 'https://www.pngwing.com/es/free-png-xqgjv',
    },
    {
      referencia:
        'Royce, W. W. (1970). Managing the Development of Large Software Systems. Proceedings of IEEE WESCON, 26, 328-388.',
      link: '',
    },
    {
      referencia:
        'SCRUMstudy. (2013). A Guide to the Scrum Body of Knowledge (SBOK Guide). VMEdu Inc.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I., Galipienso, M. I. A., y Martínez, A. B. (2005). Ingeniería del software. Pearson Educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto Temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
