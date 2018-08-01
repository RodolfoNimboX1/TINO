module.exports = function (sequelize, DataTypes) {
    // Add code here to create a Post model
    var Report = sequelize.define("report", {
      // movements database starts here 
       ticketpromedio: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      totaltransactions: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      totalincome: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
     
      
    });

    return Report;
    
  };