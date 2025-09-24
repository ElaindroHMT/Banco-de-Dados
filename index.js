var db = require('./db'); // garante DB inicializado
var UserController = require('./controllers/userController');

// Pequeno delay para garantir criação de tabela antes de operar (normalmente serialize cuida disso)
setTimeout(function(){
  console.log('--- criando usuário de teste ---');
  UserController.createExample();

  // listar após 1s para dar tempo ao insert
  setTimeout(function(){
    console.log('--- listando todos ---');
    UserController.listAll();
  }, 1000);
}, 200);
