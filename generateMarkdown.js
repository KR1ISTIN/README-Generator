// returns a badge depending on which license the user chooses
function renderLicenseBadge(licenseName) {
   if (licenseName === 'Apache 2.0 License') {
    const license = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    return license
   } else if (licenseName === 'The MIT License') {
    const license = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    return license
   }  else if (licenseName === 'Boost Software License 1.0') {
    const license = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
    return license
   }  else if (licenseName === 'BSD 3-Clause License') {
    const license = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
    return license
   }  else if (licenseName === 'BSD 2-Clause License') {
    const license = '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'
    return license
   }  else if (licenseName === 'Mozilla Public License 2.0') {
    const license = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
    return license
   }  else if (licenseName === 'Eclipse Public License 1.0') {
    const license = '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'
    return license
   }  else if (licenseName === 'Creative Commons Zero') {
    const license = '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)'
    return license
   }  else if (licenseName === 'GNU Affero General Public License v3.0') {
    const license = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)'
    return license
   }  else if (licenseName === 'GNU General Public License v2.0') {
    const license = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)'
    return license
   }  else if (licenseName === 'GNU Lesser General Public License v2.1') {
    const license = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    return license
   } else if (licenseName === 'None'){
    const license = '';
    return license
   }

}
// returns links for more info about license
function renderLicenseLink(licenseLink) {
    if ( licenseLink === 'Apache 2.0 License') {
        const link = 'https://opensource.org/license/apache-2-0/';
        return link
    } else if (licenseLink === 'The MIT License') {
        const link = 'https://opensource.org/license/mit/'
        return link
    } else if (licenseLink === 'Boost Software License 1.0') {
        const link = 'https://www.boost.org/LICENSE_1_0.txt'
        return link
    } else if (licenseLink === 'BSD 3-Clause License') {
        const link = 'https://opensource.org/license/bsd-3-clause/'
        return link
    } else if (licenseLink === 'BSD 2-Clause License') {
        const link = 'https://opensource.org/license/bsd-2-clause/'
        return link
    }  else if (licenseLink === 'Mozilla Public License 2.0') {
        const link = 'https://opensource.org/license/mpl-2-0/'
        return link
    } else if (licenseLink === 'Eclipse Public License 1.0') {
        const link = 'https://opensource.org/license/epl-1-0/'
        return link
    } else if (licenseLink === 'Creative Commons Zero') {
        const link = 'https://creativecommons.org/publicdomain/zero/1.0/'
        return link
    } else if (licenseLink === 'GNU Affero General Public License v3.0') {
        const link = 'https://www.gnu.org/licenses/agpl-3.0'
        return link
    } else if (licenseLink === 'GNU General Public License v2.0') {
        const link = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
        return link
    }  else if (licenseLink === 'GNU Lesser General Public License v2.1') {
        const link = 'https://www.gnu.org/licenses/lgpl-3.0'
        return link
    } else if (licenseLink === 'None'){
        const link = '';
        return link
       }
}


module.exports = {
    renderLicenseLink,
    renderLicenseBadge,
};