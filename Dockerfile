FROM node:17-alpine3.14

EXPOSE 3000

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "src"]