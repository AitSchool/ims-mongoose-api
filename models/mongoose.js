// 引用配置文件
const configs = require('../config');
const uri = configs.mongodb.uri;
const db = configs.mongodb.db;
var mongoose = require('mongoose');
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  poolSize: 10,
};
mongoose.connect(uri, options);
mongoose.connection.on('connected', function () {    
  console.log('Mongoose connection open');  
});
mongoose.connection.on('error',function (err) {    
  console.log('Mongoose connection error: ' + err);  
});    
mongoose.connection.on('disconnected', function () {    
  console.log('Mongoose connection disconnected');  
});  

module.exports = mongoose;