conn = new Mongo();
db = conn.getDB("film-catalog");
db.createUser({user:"film",pwd:"film",roles:[{role:"readWrite", db:"film-catalog"}]});

db.createCollection('filmes');
db.filmes.insert([{
    "titulo": "Olhos Famintos 4 - Renascimento",
    "descricao": "",
    "imagem": "img",
    "dataLancamento": "Janeiro 5 , 2023",
    "created_at": "2023-03-01T22:40:45.497Z",
    "updated_at": "2023-03-01T22:40:45.497Z",
}, {
    "titulo": "Gato de Botas 2 - O Último Pedido",
    "descricao": "",
    "imagem": "img",
    "dataLancamento": "5 de janeiro de 2023",
    "created_at": "2023-03-01T22:40:45.497Z",
    "updated_at": "2023-03-01T22:40:45.497Z",
}, {
    "titulo": "Homem-Formiga e a Vespa: Quantumania",
    "descricao": "",
    "imagem": "img",
    "dataLancamento": "fevereiro 16, 2023",
    "created_at": "2023-03-01T22:40:45.497Z",
    "updated_at": "2023-03-01T22:40:45.497Z",
}, {
    "titulo": "Creed III",
    "descricao": "",
    "imagem": "img",
    "dataLancamento": "Março 2, 2023",
    "created_at": "2023-03-01T22:40:45.497Z",
    "updated_at": "2023-03-01T22:40:45.497Z",
}, {
    "titulo": "Pânico 6",
    "descricao": "",
    "imagem": "img",
    "dataLancamento": " Março 9, 2023",
    "created_at": "2023-03-01T22:40:45.497Z",
    "updated_at": "2023-03-01T22:40:45.497Z",
}, {
    "titulo": "Shazam! 2 - Fúria dos Deuses",
    "descricao": "",
    "imagem": "img",
    "dataLancamento": " Março 16, 2023",
    "created_at": "2023-03-01T22:40:45.497Z",
    "updated_at": "2023-03-01T22:40:45.497Z",
}, {
    "titulo": "Jhon Wick 4: Baba Yaga",
    "descricao": "",
    "imagem": "img",
    "dataLancamento": " Março 23, 2023",
    "created_at": "2023-03-01T22:40:45.497Z",
    "updated_at": "2023-03-01T22:40:45.497Z",
}, {
    "titulo": "Super Mario Bross - O Filme",
    "descricao": "",
    "imagem": "img",
    "dataLancamento": " Abril 6, 2023",
    "created_at": "2023-03-01T22:40:45.497Z",
    "updated_at": "2023-03-01T22:40:45.497Z",
}, {
    "titulo": "A Morte do Dêmonio - A Ascensão",
    "descricao": "",
    "imagem": "img",
    "dataLancamento": " Abril 20, 2023",
    "created_at": "2023-03-01T22:40:45.497Z",
    "updated_at": "2023-03-01T22:40:45.497Z",
}, {
    "titulo": "Velozes e Furiosos 10",
    "descricao": "",
    "imagem": "img",
    "dataLancamento": " Maio 18, 2023",
    "created_at": "2023-03-01T22:40:45.497Z",
    "updated_at": "2023-03-01T22:40:45.497Z",
}]);
