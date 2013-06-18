
var Project = sails.database.define('Project', { 
	name		: sails.sequelize.STRING,
	type		: sails.sequelize.STRING
});
Project.drop();
Project.sync();
module.exports = Project;