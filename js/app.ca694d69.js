(function(e){function n(n){for(var o,t,c=n[0],s=n[1],d=n[2],l=0,u=[];l<c.length;l++)t=c[l],Object.prototype.hasOwnProperty.call(r,t)&&r[t]&&u.push(r[t][0]),r[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(n);while(u.length)u.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],o=!0,t=1;t<a.length;t++){var c=a[t];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},t={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"5e64e4bd","chunk-0206bfa0":"db848401","chunk-110f1f0b":"61a4ed11","chunk-13a6037e":"0dbe5c65","chunk-179248a2":"d6cf2861","chunk-18f95272":"9d8cf629","chunk-2a9fce91":"0ecc359b","chunk-2c06842c":"6cae5bfb","chunk-2d0c5615":"75151c9d","chunk-2d0e96ec":"a0992f3a","chunk-2d208d90":"7ca99724","chunk-2d21d0e2":"662065e2","chunk-2d22c123":"3ab92924","chunk-2e80bb9a":"84e37d65","chunk-319206de":"0748c1e6","chunk-36769079":"db07006a","chunk-4cdd78c0":"0277c010","chunk-515a8379":"5df7d778","chunk-53ccb27e":"cc458c56","chunk-55d286b8":"f370762b","chunk-59974754":"12fa6331","chunk-5d1ce150":"6ee84259","chunk-60cbc06b":"c331d9c0","chunk-623f2040":"dfc3159f","chunk-659152b8":"592218b5","chunk-6a43ec24":"c4a1c2ef","chunk-6e1e538a":"0a30a368","chunk-6e613899":"042dd297","chunk-766a929b":"cee86727","chunk-7794bb60":"280b6865","chunk-c796899c":"d7fc5ff3","chunk-e8a7823a":"8074120d","chunk-fde47172":"53c5fbd8",comple:"7e760c05",creditos:"2d37fb69",glosario:"21ce2939",intro:"14286d3c",referencias:"5d5701c5",sintesis:"881e20fe",tema1:"026bcb08",tema2:"096d5e6f",tema3:"b6855c3d",tema4:"64867afa"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?n.push(t[e]):0!==t[e]&&a[e]&&n.push(t[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"144fe8e0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"a40274bd","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"3f6e7581","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"cd8c6689",creditos:"bc78b515",glosario:"e41e9b6e",intro:"31d6cfe0",referencias:"dacc3e1a",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var d=i[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===r))return n()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===r)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var o=n&&n.target&&n.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete t[e],m.parentNode.removeChild(m),a(i)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){t[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,a){o=r[e]=[n,a]}));n.push(o[2]=i);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",u.name="ChunkLoadError",u.type=o,u.request=t,a[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"2cad":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.83c6bc2c.png"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},r=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=i,s=a("2877"),d=Object(s["a"])(c,t,r,!1,null,null,null),l=d.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),m=a("8c4f"),f=a("ae58"),p=a("7e58");u["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Metodologías de desarrollo de <em>software</em>",descripcionCurso:"Las metodologías de desarrollo de <em>software</em> proponen un conjunto de procesos y actividades que deben ser desarrolladas por el equipo de desarrollo de <em>software</em> para realizar un trabajo organizado que sea fácil hacerle seguimiento y de esta forma establecer planes de mejora en busca de una mejor calidad de los productos y servicios que se desarrollan.",imagenBannerPrincipal:a("74b5"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("2cad")},{clases:["banner-principal-decorativo-2"],imagen:a("f533")},{clases:["banner-principal-decorativo-3"],imagen:a("5b70")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Metodologías de desarrollo de <em>software</em>",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Marcos de trabajos tradicionales",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Cascada",hash:"t_2_1"},{numero:"2.2",titulo:"Proceso Racional Unificado - RUP",hash:"t_2_2"}]},{nombreRuta:"tema3",numero:"3",titulo:"Marcos de trabajo ágiles",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Programación Extrema - XP",hash:"t_3_1"},{numero:"3.2",titulo:"Desarrollo rápido de aplicaciones - RAD",hash:"t_3_2"},{numero:"3.3",titulo:"<em>Scrum</em>",hash:"t_3_3"}]},{nombreRuta:"tema4",numero:"4",titulo:"Planeación de proyectos de <em>software</em>",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/228118_CF03_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"¿Qué son las metodologías tradicionales en el desarrollo de software?",referencia:"Henao, C. (2018). #1. ¿Qué son las metodologías tradicionales en el desarrollo de software?",tipo:"Video",link:"https://youtu.be/i8CPD1dW88k?si=n_wD0LM5WHg59CoO"},{tema:"¿Qué son las metodologías ágiles en el desarrollo de Software?",referencia:"Henao, C. (2018b). #2. ¿Qué son las metodologías ágiles en el desarrollo de Software?",tipo:"Video",link:"https://youtu.be/fHKsufzM7qQ?si=9HPATMJdNFGJeYHW"},{tema:"SCRUM en 6 minutos | Metodologías Ágiles",referencia:"Henao, C. (2018d). #3. SCRUM en 6 minutos | Metodologías Ágiles.",tipo:"Video",link:"https://youtu.be/HhC75IonpOU?si=9zcH8SvcdPyHmgwJ"}],glosario:[{termino:"Iteración",significado:"hace referencia a un ciclo limitado por tiempo donde se ejecutan actividades de análisis, diseño, construcción y pruebas."},{termino:"<em>Product Owner</em>",significado:"rol central de <em>Scrum</em> encargado de la gestión de la pila de producto y representante del cliente dentro del grupo de trabajo."},{termino:"<em>Scrum Master</em>",significado:"rol central de <em>Scrum</em> encargado de facilitar el trabajo del equipo de desarrollo y de mantener la aplicación del marco de trabajo <em>SCRUM</em>."},{termino:"<em>Stakeholders</em>",significado:"persona, organización o empresa interesada en el desarrollo del proyecto."}],referencias:[{referencia:"Agilemanifesto.org. (2021). Manifiesto por el desarrollo ágil de software. Agilemanifesto.org.",link:"https://agilemanifesto.org/iso/es/manifesto.html"},{referencia:"Beck, K., & Andrés, C. (2004b). Extreme Programming Explained: Embrace Change, 2nd Edition (The XP Series). Addison-Wesley.",link:""},{referencia:"Intl-blog.imgix.net. (2019). Burndown-chart.",link:""},{referencia:"Jeffries, R. (2011). What is Extreme Programming? Ronjeffries.com.",link:"https://ronjeffries.com/xprog/what-is-extreme-programming/"},{referencia:"Kruchten, P. (2003). The Rational Unified Process: An Introduction. Addison-Wesley Professional.",link:""},{referencia:"Maida, E, G., Pacienzia, J. (2015). Metodologías de desarrollo de software [en línea]. Tesis de Licenciatura en Sistemas y Computación. Facultad de Química e Ingeniería Fray Rogelio Bacon. Universidad Católica Argentina.",link:"https://repositorio.uca.edu.ar/bitstream/123456789/522/1/metodologias-desarrollo-software.pdf"},{referencia:"Man, M., Hafriz, M., Nural, A., Mohd, H., Maizura, N., Noor, M., Wan, W., Bakar, A., & Man, M. (2008). eWorks: Development of a Web Based Site Assessment Software for Construction Progress Project. Communications of the IBIMA, (5), 93-99.",link:""},{referencia:"Martin, J. (1991). Rapid Application Development. Macmillan Coll. Pngwing.com (s.f.) Marco de trabajo Scrum.",link:"https://www.pngwing.com/es/free-png-xqgjv"},{referencia:"Royce, W. W. (1970). Managing the Development of Large Software Systems. Proceedings of IEEE WESCON, 26, 328-388.",link:""},{referencia:"SCRUMstudy. (2013). A Guide to the Scrum Body of Knowledge (SBOK Guide). VMEdu Inc.",link:""},{referencia:"Sommerville, I., Galipienso, M. I. A., y Martínez, A. B. (2005). Ingeniería del software. Pearson Educación.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Olga Constanza Bermúdez Jaimes",cargo:"Responsable de Línea de Producción",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Jonathan Guerrero Astaiza",cargo:"Experto Temático",centro:"Centro de teleinformática y producción industrial - Regional Cauca"},{nombre:"Paola Alexandra Moya Peralta",cargo:"Evaluadora Instruccional",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Andrés Felipe Herrera Roldán",cargo:"Diseñador de Contenidos Digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Edwin Sneider Velandia Suárez",cargo:"Desarrollador Fullstack",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Edgar Mauricio Cortés García",cargo:"Actividad Didáctica",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Daniela Muñoz Bedoya",cargo:"Animador y Productor Multimedia",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Luis Gabriel Urueta Álvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"5b70":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-3.6c2efb49.png"},"74b5":function(e,n,a){e.exports=a.p+"img/banner-princiapal.dccda3fe.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,n,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.ef4a5b8f.png"},f533:function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.9b20e2ee.png"}});
//# sourceMappingURL=app.ca694d69.js.map