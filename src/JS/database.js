// ATENCIÓN: Se eliminaron todos los imports de imágenes.
// Las imágenes ahora se referencian directamente usando su ruta pública absoluta.

// Rutas de las imágenes de portada (public/proyectos/...)
const proyecto1 = '/proyectos/fabrica_performatica/fab_perf_1.webp';
const proyecto2 = '/proyectos/plan_maestro_mdq/master_1.webp';
const proyecto3 = '/proyectos/ciudad_vertical/Ciu_vert_1.webp';
const proyecto4 = '/proyectos/est_fluvial/est_fluv_1.webp';
const proyecto5 = '/proyectos/viv_colectiva/viv_colect_0.webp';
const proyecto6 = '/proyectos/VivColecArtYtrabajo/viv_art0.webp';
const proyecto7 = '/proyectos/BibliotecaSanNicolas/biblio0.webp';
const proyecto8 = '/proyectos/Concurso_estacion_facultad_derecho/concurso_estacion_fac_derecho_1.jpg';


// Array de datos para la sección de proyectos
export const projectsData = [
  {
    image: proyecto1, // imagen de portada
    title: `Fábrica Performática
    2024`,
    // Las rutas en galleryImages ahora son strings y usan el prefijo /proyectos/
    galleryImages: [
      '/proyectos/fabrica_performatica/fab_perf_2.webp', '/proyectos/fabrica_performatica/fab_perf_3.webp', '/proyectos/fabrica_performatica/fab_perf_4.webp', '/proyectos/fabrica_performatica/fab_perf_5.webp', '/proyectos/fabrica_performatica/fab_perf_6.webp', '/proyectos/fabrica_performatica/fab_perf_7.webp', '/proyectos/fabrica_performatica/fab_perf_8.webp', '/proyectos/fabrica_performatica/fab_perf_9.webp', '/proyectos/fabrica_performatica/fab_perf_10.webp',
      '/proyectos/fabrica_performatica/fab_perf_11.webp', '/proyectos/fabrica_performatica/fab_perf_12.webp', '/proyectos/fabrica_performatica/fab_perf_13.webp', '/proyectos/fabrica_performatica/fab_perf_14.webp', '/proyectos/fabrica_performatica/fab_perf_15.webp', '/proyectos/fabrica_performatica/fab_perf_16.webp', '/proyectos/fabrica_performatica/fab_perf_17.webp', '/proyectos/fabrica_performatica/fab_perf_18.webp', '/proyectos/fabrica_performatica/fab_perf_19.webp', '/proyectos/fabrica_performatica/fab_perf_20.webp',
      '/proyectos/fabrica_performatica/fab_perf_21.webp', '/proyectos/fabrica_performatica/fab_perf_22.webp', '/proyectos/fabrica_performatica/fab_perf_23.webp', '/proyectos/fabrica_performatica/fab_perf_24.webp', '/proyectos/fabrica_performatica/fab_perf_25.webp', '/proyectos/fabrica_performatica/fab_perf_26.webp', '/proyectos/fabrica_performatica/fab_perf_27.webp', '/proyectos/fabrica_performatica/fab_perf_28.webp', '/proyectos/fabrica_performatica/fab_perf_29.webp', '/proyectos/fabrica_performatica/fab_perf_30.webp', '/proyectos/fabrica_performatica/fab_perf_31.webp'
    ]
  },
  {
    image: proyecto2,
    title: `Plan maestro : 
      Zona portuaria Mar Del Plata 
      2023`,
    galleryImages: [
      '/proyectos/plan_maestro_mdq/master_2.webp', '/proyectos/plan_maestro_mdq/master_3.webp', '/proyectos/plan_maestro_mdq/master_4.webp', '/proyectos/plan_maestro_mdq/master_5.webp', '/proyectos/plan_maestro_mdq/master_6.webp', '/proyectos/plan_maestro_mdq/master_7.webp', '/proyectos/plan_maestro_mdq/master_8.webp',
      '/proyectos/plan_maestro_mdq/master_9.webp', '/proyectos/plan_maestro_mdq/master_10.webp', '/proyectos/plan_maestro_mdq/master_11.webp', '/proyectos/plan_maestro_mdq/master_12.webp', '/proyectos/plan_maestro_mdq/master_13.webp', '/proyectos/plan_maestro_mdq/master_14.webp', '/proyectos/plan_maestro_mdq/master_15.webp', '/proyectos/plan_maestro_mdq/master_16.webp'
    ]
  },
  {
    image: proyecto3,
    title: `Ciudad vertical
    2023`,
    galleryImages: [
      '/proyectos/ciudad_vertical/Ciu_vert_1.webp', '/proyectos/ciudad_vertical/Ciu_vert_2.webp', '/proyectos/ciudad_vertical/Ciu_vert_3.webp', '/proyectos/ciudad_vertical/Ciu_vert_4.webp', '/proyectos/ciudad_vertical/Ciu_vert_5.webp', '/proyectos/ciudad_vertical/Ciu_vert_6.webp', '/proyectos/ciudad_vertical/Ciu_vert_7.webp', '/proyectos/ciudad_vertical/Ciu_vert_8.webp', '/proyectos/ciudad_vertical/Ciu_vert_9.webp', '/proyectos/ciudad_vertical/Ciu_vert_10.webp',
      '/proyectos/ciudad_vertical/Ciu_vert_11.webp', '/proyectos/ciudad_vertical/Ciu_vert_12.webp', '/proyectos/ciudad_vertical/Ciu_vert_13.webp', '/proyectos/ciudad_vertical/Ciu_vert_14.webp', '/proyectos/ciudad_vertical/Ciu_vert_15.webp', '/proyectos/ciudad_vertical/Ciu_vert_16.webp', '/proyectos/ciudad_vertical/Ciu_vert_17.webp'
    ]
  },
  {
    image: proyecto4,
    title: `Estación fluvial
    2022`,
    galleryImages: [
      '/proyectos/est_fluvial/est_fluv_1.webp', '/proyectos/est_fluvial/est_fluv_2.webp', '/proyectos/est_fluvial/est_fluv_3.webp', '/proyectos/est_fluvial/est_fluv_4.webp', '/proyectos/est_fluvial/est_fluv_5.webp', '/proyectos/est_fluvial/est_fluv_6.webp', '/proyectos/est_fluvial/est_fluv_7.webp',
      '/proyectos/est_fluvial/est_fluv_8.webp', '/proyectos/est_fluvial/est_fluv_9.webp', '/proyectos/est_fluvial/est_fluv_10.webp', '/proyectos/est_fluvial/est_fluv_11.webp', '/proyectos/est_fluvial/est_fluv_12.webp', '/proyectos/est_fluvial/est_fluv_13.webp', '/proyectos/est_fluvial/est_fluv_14.webp'
    ]
  },
  {
    image: proyecto5,
    title: `Vivienda colectiva
    2022`,
    galleryImages: [
      '/proyectos/viv_colectiva/viv_colect_0.webp', '/proyectos/viv_colectiva/viv_colect_1.webp', '/proyectos/viv_colectiva/viv_colect_2.webp', '/proyectos/viv_colectiva/viv_colect_3.webp', '/proyectos/viv_colectiva/viv_colect_4.webp', '/proyectos/viv_colectiva/viv_colect_5.webp', '/proyectos/viv_colectiva/viv_colect_6.webp', '/proyectos/viv_colectiva/viv_colect_7.webp', '/proyectos/viv_colectiva/viv_colect_8.webp', '/proyectos/viv_colectiva/viv_colect_9.webp',
      '/proyectos/viv_colectiva/viv_colect_10.webp', '/proyectos/viv_colectiva/viv_colect_11.webp', '/proyectos/viv_colectiva/viv_colect_12.webp', '/proyectos/viv_colectiva/viv_colect_13.webp', '/proyectos/viv_colectiva/viv_colect_14.webp', '/proyectos/viv_colectiva/viv_colect_15.webp', '/proyectos/viv_colectiva/viv_colect_16.webp', '/proyectos/viv_colectiva/viv_colect_17.webp', '/proyectos/viv_colectiva/viv_colect_18.webp', '/proyectos/viv_colectiva/viv_colect_19.webp'
    ]
  }, {
    image: proyecto6, 
    title: `Vivienda Colectiva: Arte y Trabajo
    2021`,
    galleryImages: [
      '/proyectos/VivColecArtYtrabajo/viv_art0.webp', '/proyectos/VivColecArtYtrabajo/viv_art1.webp', '/proyectos/VivColecArtYtrabajo/viv_art2.webp', '/proyectos/VivColecArtYtrabajo/viv_art3.webp', '/proyectos/VivColecArtYtrabajo/viv_art4.webp', '/proyectos/VivColecArtYtrabajo/viv_art5.webp', '/proyectos/VivColecArtYtrabajo/viv_art6.webp', '/proyectos/VivColecArtYtrabajo/viv_art7.webp', '/proyectos/VivColecArtYtrabajo/viv_art8.webp', '/proyectos/VivColecArtYtrabajo/viv_art9.webp',
      '/proyectos/VivColecArtYtrabajo/viv_art10.webp', '/proyectos/VivColecArtYtrabajo/viv_art11.webp', '/proyectos/VivColecArtYtrabajo/viv_art12.webp', '/proyectos/VivColecArtYtrabajo/viv_art13.webp', '/proyectos/VivColecArtYtrabajo/viv_art14.webp', '/proyectos/VivColecArtYtrabajo/viv_art15.webp', '/proyectos/VivColecArtYtrabajo/viv_art16.webp', '/proyectos/VivColecArtYtrabajo/viv_art17.webp'
    ]
  },
  
  {
    image: proyecto7, 
    title: `Biblioteca San Nicolás
    2020`,
    galleryImages: [
      '/proyectos/BibliotecaSanNicolas/biblio0.webp', '/proyectos/BibliotecaSanNicolas/biblio1.webp', '/proyectos/BibliotecaSanNicolas/biblio2.webp', '/proyectos/BibliotecaSanNicolas/biblio3.webp', '/proyectos/BibliotecaSanNicolas/biblio4.webp', '/proyectos/BibliotecaSanNicolas/biblio5.webp', '/proyectos/BibliotecaSanNicolas/biblio6.webp', '/proyectos/BibliotecaSanNicolas/biblio7.webp', '/proyectos/BibliotecaSanNicolas/biblio8.webp', '/proyectos/BibliotecaSanNicolas/biblio9.webp',
      '/proyectos/BibliotecaSanNicolas/biblio10.webp', '/proyectos/BibliotecaSanNicolas/biblio11.webp', '/proyectos/BibliotecaSanNicolas/biblio12.webp', '/proyectos/BibliotecaSanNicolas/biblio13.webp', '/proyectos/BibliotecaSanNicolas/biblio14.webp', '/proyectos/BibliotecaSanNicolas/biblio15.webp'
    ]
  },
  
  {
    image: proyecto8, 
    title: `Concurso Nueva Estación de Facultad de Derecho
   2020`,
    galleryImages: [
      '/proyectos/Concurso_estacion_facultad_derecho/concurso_estacion_fac_derecho_1.jpg', '/proyectos/Concurso_estacion_facultad_derecho/concurso_estacion_fac_derecho_2.jpg'
    ]
  }
];

