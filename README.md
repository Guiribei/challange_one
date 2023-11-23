🇧🇷

# Desafio #1 Escribo

<i>Bem-vindo ao primeiro desafio do processo seletivo! Este repositório contém um programa simples de JavaScript que pode ser executado em dois ambientes diferentes: através de um navegador ou no lado do servidor usando Docker.</i>

## Executando pelo Navegador

Para executar a lógica JavaScript em um ambiente de navegador, siga estes passos:

1. Vá até a pasta `browser_approach`.
2. Abra o arquivo `challenge.html` em seu navegador web de preferência.
3. Interaja com o desafio diretamente na interface do navegador.

## Executando no Terminal

Para aqueles que preferem uma experiência do lado do servidor, preparei uma infraestrutura que utiliza Docker e docker-compose, que permitirá que você interaja via terminal. Se os pré-requisitos forem atendidos, esse é um jeito mais rápido e direto no bash.
### Pré-requisitos

- Docker
- Docker Compose
- Utilitário Make

Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema Unix para prosseguir com a abordagem pelo terminal.

### Início Rápido com Make

Primeiro entre na pasta do repositório:

```bash
cd challenge_one
```

Assim, se você estiver em um sistema Unix que suporta Make, iniciar o programa é tão simples quanto executar um único comando:

```bash
make
```
Este comando invocará o `Makefile` que está configurado para construir e executar o container Docker com base nos arquivos do diretório `server_approach`.

### Docker Compose Direto no Windows ou Sistemas Sem Make

Se você estiver usando Windows, ou se o seu sistema Unix não suportar Makefiles, você pode usar diretamente o Docker Compose executando:

```bash
docker-compose -f server_approach/docker-compose.yml run challenge
```

Execute este comando a partir da raiz do repositório para construir a imagem Docker e executar o container.

## Testes

Para testar se tudo está funcionando, você pode inserir alguns números aleatórios (ou letras, símbolos, emojis, números negativos e estouros se você tem um espírito de QA 😈) e ver o resultado. Se encontrar algum comportamento inesperado, sinta-se à vontade para entrar em contato comigo! Ficarei feliz em corrigir o que estiver errado.

## Precisa de Ajuda?

Se você encontrar algum problema ou tiver dúvidas, por favor, crie uma issue neste repositório do GitHub, e eu lhe ajudarei o mais rápido possível.

Grato!

<hr>

🇺🇸

# Challenge #1 Escribo

<i>Welcome to Challenge One! This repository contains a simple JavaScript challenge that can be run in two different environments: through a browser or on the server-side using Docker.</i>

## Browser Approach

To run the JavaScript logic in a browser environment, follow these steps:

1. Navigate to the `browser_approach` folder.
2. Open the `challenge.html` file in your preferred web browser.
3. Interact with the challenge directly within the browser interface.

## Server-Side Approach

For those who prefer a server-side experience, I've prepared an infrastructure that utilizes Docker and docker-compose, which will allow you to interact via terminal. This allows for a seamless setup and execution of the challenge in a server environment.

### Prerequisites

- Docker
- Docker Compose
- Make Utility

Make sure you have both Docker and Docker Compose installed on your Unix-based system to proceed with the server-side approach.

### Quick Start with Make

First enter the repo folder:

```bash
cd challenge_one
```

Then, if you are on a Unix system that supports Make, starting the program is as simple as running a single command:

```bash
make
```

This command will invoke the `Makefile` which is configured to set up and run the Docker container as specified in the `server_approach` directory.

### Direct Docker Compose on Windows or Non-Make Systems

If you are using Windows, or if your Unix system does not support Makefiles, you can directly use Docker Compose by running:

```
docker-compose -f server_approach/docker-compose.yml run challenge
```

Execute this command from the root directory of the repository to build the Docker image and run the container.

## Testing

In order to test if everything is working, you can input some random numbers (or letters, simbols, emojis, overflows and negative numbers if you have a QA spirit 😈) and see the result. If you do find any non-expected behavior, feel free to contact me! I'll be pleased in correcting whatever was wrong.

## Need Help?

If you run into any issues or have questions, please feel free to create an issue in this GitHub repository, and I'll help you out as soon as possible.

Thanks!
