import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Donations } from '../../api/donations/donations.js';
import { Locations } from '../../api/locations/locations.js';

import { Alerts } from '../../api/alerts/alerts.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {

  if(Locations.find().count() === 0) {
    var locations = [
        {
          "name": "CTS București",
          "address": "Str. C.Caracaş nr.2-8, sector 1",
          "phone": "031.405.36.60 / 031.405.36.61 / 031.405.36.62"
        },
        {
          "name": "Spitalul de Urgență Floreasca",
          "address": "Calea Floreasca 8",
          "phone": "021.317.01.21 (centrală)"
        },
        {
          "name": "Institutul Clinic Fundeni",
          "address": "Calea București 258",
          "phone": "021.318.04.00 (centrală)"
        },
        {
          "name": "Spitalul Militar",
          "address": "Strada Mircea Vulcănescu 88",
          "phone": "021.319.30.51 (centrală)"
        },
        {
          "name": "Spitalul Universitar de Urgență (program 8-12:30)",
          "address": "Splaiul Independentei 169",
          "phone": "021.318.05.19, interior 451"
        },
        {
          "name": "CTS Alba",
          "address": "B-dul Revoluţiei 1989 nr.23",
          "phone": "0358.401.874 / 0358.401.632"
        },
        {
          "name": "CTS Alexandria",
          "address": "Str. Mihăiţă Filipescu nr. 12-14",
          "phone": "0347.410.504 / 0347.410.505"
        },
        {
          "name": "CTS Arad",
          "address": "Str. Andrenyi Karoly nr. 2-4\n(fostă Spitalului)",
          "phone": "0357.809.113 / 0357.809.112"
        },
        {
          "name": "CTS Bacău",
          "address": "Str. Mărăşeşti nr.22",
          "phone": "0334.405.991 / 0334.405.992 / 0234.535.769"
        },
        {
          "name": "CTS Baia Mare",
          "address": "Str. G. Coşbuc nr.20A",
          "phone": "0362.808.019 / 0362.808.020"
        },
        {
          "name": "CTS Bârlad",
          "address": "Str. M. Kogălniceanu nr.11",
          "phone": "0335.414.489 / 0335.414.490"
        },
        {
          "name": "CTS Bistriţa",
          "address": "Str. N. Bălcescu nr.11A",
          "phone": "0363.401.801 / 0363.401.802"
        },
        {
          "name": "CTS Botoşani",
          "address": "Str. Marchian nr.91",
          "phone": "0331.401.661 / 0331.401.662"
        },
        {
          "name": "CTS Braşov",
          "address": "Str. V. Babeş nr.21",
          "phone": "0368.408.502 / 0368.408.503"
        },
        {
          "name": "CTS Brăila",
          "address": "Str. R. Câmpineanu nr.25",
          "phone": "0339.401.282 / 0339.401.283"
        },
        {
          "name": "CTS Buzău",
          "address": "Str. G-ral Grigore Baştan nr.2",
          "phone": "0338.401.283 / 0338.401.284"
        },
        {
          "name": "CTS Călăraşi",
          "address": "Str. Bărăganului nr.1",
          "phone": "0342.402.001 / 0342.402.002"
        },
        {
          "name": "CTS Cluj",
          "address": "Str. N. Bălcescu nr.18",
          "phone": "0364.411.254 / 0364.411.255"
        },
        {
          "name": "CTS Constanţa",
          "address": "Str. N. Iorga nr.85",
          "phone": "0341.180.013 / 0341.180.014"
        },
        {
          "name": "CTS Craiova",
          "address": "Str. Tabaci nr.1",
          "phone": "0351.430.080 / 0351.430.081"
        },
        {
          "name": "CTS Târgovişte",
          "address": "Str. I.C.Brătianu nr.4",
          "phone": "0345.401.504 / 0345.401.505"
        },
        {
          "name": "CTS Deva",
          "address": "Str. 22 Decembrie, bl.D1, parter",
          "phone": "0354.402.497 / 0354.402.539"
        },
        {
          "name": "CTS Hunedoara",
          "address": "B-dul Victoriei 14",
          "phone": "0354.402.557 / 0354.402.563"
        },
        {
          "name": "CTS Petroșani",
          "address": "Str. 22 Decembrie nr.1",
          "phone": "0354.402.619 / 0354.402.879"
        },
        {
          "name": "CTS Dr.Tr. Severin",
          "address": "Str. Carol I nr.16",
          "phone": "0352.401.412 / 0352.401.413"
        },
        {
          "name": "CTS Focşani",
          "address": "Str. Cuza Vodă nr.50-52",
          "phone": "0337.401.233 / 0337.401.234"
        },
        {
          "name": "CTS Galaţi",
          "address": "Str. Regiment 11 Siret nr. 48A",
          "phone": "0336.401.906 / 0336.401.234"
        },
        {
          "name": "CTS Giurgiu",
          "address": "Şos. Alexandriei nr.7-9",
          "phone": "0346.401.105 / 0346.401.108"
        },
        {
          "name": "CTS Iaşi",
          "address": "Str. N. Bălcescu nr.21",
          "phone": "0332.408.328 / 0332.408.329"
        },
        {
          "name": "CTS Mc. Ciuc",
          "address": "Aleea Avântului nr.1",
          "phone": "0366.401.521 / 0366.401.522"
        },
        {
          "name": "CTS Oradea",
          "address": "Str. Louis Pasteur nr.30",
          "phone": "0359.800.113 / 0359.800.112"
        },
        {
          "name": "CTS Piatra Neamţ",
          "address": "Str. Traian nr.5",
          "phone": "0333.401.152 / 0333.401.153"
        },
        {
          "name": "CTS Piteşti",
          "address": "Str. N. Vodă nr.43",
          "phone": "0348.410.161 / 0348.410.162"
        },
        {
          "name": "CTS Câmpulung Muscel",
          "address": "Str. Poenaru Bordea 12",
          "phone": "0348.410.504 / 0348.410.505"
        },
        {
          "name": "CTS Ploieşti",
          "address": "Şos. Vestului nr.24A",
          "phone": "0344.802.968 / 0344.802.969"
        },
        {
          "name": "CTS Reşiţa",
          "address": "Str. I.L. Caragiale nr.1",
          "phone": "0355.429.592 / 0355.429.591"
        },
        {
          "name": "CTS Rm. Vâlcea",
          "address": "Str. G-ral Magheru nr.54",
          "phone": "0350.420.504 / 0350.420.505"
        },
        {
          "name": "CTS Satu Mare",
          "address": "Str. Careului nr.26",
          "phone": "0361.881.202/ 0361.881.204"
        },
        {
          "name": "CTS Sf. Gheorghe",
          "address": "Str. Banki Donath nr.15A",
          "phone": "0367.401.521 / 0367.401.522"
        },
        {
          "name": "CTS Sibiu",
          "address": "B-dul C.Coposu nr.2-4",
          "phone": "0369.437.127 / 0369.437.128"
        },
        {
          "name": "CTS Slatina",
          "address": "Str. Ec. Theodoroiu nr.3",
          "phone": "0349.882.739 / 0349.882.740"
        },
        {
          "name": "CTS Slobozia",
          "address": "Str. Decebal nr.1",
          "phone": "0343.401.015 / 0343.401.016"
        },
        {
          "name": "CTS Suceava",
          "address": "B-dul 1 Dec. 1918 nr.11",
          "phone": "0330.803.370 / 0330.803.371"
        },
        {
          "name": "CTS Tg. Jiu",
          "address": "Str. 22 Decembrie nr.22bis",
          "phone": "0353.414.173 / 0353.414.174"
        },
        {
          "name": "CTS Tg. Mureş",
          "address": "Str. Molter Karoly nr.2",
          "phone": "0365.430.179 / 0365.455.030"
        },
        {
          "name": "CTS Timişoara",
          "address": "Str. Martir Marius Ciopec nr.1",
          "phone": "0356.008.985 / 0356.008.964"
        },
        {
          "name": "CTS Tulcea",
          "address": "Str. Gloriei nr.22",
          "phone": "0340.402.552 / 0340.402.553"
        },
        {
          "name": "CTS Zalău",
          "address": "Str. Simion Bărnuţiu nr.91",
          "phone": "0360.401.773 / 0360.401.774"
        },
        {
          "name": "CTSM Bucureşti",
          "address": "Str. C.Caracaş nr.2-8, sector 1",
          "phone": "0314.053.683 / 0314.053.311"
        }
    ];
    locations.forEach((location) => {
      Locations.insert(location);
    })
  }
  // if (Donations.find().count() === 0) {
    var now = new Date().getTime();

    // var bogdanId = Meteor.users.insert({
    //   email: 'bogdan@donator.ro',
    //   password: 'admin123',
    //   profile: { name: 'Bogdan Ghervan', gender: 'm', location: 'Bucuresti'  }
    // });
    // var bogdan = Meteor.users.findOne(bogdanId);

    Donations.insert({
      name: 'Spitalul Colentina',
      userId: 'bogdan@donator.ro',
      date: new Date(now - 3600 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      city: 'Bucuresti',
      code: '1234567890123'
    });
    Donations.insert({
      name: 'Spitalul Colentina',
      userId: 'bogdan@donator.ro',
      date: new Date(now - 7000 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      city: 'Bucuresti',
      code: '1234567890124'
    });
    Donations.insert({
      name: 'Spitalul Colentina',
      userId: 'bogdan@donator.ro',
      date: new Date(now - 10000 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      city: 'Bucuresti',
      code: '1234567890125'
    });
  // }

  // if (Alerts.find().count() === 0) {
    // var now = new Date().getTime();

    Alerts.insert({
      name: 'Spitalul Colentina',
      userId: 'bogdan@donator.ro',
      date: new Date(now - 3800 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      city: 'Bucuresti',
      status: 'active',
      bloodTypes: [ {
        bloodType: '01',
        rh: 'pozitiv'
      },
      {
        bloodType: 'A2',
        rh: 'negativ'
      },
      {
        bloodType: 'AB4',
        rh: 'pozitiv'
      }
      ],
      code: '1234567890123'
    });
    Alerts.insert({
      name: 'Spitalul Colentina',
      userId: 'bogdan@donator.ro',
      date: new Date(now - 7200 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      bloodTypes: [ {
        bloodType: '01',
        rh: 'pozitiv'
      },
      {
        bloodType: 'A2',
        rh: 'negativ'
      }
      ],
      city: 'Bucuresti',
      status: 'false',
      code: '1234567890124'
    });
    Alerts.insert({
      name: 'Spitalul Colentina',
      userId: 'bogdan@donator.ro',
      date: new Date(now - 10500 * 3600 * 1000),
      address: 'Stefan cel Mare 102',
      city: 'Bucuresti',
      status: 'false',
      bloodTypes: [ {
        bloodType: '01',
        rh: 'pozitiv'
      },
      {
        bloodType: 'B3',
        rh: 'negativ'
      },
      {
        bloodType: 'AB4',
        rh: 'pozitiv'
      }
      ],
      code: '1234567890125'
    });
  // }
});
