# Weather Forecast API

## Descrição
Weather Forecast API é um serviço RESTful construído com NestJS que fornece previsões do tempo atuais para cidades ao redor do mundo.

## Pré-requisitos
Antes de iniciar, certifique-se de ter instalado em sua máquina:
- Node.js (versão 18.x ou superior)
- npm (geralmente vem com o Node.js)
- NestJS CLI (instalação via npm)

## Configuração

### Variáveis de Ambiente
A seguir está a tabela de variáveis de ambiente necessárias para configurar a aplicação, juntamente com seus valores padrão (quando aplicável):

| Variável            | Descrição                               | Valor Padrão        |
|---------------------|-----------------------------------------|---------------------|
| `WEATHER_API_KEY`   | Chave da API para o serviço de clima    | *Necessário*        |
| `WEATHER_API_URL`      | URL da API do serviço de clima    | *Necessário*        |
| `LOG_LEVEL`         | Nível de detalhe dos logs               | `debug`             |

- **Nota**: Certifique-se de substituir os valores de `WEATHER_API_KEY` e `WEATHER_API_URL` com as informações reais para o funcionamento adequado da aplicação.

### Configurando as Variáveis de Ambiente
1. Copie o arquivo `.env.example` para um novo arquivo chamado `.env`.
2. Preencha as variáveis necessárias no arquivo `.env`, como a chave da API de previsão do tempo.

## Executando a Aplicação
Para executar a aplicação em um ambiente de desenvolvimento, use o seguinte comando:
```bash
npm run start:dev
```
A API estará acessível via http://localhost:3000/.

## Endpoints da API
 - GET /weather/city?name=New York - Obtém a previsão do tempo para uma cidade específica.
 - GET /weather/cities?names=New York&names=Sao Paulo- Obtém a previsão do tempo para uma lista de cidades.