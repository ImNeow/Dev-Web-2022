FROM node:16

WORKDIR /usr/src/app

# Installation des dépendances
COPY package*.json ./
RUN npm install

# Copie des fichiers 
COPY . .

# Ouverture du port
EXPOSE 9592

# Lancement de l'application
CMD [ "node", "./bin/www" ]




