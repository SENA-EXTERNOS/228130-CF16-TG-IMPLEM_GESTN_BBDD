export default {
  global: {
    componenteFormativo:
      'Construcción de algoritmos en un entorno de desarrollo (IDE)',
    descripcionCurso:
      'Es a través de los lenguajes de programación se pueden crear diferentes soluciones y responder a millones de necesidades de la vida cotidiana por medio del desarrollo de programas o aplicaciones. Actualmente, están presentes en los diferentes sectores o industrias, pues contribuyen a desarrollar recursos capaces de responder a las deficiencias o vacíos del día a día.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/decorativo3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Lenguajes de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de lenguajes de programación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sintaxis de los lenguajes de programación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Entornos de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructuras de control',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ciclos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estructura de datos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos y funciones',
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
      tema: 'Estructura secuencial',
      referencia:
        'GSL Industrias. (7 de junio de 2021). <em>Estructura secuencial</em>. [Web log post]. Blogspot.',
      tipo: 'Blogs',
      link:
        'https://industriasgsl.com/blogs/automatizacion/que-es-la-estructura-secuencial ',
    },
    {
      tema: 'Estructuras de control',
      referencia: '<em>El libro de Python (2022)</em>. Estructura de control.',
      tipo: 'Página web',
      link: 'https://ellibrodepython.com/estructuras-control-python',
    },
    {
      tema: 'Estructura de datos',
      referencia:
        'Rootstack. (29 de diciembre de 2021) <em>Cómo funcionan las matrices en Python y cómo usarlas</em>. Web log post]. Blogspot.',
      tipo: 'Blogs',
      link: 'https://rootstack.com/es/blog/python  ',
    },
    {
      tema: 'Estructura de datos',
      referencia:
        'Python Software Foundation. (23 de septiembre de 2022). <em>El tutorial de Python</em>.',
      tipo: 'Página web',
      link: 'https://docs.python.org/es/3/tutorial/index.html ',
    },
    {
      tema: 'Entornos de desarrollos',
      referencia:
        'Laca, M. (12 de septiembre de 2018). <em>Programación estructurada</em>. Lenguaje Python.',
      tipo: 'Página web',
      link:
        'https://pythones.net/que-es-python-y-sus-caracteristicas/#Caracteristicas_de_Python ',
    },
    {
      tema: 'Estructura de datos',
      referencia:
        'Delgado, S. (17 de abril de 2022). <em>Aprende Python</em>. Estructura de datos. ',
      tipo: 'Libro PDF',
      link:
        'https://aprendepython.es/_downloads/907b5202c1466977a8d6bd3a2641453f/aprendepython.pdf ',
    },
    {
      tema: 'Ciclos',
      referencia:
        'Moreno, A. & Muñoz, S. (2020). <em>Bucles</em>. Python práctico.',
      tipo: 'Libro PDF',
      link:
        'https://www-ebooks7-24-com.bdigital.sena.edu.co/stage.aspx?il=&pg=&ed= ',
    },
    {
      tema: 'Operadores y tipos de datos',
      referencia:
        'Trejos, O. & Muñoz, L. (2020). <em>Operadores y tipos de datos. Introducción a la programación con Python</em>.',
      tipo: 'Libro PDF',
      link:
        'https://www-ebooks7-24-com.bdigital.sena.edu.co/stage.aspx?il=&pg=&ed= ',
    },
  ],
  glosario: [
    {
      termino: 'Código de un programa',
      significado:
        'la computadora lo usa para generar una versión del programa que es capaz de procesar',
    },
    {
      termino: 'Depurar',
      significado:
        'tarea o proceso especializado para corregir y eliminar errores en un código fuente durante la edición',
    },
    {
      termino: '<em>Frameworks</em>',
      significado:
        'herramienta cuyo objetivo es facilitar el desarrollo y la organización de un <em>software</em> o aplicación. ',
    },
    {
      termino: 'Interfaz',
      significado:
        'es un programa para que objetos no relacionados se comuniquen entre sí',
    },
    {
      termino: 'Librerías o bibliotecas',
      significado:
        'es un conjunto de códigos desarrollados por un programador para ser utilizados posteriormente por él mismo o por otros programadores',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'es el lenguaje utilizado para realizar el código fuente de todo programa',
    },
    {
      termino: 'Operadores',
      significado:
        'son elementos que relacionan de forma diferente, los valores de una o más variables y/o constantes. Es decir, los operadores nos permiten manipular valores',
    },
    {
      termino: 'Programación',
      significado:
        'es el proceso que se lleva a cabo tanto en el diseño como en el desarrollo de programas y aplicaciones  ',
    },
    {
      termino: '<em>Script</em>',
      significado:
        'instrucciones de un lenguaje de programación escritas en un archivo de texto',
    },
    {
      termino: 'Variable',
      significado:
        'es un espacio en la memoria para almacenar un valor que puede ser modificado a lo largo de la ejecución',
    },
  ],
  referencias: [
    {
      referencia:
        'Amos, D., Bader, A., Jablonski, J. & Heisler, F. 2020) <em>Python Basics: A Practical Introduction to Python 3</em>. Real Python.',
    },
    {
      referencia:
        'Joyanes, L. (2020). <em>Fundamentos de programación</em>. McGraw-Hill.',
      link:
        'https://www.ingebook.com/ib/NPcd/IB_Escritorio_Visualizar?cod_primaria=1000193&libro=10211 ',
    },
    {
      referencia:
        'Lewis, R.M. (2017). <em>Tutorial fácil de seguir para aprender la programación de Python en menos de una semana</em>. Studoku.',
      link:
        'https://www.studocu.com/es/document/universidad-nebrija/programacion-ii/tutorial-facil-de-seguir-para-aprender-la-programacion-de-python-en-menos-de-una-semana-by-r-m-lewis-z-liborg/13284599 ',
    },
    {
      referencia:
        'Rossum, G. (2017). <em>El tutorial de Python</em>. Python Software Foundation.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
