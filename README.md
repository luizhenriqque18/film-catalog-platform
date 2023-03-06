# film-catalog-platform

### Compilação e empacotamento

A aplicação foi configurada para rodar em ambiente de container com `Docker`, então segue abixo instruções para a execução.

### Env

Para que a integração entre as aplicações funcione séra preciso criar um `.env` no mesmo nível do `docker-compose.yml` com as seguintes variaveis:

```.env
ADDRESS_DB_URL: mongodb://film:film@mongodb:27017/film-catalog
REACT_APP_AXIOS_URL: http://localhost:5000/api
```

### Execução

- **Docker-compose**

Inicializar Container

```bash
docker-compose up -d
```

Por padrão, o frontend estará disponível em [http://localhost:3000](http://localhost:3000)
