angular.module('automaHome').factory('usuarios', function ($http) {
    var cadastrar = function (usuario) {
        return $http.post('http://localhost:9000/v1/usuarios', usuario);
    };

    var autenticar = function (email, senha) {
        var auth = { email: email, senha: senha };
        return $http.post('http://localhost:9000/v1/usuarios/auth', auth);
    };

    return {
        cadastrar: cadastrar,
        autenticar: autenticar
    }
});