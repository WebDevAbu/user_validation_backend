const express = require("express");
const router = express.Router();
const db = require("../connection/Connection.js");
const country = require("country-state-city").Country;
const state = require("country-state-city").State;
const city = require("country-state-city").City;

// get All data
exports.findAll = (req, res) => {
  console.log("find all");
  const sqlGet = `select * from user_details`;
  db.query(sqlGet, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(result);
  });
};

// get one data
exports.findOne = (req, res) => {
  const { id } = req.params;
  //   console.log("id-------", id);
  const sqlGet = `select * from user_details where id=?`;
  db.query(sqlGet, id, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(result);
  });
};

// add data
exports.addData = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    countryCode,
    mobile,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
  } = req.body;
  console.log("---->", req.body);
  const sqlInsert =
    "INSERT INTO user_details(firstName, lastName, email, countryCode, mobile, address1, address2, country, state, city, zipcode) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      firstName,
      lastName,
      email,
      countryCode,
      mobile,
      address1,
      address2,
      country,
      state,
      city,
      zipcode,
    ],
    (error, result) => {
      if (error) console.log(error);
      else {
        console.log("insert successful");
        res.status(200).send("insert successful");
      }
    }
  );
};

// delete data
exports.deleteData = (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM user_details WHERE id=?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) console.log(error);
    else {
      return res.status(200).send("delete successful.");
    }
  });
};

// update data
exports.updateData = (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    countryCode,
    email,
    mobile,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
  } = req.body;
  const sqlUpdate =
    "UPDATE user_details SET firstName=?, lastName=?, email=?, countryCode=?, mobile=?, address1=?, address2=?, country=?, state=?, city=?, zipcode=? WHERE id= ?";
  db.query(
    sqlUpdate,
    [
      firstName,
      lastName,
      email,
      countryCode,
      mobile,
      address1,
      address2,
      country,
      state,
      city,
      zipcode,
      id,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      // console.log(result);
      res.send(result);
    }
  );
};

// get all country
exports.findAllCountry = (req, res) => {
  return res.status(200).send(country.getAllCountries());
};

// get one country
exports.findOneCountry = (req, res) => {
  const { code } = req.params;
  return res.status(200).send(country.getCountryByCode(code));
};

// find state
exports.findState = (req, res) => {
  const { code } = req.params;
  return res.status(200).send(state.getStatesOfCountry(code));
};

// find city
exports.findCity = (req, res) => {
  const { country, state } = req.body;
  return res.status(200).send(city.getCitiesOfState(country, state));
};
