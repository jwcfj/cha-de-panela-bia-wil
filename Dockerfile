# Etapa 1: Construção da aplicação Angular
FROM node:24.7.0-alpine3.21 AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json (se houver) para instalar as dependências
COPY package*.json ./

# Instale as dependências do projeto Angular
RUN npm install

# Copie todos os arquivos do projeto para o contêiner
COPY . .

# Execute o build da aplicação Angular
RUN npm run build --prod

# Etapa 2: Configuração do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copie os arquivos buildados do estágio anterior para o Nginx
COPY --from=build /app/dist/lista-presentes/browser /usr/share/nginx/html

# Exponha a porta que o Nginx vai rodar
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
