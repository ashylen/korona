exports.createPages = async function({ actions }) {
  const dataNames = [
    'Żołynia',
    'Łańcut',
    'Leżajsk',
    'Rzeszów',
    'Jarosław',
    'Przeworsk',
    'Autostrada A4',
  ];
  const dataNamesClear = [
    'zolynia',
    'lancut',
    'lezajsk',
    'rzeszow',
    'jaroslaw',
    'przeworsk',
    'autostrada-a4',
  ];

  dataNamesClear.forEach((city, key) => {
    actions.createPage({
      path: `pomoc-drogowa-${city}`,
      component: require.resolve(`./src/templates/CityTemplate.js`),
      context: { city: dataNames[key] },
    });
  });

  dataNamesClear.forEach((city, key) => {
    actions.createPage({
      path: `${city}`,
      component: require.resolve(`./src/templates/CityOnlyTemplate.js`),
      context: { city: dataNames[key] },
    });
  });
};
