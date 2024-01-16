FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV REACT_APP_URL=https://iatsun.onrender.com

RUN npm run build && npm install -g serve
CMD ["serve", "-s", "build"]