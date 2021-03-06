// dépendances modules standards
var express = require('express');

// dépendances modules spécifiques
require('./dbModelsImport.js');
//
var cors = require("./cors");

// configuration serveur
server = express();
server.configure(function () {
  server.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
  server.use(express.cookieParser());
  server.use(express.bodyParser());
  server.use(cors.express);
  // configuration du port d'écoute
  server.set('port', process.env.PORT || 3000);  
});

// 
require('./routes/router.js');

// démarrage serveur
server.listen(server.get('port'), function() {
  console.log('Server running on port ' + server.get('port') + '...');  
});

