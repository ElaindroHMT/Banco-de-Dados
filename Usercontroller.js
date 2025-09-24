var User = require('../models/userModel');

var UserController = {};

// criar e mostrar resultado
UserController.createExample = function(){
  var dados = { name: 'João Exemplo', email: 'joao@example.com' };
  User.create(dados, function(err, id){
    if (err) {
      return console.error('Erro criando usuário:', err.message);
    }
    console.log('Usuário criado com id =', id);

    // buscar por id
    User.getById(id, function(err, row){
      if (err) return console.error(err);
      console.log('Usuário buscado:', row);
    });
  });
};

// listar todos
UserController.listAll = function(){
  User.getAll(function(err, rows){
    if (err) return console.error('Erro listando:', err);
    console.log('Todos os usuários:', rows);
  });
};

module.exports = UserController;
