conn = new Mongo();
db = conn.getDB("film-catalog");
db.createUser({ user: "film", pwd: "film", roles: [{ role: "readWrite", db: "film-catalog" }] });

db.createCollection('filmes');
db.filmes.insert([
    {
        "titulo": "Olhos Famintos 4 - Renascimento",
        "descricao": "O casal Chase e Laine vão para um festival onde Laine começa a ter premonições inexplicáveis e visões perturbadoras associadas ao passado da cidade. À medida que o festival começa, Laine acredita que um horror sobrenatural é invocado.",
        "imagem": { filename: "b9e9a789-100f-4209-afdd-173af58850b5.jpg" },
        "dataLancamento": "Janeiro 5 , 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }, {
        "titulo": "Gato de Botas 2 - O Último Pedido",
        "descricao": "O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele já gastou oito de suas nove vidas. Ele então parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.",
        "imagem": { filename: "adf82930-64d5-426f-a08e-face6e0396fd.jpg" },
        "dataLancamento": "5 de janeiro de 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }, {
        "titulo": "Homem-Formiga e a Vespa: Quantumania",
        "descricao": "O Homem-Formiga e a Vespa lutam contra Kang, o Conquistador, no reino quântico.",
        "imagem": { filename: "c0b53674-6b69-4e44-96a8-f153617646f8.jpg" },
        "dataLancamento": "fevereiro 16, 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }, {
        "titulo": "Creed III",
        "descricao": "Da Metro Goldwyn Mayer Pictures chega \"Creed III,\" primeiro filme realizado por Michael B. Jordan, que regressa ao seu papel de Adonis Creed na terceira parte deste franchise de sucesso.",
        "imagem": { filename: "5c505a0c-3f4b-4a41-8498-eceda28bb00a.jpg" },
        "dataLancamento": "Março 2, 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }, {
        "titulo": "Pânico 6",
        "descricao": "Sam, Tara, Chad e Mindy, os quatro sobreviventes do massacre realizado pelo Ghostface, decidem deixar Woodsboro para trás em busca de um novo começo em Nova York. Mas não demora muito para eles se tornarem alvo de um novo serial killer.",
        "imagem": { filename: "1ed81946-b71e-4160-b8e0-904433670893.jpg" },
        "dataLancamento": " Março 9, 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }, {
        "titulo": "Shazam! 2 - Fúria dos Deuses",
        "descricao": "Deuses antigos chegam à Terra em busca da magia roubada deles há muito tempo. Shazam e seus aliados são lançados em uma batalha por seus superpoderes, suas vidas e o destino do mundo.",
        "imagem": { filename: "e79e0b78-5e8b-4025-8c6d-f571699b9dc3.jpg" },
        "dataLancamento": " Março 16, 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }, {
        "titulo": "Jhon Wick 4: Baba Yaga",
        "descricao": "",
        "imagem": { filename: "885a9817-1cd7-4384-84bd-ffe8b3318ddc.jpg" },
        "dataLancamento": " Março 23, 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }, {
        "titulo": "Super Mario Bross - O Filme",
        "descricao": "Com o preço por sua cabeça cada vez maior, o lendário assassino de aluguel John Wick leva sua luta contra o High Table global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, do Japão a Berlim.",
        "imagem": { filename: "92f8d6f2-666e-4270-bec1-5d527d611006.jpg" },
        "dataLancamento": " Abril 6, 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }, {
        "titulo": "A Morte do Dêmonio - A Ascensão",
        "descricao": "Traduzido do inglês-Evil Dead Rise é um próximo filme de terror sobrenatural americano escrito e dirigido por Lee Cronin",
        "imagem": { filename: "75ecbd5c-ff66-4932-860f-ee5d41e670b4.jpg" },
        "dataLancamento": " Abril 20, 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }, {
        "titulo": "Velozes e Furiosos 10",
        "descricao": "Dom Toretto e sua família devem lidar com o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado para destruir o mundo de Dom e todos que ele ama.",
        "imagem": { filename: "9ffe1236-7b11-4645-9d4f-88f70a506bab.jpg" },
        "dataLancamento": " Maio 18, 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }, {
        "titulo": "Avatar: O Caminho da Água",
        "descricao": "Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.",
        "imagem": { filename: "844e2382-3912-4ffe-a46a-ec9d0819add1.jpg" },
        "dataLancamento": "Janeiro 5 , 2023",
        "created_at": "2023-03-01T22:40:45.497Z",
        "updated_at": "2023-03-01T22:40:45.497Z",
    }]);
