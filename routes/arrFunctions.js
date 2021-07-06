const express = require('express');
const router = express.Router();
const axios = require('axios');


const getArrNum = (arr) => {

  let arrNum = [];
  arr.forEach((item) => {
  arrNum.push(Number(item))
  });

  return arrNum;
};
  

const dataBase = async (array) => {
      
  const result = [];

  const getPlanet = array.map(async (id) => {
      const url = `https://swapi.dev/api/planets/${id}`;
      const { data } = await axios.get(url);
      result.push(`'id '${id}: ${data.name}`);
  });
  await Promise.all(getPlanet);

  return result;
}


module.exports = {
  getArrNum,
  dataBase };
