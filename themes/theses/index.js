/* eslint-disable no-unused-vars */

const legendData = [
  {
    name: 'theses.fr',
    color: '#9c126d',
    logo: '/themes/theses/images/logo.png',
    link: 'https://theses.fr/',
    desc: {
      fr: 'thèses de doctorat françaises',
      en: 'French doctoral theses',
    },
  },

];

/**
 * filter informations receive
 * @param {*} ec
 */
function label(ec) {
  return ec.ezproxyName;
}

/**
 * init counter of rtype and mime
 */
function init() {
  initTotalCounter([
    {
      name: 'HTML',
      color: '#d35400',
    },
    {
      name: 'PDF',
      color: '#c0392b',
    },
  ]);

  initCounter([
    {
      name: 'HTML',
      color: '#d35400',
    },
    {
      name: 'PDF',
      color: '#c0392b',
    },
  ]);
  displayTooltip = true;
  filterParameter = true;
}