// Array de datos para la sección de bitacora
export const bitacoraData = [
  // Todas las imágenes usan el prefijo /bitacora/ y se eliminó el campo 'description'
  {
    image: '/bitacora/bitacora1.webp',
    title: '1. ',
  },
  {
    image: '/bitacora/bitacora2.webp',
    title: '2. ',
  },
  {
    image: '/bitacora/bitacora3.webp',
    title: '3. ',
  },
  {
    image: '/bitacora/bitacora4.webp',
    title: '4. ',
  },
  {
    image: '/bitacora/bitacora5.webp',
    title: '5. ',
  },
  {
    image: '/bitacora/bitacora6.webp',
    title: '6. ',
  },
  {
    image: '/bitacora/bitacora7.webp',
    title: '7. ',
  },
  {
    image: '/bitacora/bitacora8.webp',
    title: '8. ',
  },
  {
    image: '/bitacora/bitacora9.webp',
    title: '9. ',
  },
  {
    image: '/bitacora/bitacora10.webp',
    title: '10. ',
  },
  {
    image: '/bitacora/bitacora11.webp',
    title: '11. ',
  },
  {
    image: '/bitacora/bitacora12.webp',
    title: '12. ',
  },
  {
    image: '/bitacora/bitacora13.webp',
    title: '13. ',
  },
  {
    image: '/bitacora/bitacora14.webp',
    title: '14. ',
  },
  {
    image: '/bitacora/bitacora15.webp',
    title: '15. ',
  },
  {
    image: '/bitacora/bitacora16.webp',
    title: '16. ',
  },
  {
    image: '/bitacora/bitacora17.webp',
    title: '17. ',
  },
  {
    image: '/bitacora/bitacora18.webp',
    title: '18. ',
  },
  {
    image: '/bitacora/bitacora19.webp',
    title: '19. ',
  },
  {
    image: '/bitacora/bitacora20.webp',
    title: '20. ',
  },
  {
    image: '/bitacora/bitacora21.webp',
    title: '21. ',
  },
  {
    image: '/bitacora/bitacora22.webp',
    title: '22. ',
  },
  {
    image: '/bitacora/bitacora23.webp',
    title: '23. ',
  },
  {
    image: '/bitacora/bitacora24.webp',
    title: '24. ',
  },
  {
    image: '/bitacora/bitacora25.webp',
    title: '25. ',
  },
  {
    image: '/bitacora/bitacora26.webp',
    title: '26. ',
  },
  {
    image: '/bitacora/bitacora27.webp',
    title: '27. ',
  },
  {
    image: '/bitacora/bitacora28.webp',
    title: '28. ',
  },
  {
    image: '/bitacora/bitacora29.webp',
    title: '29. ',
  },
  {
    image: '/bitacora/bitacora30.webp',
    title: '30. ',
  },
  {
    image: '/bitacora/bitacora31.webp',
    title: '31. ',
  },
  {
    image: '/bitacora/bitacora32.webp',
    title: '32. ',
  },
  {
    image: '/bitacora/bitacora33.webp',
    title: '33. ',
  },
  {
    image: '/bitacora/bitacora34.webp',
    title: '34. ',
  },
  {
    image: '/bitacora/bitacora35.webp',
    title: '35. ',
  },
  {
    image: '/bitacora/bitacora36.webp',
    title: '36. ',
  },
  {
    image: '/bitacora/bitacora37.webp',
    title: '37. ',
  },
  {
    image: '/bitacora/bitacora38.webp',
    title: '38. ',
  },
  {
    image: '/bitacora/bitacora39.webp',
    title: '39. ',
  },
  {
    image: '/bitacora/bitacora40.webp',
    title: '40. ',
  },
  {
    image: '/bitacora/bitacora41.webp',
    title: '41. ',
  },
  {
    image: '/bitacora/bitacora42.webp',
    title: '42. ',
  },
  {
    image: '/bitacora/bitacora43.webp',
    title: '43. ',
  },
  {
    image: '/bitacora/bitacora44.webp',
    title: '44. ',
  },
  {
    image: '/bitacora/bitacora45.webp',
    title: '45. ',
  },
  {
    image: '/bitacora/bitacora46.webp',
    title: '46. ',
  },
  {
    image: '/bitacora/bitacora47.webp',
    title: '47. ',
  },
  {
    image: '/bitacora/bitacora48.webp',
    title: '48. ',
  },
  {
    image: '/bitacora/bitacora49.webp',
    title: '49. ',
  },
  {
    image: '/bitacora/bitacora50.webp',
    title: '50. ',
  },
  {
    image: '/bitacora/bitacora51.webp',
    title: '51. ',
  },

  {
    image: '/bitacora/bitacora52.webp',
    title: '52. ',
  },

  {
    image: '/bitacora/bitacora53.webp',
    title: '53. ',
  },

  {
    image: '/bitacora/bitacora54.webp',
    title: '54. ',
  },

  {
    image: '/bitacora/bitacora55.webp',
    title: '55. ',
  },
  {
    image: '/bitacora/bitacora56.webp',
    title: '56. ',
  },
];