
//Importing express module
const express = require('express');
//database connection
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://school_3of8_user:jCsu1VMYT6WGXyBP6d2FRXcbWnLGBipV@dpg-cihsfbiip7vpelqibs20-a/school_3of8')

const app = express();
const PORT = 3000;

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, "
			+ "and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
