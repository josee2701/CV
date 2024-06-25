# frontend/Dockerfile
FROM node:16

WORKDIR /app

# Copiar package.json y yarn.lock
COPY package.json ./
COPY yarn.lock ./

# Instalar dependencias
RUN yarn install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación
RUN yarn build

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["yarn", "start"]
