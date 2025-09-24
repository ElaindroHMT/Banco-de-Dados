var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var path = require('path');

var dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)){
  fs.mkdirSync(dataDir);
}

var dbPath = path.join(dataDir, 'database.sqlite');
var db = new sqlite3.Database(dbPath, function(err){
  if (err) {
    console.error('Erro ao abrir/ criar DB:', err.message);
  } else {
    console.log('Banco aberto em', dbPath);
  }
});

// Cria tabela users (id, name, email) se não existir
db.serialize(function(){
  db.run(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL);',
    function(err){
      if (err) {
        console.error('Erro criando tabela users:', err.message);
      } else {
        console.log('Tabela users pronta.');
      }
    }
  );
});

module.exports = db;
