const SQLBuilder = require('../Structure/SQLBuilder');

class Livros {

    listarLivros() {
        return new Promise(function(resolve, reject) {
            try {
                const sqlQuery = `SELECT * FROM livros`;

                const sqlBuilder = new SQLBuilder();
                sqlBuilder
                    .query(sqlQuery)
                    .then(result => resolve(result))
                    .catch(err => reject(err));
            } catch(err) {
                reject(err);
            }
        });
    }

    adicionarLivro(nome, localizacao) {
        return new Promise(function(resolve, reject) {
            try {
                const sqlQuery = `INSERT INTO livros (nome, localizacao) VALUES (?, ?)`;

                const sqlBuilder = new SQLBuilder();
                sqlBuilder
                    .query(sqlQuery, [nome, localizacao])
                    .then(result => resolve(result))
                    .catch(err => reject(err));
            } catch(err) {
                reject(err);
            }
        });
    }

    removerLivro(idLivro) {
        return new Promise(function(resolve, reject) {
            try {
                const sqlQuery = `DELETE FROM livros WHERE id = ?`;

                const sqlBuilder = new SQLBuilder();
                sqlBuilder
                    .query(sqlQuery, [idLivro])
                    .then(result => resolve(result))
                    .catch(err => reject(err));
            } catch(err) {
                reject(err);
            }
        });
    }
}
module.exports = Livros;