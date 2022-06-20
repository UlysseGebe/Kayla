export default [
  {
    id: "1",
    title: "Quel âge ont vos enfants ?",
  },
  {
    id: "2",
    title: "Quels types d’activités aimez-vous ?",
    activities: [
      {
        label: {
          name: "Créative - DIY",
          image: require("../../assets/images/creative.png"),
        },
        value: 0,
      },
      {
        label: {
          name: "Calme",
          image: require("../../assets/images/calme.png"),
        },
        value: 1,
      },
      {
        label: {
          name: "Sportive",
          image: require("../../assets/images/sportive.png"),
        },
        value: 2,
      },
      {
        label: {
          name: "Éducative",
          image: require("../../assets/images/educative.png"),
        },
        value: 3,
      },
      {
        label: {
          name: "Amusante",
          image: require("../../assets/images/amusante.png"),
        },
        value: 4,
      },
      {
        label: {
          name: "Jeu de société",
          image: require("../../assets/images/societe.png"),
        },
        value: 5,
      },
    ],
  },
  {
    id: "3",
    title: "Bravo !",
    subtitle: "Tu peux maintenant t'inscrire pour accéder à nos offres !",
  },
];
