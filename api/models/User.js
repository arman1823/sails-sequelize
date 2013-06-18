
var User = sails.database.define('User', { 
	name		: sails.sequelize.STRING,
	username	: sails.sequelize.STRING
});
User.drop();
User.sync();
module.exports = User;

/*---------------------
	:: User
	-> model
---------------------*/
/*
module.exports = {
	attributes	: {
		username: 'STRING'	
	}
};
*/

/*
// Person.js
var Person = {
  name: 'STRING',
  age: 'INTEGER',
  birthDate: 'DATE',
  phoneNumber: 'STRING',
  emailAddress: 'STRING'
};

exports = Person;

// api/models/User.js
module.exports = {

 adapter: 'sails-mysql',
 user: 'root',
 password: 'thePassword',
 database: 'testdb',
 host: '127.0.0.1',
 

 attributes: {

    // Simple attribute:
    name: 'string',
    email: 'string',
    phoneNumber: {
      type: 'string',
      defaultsTo: '555-555-5555'
    }
 }
 
};

sails generate model Person
*/