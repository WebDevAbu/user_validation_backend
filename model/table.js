const con = require("../connection/Connection.js");

const table = `CREATE TABLE IF NOT EXISTS user_details(
    id int NOT NULL AUTO_INCREMENT,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    countryCode varchar(255) NOT NULL,
    mobile varchar(255) NOT NULL,
    address1 varchar(255) NOT NULL,
    address2 varchar(255),
    country varchar(255) NOT NULL,
    state varchar(255) NOT NULL,
    city varchar(255) NOT NULL,
    zipcode int NOT NULL,
    PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

module.exports = table;
