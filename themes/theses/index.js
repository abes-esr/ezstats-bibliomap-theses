/* eslint-disable no-unused-vars */

const legendData = [
  {
    name: 'INSB',
    color: '#9c126d',
    logo: '/themes/theses/images/bibcnrs-logo.svg',
    link: 'https://bib.cnrs.fr/category/biologie/',
    desc: {
      fr: 'Biologie',
      en: 'Biology',
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
