
// //Importing express module
// const express = require('express');
// //database connection
// const pgp = require('pg-promise')(/* options */)
// const db = pgp('postgres://school_3of8_user:jCsu1VMYT6WGXyBP6d2FRXcbWnLGBipV@dpg-cihsfbiip7vpelqibs20-a.frankfurt-postgres.render.com/school_3of8')


// db.one('SELECT * from school', 123)
//   .then((data) => {
//     console.log('DATA:', data.value)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })

// Importing required modules
const express = require('express');
const pgp = require('pg-promise')();

// Creating an Express app
const app = express();

// Database connection
// const db = pgp('postgres://school_3of8_user:jCsu1VMYT6WGXyBP6d2FRXcbWnLGBipV@dpg-cihsfbiip7vpelqibs20-a.frankfurt-postgres.render.com/school_3of8');

const db = pgp({
  connectionString: 'postgres://school_3of8_user:jCsu1VMYT6WGXyBP6d2FRXcbWnLGBipV@dpg-cihsfbiip7vpelqibs20-a.frankfurt-postgres.render.com/school_3of8',
  ssl: true
});


// Route to execute the query
app.get('/', (req, res) => {
  db.many('SELECT * FROM school')
    .then((data) => {
      console.log('DATA:', data); // Logging the retrieved data
      res.send(data); // Sending the data as the response
    })
    .catch((error) => {
      console.log('ERROR:', error); // Logging any errors
      res.status(500).send('Error occurred'); // Sending an error response
      res.end();
    });
});

// Starting the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

