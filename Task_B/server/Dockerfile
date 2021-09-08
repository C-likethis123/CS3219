FROM node:15.5

WORKDIR /app

COPY tsconfig.json ./
COPY package*.json ./

RUN npm install

COPY src ./src

RUN npm run build

EXPOSE 8080
CMD npm run start
