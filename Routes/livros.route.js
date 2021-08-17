const Livros = require('../Models/livros');

module.exports = function(server) {

    server.get('/livros', function(req, res, next) {
        try {
            let _livros = new Livros();
            _livros.listarLivros()
                .then(result => res.send(200, result))
                .catch(err => res.send(500, {error: err}));
        } catch(err) {
            res.send(500, {error: err});
        }
    });

    server.post('/livros', function(req, res, next) {
        try {
            let nome = req.body.nome;
            let localizacao = req.body.localizacao;
            if(!nome) throw 'Coloque o nome do livro.';
            if(!localizacao) throw 'Coloque a localizacao do livro.';

            let _livros = new Livros();
            _livros.adicionarLivro(nome, localizacao)
                .then(result => res.send(200, { message: 'Livro cadastrado com sucesso.', result: result }))
                .catch(err => res.send(500, {error: err}));
        } catch(err) {
            res.send(500, {error: err});
        }
    });

    server.del('/livros', function(req, res, next) {
        try {
            let idLivro = req.body.id_livro;
            if(!idLivro) throw 'Coloque o ID do livro.';

            let _livros = new Livros();
            _livros.removerLivro(idLivro)
                .then(result => {
                    result.affectedRows > 0 ? res.send(200, { message: 'Livro deletado com sucesso.', result: result }) : res.send(200, { message: 'Não existia nenhum livro com este ID.', result: result });
                })
                .catch(err => res.send(500, {error: err}));
        } catch(err) {
            res.send(500, {error: err});
        }
    });
}