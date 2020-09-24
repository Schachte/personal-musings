FROM node:alpine

ARG port
ENV port=$port

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]

