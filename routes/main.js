const express = require('express');
const router = express.Router();
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const sendPlanet = require('./arrFunctions.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('main', { title: 'Express' });
});

router.post('/main', upload.none(), async (req, res) => {

  const { clientData } = req.body;
  const arrUserInfo = clientData.split(',');
  
  const getArray = sendPlanet.getArrNum(arrUserInfo);
  const baseResult = await sendPlanet.dataBase(getArray);
  
       
  res.json( baseResult );
});


module.exports = router;
