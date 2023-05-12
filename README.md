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

**Busca todas as viagens**:

- [GET] - /trip/v1/trips

**Busca viagem pelo ID trazendo id e nome dos viajantes daquela viajem**:

- [GET] - /trip/v1/trips/:id

**Busca todos os custos**:

- [GET] - /trip/v1/expenses

**Cria um novo custo**:

[POST] - trip/v1/expenses

- Ex de envio da requisição:

```
{
  "trip_id": "9436e866-636c-499e-b55c-b59da3fd3b0e",
  "description": "Teste API",
  "value": 100.00,
  "payer": "1ff75b12-3819-4319-96bc-0cda0d075720",
  "debtors": ["c3b8a0cb-1bf9-40e2-b3a9-756b03a9b30d", "c5a58b87-205f-42bb-9a34-9ffa1bca0c72"]
}
```

**Busca viagens com os custos**:

- [GET] - /trip/v1/:trip_id/expenses
