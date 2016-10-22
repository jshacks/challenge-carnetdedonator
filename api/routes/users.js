var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
  res.json({
    data: {
      id: 'D1ABCDEF',
      name: 'Laura Ionescu',
      cnp: '2880208456123',
      email: 'laura.ionescu@gmail.com',
      bloodType: 0,
      latitude: 44.4268,
      longitude: 26.1025
    }
  });
});

/* GET user's donations. */
router.get('/:userId/donations', function(req, res, next) {
  res.json({
    data: [
      {
        id: 'D1ABCDEF',
        userId: 'U1ABCDEF',
        date: new Date(),
        address: 'Spitalul Fundeni, Sector 3'
      }, {
        id: 'D2ABCDEF',
        userId: 'U1ABCDEF',
        date: new Date(),
        address: 'Spitalul Elias'
      },
      {
        id: 'D3ABCDEF',
        userId: 'U1ABCDEF',
        date: new Date(),
        address: 'Centrul Regional de Transfuzii Sanguine Bucuresti'
      }
    ]
  });
});

module.exports = router;
