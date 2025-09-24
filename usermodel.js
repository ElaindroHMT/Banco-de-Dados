var db = require('../db');

var UserModel = {};

// cria usuário: dados = {name: 'Nome', email: 'a@b.com'}, cb(err, lastID)
UserModel.create = function(dados, cb){
  var sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.run(sql, [dados.name, dados.email], function(err){
    if (err) return cb(err);
    cb(null, this.lastID);
  });
};

// busca por id: cb(err, row)
UserModel.getById = function(id, cb){
  var sql = 'SELECT id, name, email FROM users WHERE id = ?';
  db.get(sql, [id], function(err, row){
    cb(err, row);
  });
};

// lista todos: cb(err, rows)
UserModel.getAll = function(cb){
  var sql = 'SELECT id, name, email FROM users';
  db.all(sql, [], function(err, rows){
    cb(err, rows);
  });
};

// atualiza por id: dados = {name, email}, cb(err, changes)
UserModel.update = function(id, dados, cb){
  var sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.run(sql, [dados.name, dados.email, id], function(err){
    if (err) return cb(err);
    cb(null, this.changes);
  });
};

// remove por id: cb(err, changes)
UserModel.remove = function(id, cb){
  var sql = 'DELETE FROM users WHERE id = ?';
  db.run(sql, [id], function(err){
    if (err) return cb(err);
    cb(null, this.changes);
  });
};

module.exports = UserModel;
