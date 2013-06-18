module.exports = (function(models) {
	// One-To-Many
	models.user.hasMany(models.project);
	models.project.belongsTo(models.user);
	
	// Many-To-Many	Test
	//models.user.hasMany(models.project, { useJunctionTable: false })		// Project.UserId
	//models.project.hasMany(models.user, { as: 'Workers', foreignKey: 'WorkerId', useJunctionTable: true })
	//models.project.hasMany(models.user, { useJunctionTable: false })
	//models.project.belongsTo(models.user)
	
	//models.project.hasMany(models.user, { as: 'Workers' })
	//models.project.hasMany(models.user, { as: 'Workers', foreignKey: 'ParentId', useJunctionTable: true })
});