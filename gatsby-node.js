exports.createPages = async function({ actions }) {
  const dataNames = [
    'Żołynia',
    'Łańcut',
    'Leżajsk',
    'Rzeszów',
    'Jarosław',
    'Autostrada A4',
  ];
  const dataNamesClear = [
    'zolynia',
    'lancut',
    'lezajsk',
    'rzeszow',
    'jaroslaw',
    'autostrada-a4',
  ];

  dataNamesClear.forEach((city, key) => {
    actions.createPage({
      path: `pomoc-drogowa-${city}`,
      component: require.resolve(`./src/templates/CityTemplate.js`),
      context: { city: dataNames[key] },
    });
  });
};
