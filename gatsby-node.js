exports.createPages = async function({ actions }) {
  const dataNames = ['Żołynia', 'Łańcut', 'Leżajsk'];
  const dataNamesClear = ['zolynia', 'lancut', 'lezajsk'];

  dataNamesClear.forEach((city, key) => {
    actions.createPage({
      path: `pomoc-drogowa-${city}`,
      component: require.resolve(`./src/templates/CityTemplate.js`),
      context: { city: dataNames[key] },
    });
  });
};
