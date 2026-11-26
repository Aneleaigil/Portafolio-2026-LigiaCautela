/**
 * Contenido del caso BCI.
 * Los textos marcados con PENDIENTE no se pudieron leer con certeza en el diseño
 * entregado y deben confirmarse antes de publicar.
 */
export const PENDIENTE = "Texto pendiente de confirmar.";

export const caso = {
  volver: "Volver a Productos digitales",
  tags: ["Diseño de Producto", "App", "Banca", "Beneficios", "Experiencia"],
  title:
    "Definición de la alianza estratégica más valorada por los clientes y el diseño del flujo de canje de cash-back por beneficios",
  description:
    "Canje de cashback de Bci por beneficios: la duda era cuál beneficio era más atractivo para los usuarios. Como hipótesis teníamos las millas de American Airlines y luego la maleta adicional gratis, entre otras alianzas que Bci podía activar.",
  meta: [
    { label: "Cliente", value: "Banco Bci" },
    { label: "Mi rol", value: "Diseñador UX" },
    { label: "Periodo", value: "Diseñador UX" },
    { label: "Plataforma", value: "Web / App" },
    { label: "Herramientas", value: "Figma - Gemini - Google Analytics" },
  ],
  contexto: {
    title: "Contexto y Problemática",
    paragraphs: [
      "Hay una percepción de pérdida de beneficios por parte de los clientes del banco después del cambio de puntos Bci por Cashback. En ese momento solo estaba disponible el canje de cashback o puntos por uso de la tarjeta por dinero en tu cuenta corriente, pero como la media acumulada por los clientes no es tan alta, se percibe como pérdida de beneficios.",
      "Ante esto se plantea una serie de alianzas para agregar otro tipo de canje adicional al que existe, y se requiere validar las preferencias de los clientes antes de llevar a desarrollo. Para ello se propusieron alianzas u opciones que validar a través de un fakedoor (un experimento en productivo).",
      "También tenemos un segundo problema: el canje parcializado, que se testeó con un test de guerrilla y un prototipo hecho en Figma Make y publicado en Google Sites.",
    ],
  },
  proceso: {
    title: "Proceso",
    etapas: [
      {
        title: "Research",
        items: [
          {
            label: "Qué hice",
            text: "Analicé el cashback promedio acumulado y los beneficios más valorados, en Bci y en otros bancos. Hice benchmark nacional e internacional.",
          },
          {
            label: "Qué decidí",
            text: "Priorizar alternativas de canje según lo que declaraban los clientes en estudios previos.",
          },
          {
            label: "Qué validé",
            text: "Pre-validé el flujo con un usuario avanzado en IA y probé componentes con 12 clientes en guerrilla.",
          },
        ],
      },
      {
        title: "Ideación",
        items: [
          {
            label: "Qué hice",
            text: "Definí el flujo y cinco alternativas: millas American Airlines, maleta adicional, Mi Club Líder, pago de tarjeta de crédito y traspaso a cuenta de ahorro.",
          },
          {
            label: "Qué decidí",
            text: "Validar las alternativas con un fakedoor antes de construirlas. Hice el mapa de click para el fake door y definí tiempo de exposición y cantidad de clientes reducida.",
          },
          {
            label: "Qué validé",
            text: "El fakedoor recibió unos 2.000 clientes en 5 días. La opción más elegida fue el canje para pagar tarjetas y la 2da más elegida fue canje por Mi Club Líder.",
          },
        ],
      },
      {
        title: "Prototipado",
        items: [
          {
            label: "Qué hice",
            text: "Tres iteraciones del prototipo en alta fidelidad en Figma para el fakedoor y un prototipo del canje parcial hecho con IA Gemini.",
          },
          {
            label: "Qué decidí",
            text: "Usar el prototipo ajustado después del test de guerrilla e iteraciones con las opciones seleccionadas para hacer el mapa de clicks (tags) de Google Analytics para el fakedoor.",
          },
          {
            label: "Qué validé",
            text: "El flujo general se entendió en la prueba de guerrilla con 12 clientes. El canje parcial tuvo observaciones, y la mayoría canjeó el monto total.",
          },
        ],
      },
    ],
  },
  fakedoor: {
    title: "Prototipo para el Fakedoor",
    paragraphs: [PENDIENTE],
  },
  canjeParcial: {
    tag: "Canje Parcial",
    title: "Prototipo Canje Parcial",
    paragraphs: [PENDIENTE],
  },
  resultadosFakedoor: {
    title: "Resultados del Fakedoor",
    items: [
      { valor: "2000", texto: "Clientes participaron en el experimento durante 5 días." },
      { valor: "85% y 70%", texto: PENDIENTE },
      { valor: "Decisión", texto: PENDIENTE },
      { valor: "En producción", texto: PENDIENTE, destacado: true },
    ],
  },
  resultadosGuerrilla: {
    title: "Resultados del test de guerrilla",
    items: [
      { valor: "12 clientes", texto: PENDIENTE },
      { valor: "75%", texto: PENDIENTE },
      { valor: "Canje parcial", texto: PENDIENTE },
      { valor: "En producción", texto: PENDIENTE, destacado: true },
    ],
  },
};
