# Endpoints

**Checa integridade da API:**

- /healthcheck

**Cria um novo usuario:**

- [POST] - /trip/v1/users

  Ex de envio da requisição:

```
{
  "name": "John Doe6",
  "email": "johndoe@example.com",
  "password": "password"
}
```

**Busca todos os usuarios**:

- [GET] - /trip/v1/users

**Cria uma nova viagem**:

[POST] - trip/v1/trips

- Ex de envio da requisição:

```
{
  "name": "travelTeste2",
  "description": "travel@example.com"
}
```
