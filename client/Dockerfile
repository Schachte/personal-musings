FROM node:alpine
 
ENV hostName=https://dev.ryan-schachte.com
ENV CI=true
 
WORKDIR /app

COPY package.json ./
RUN npm install

COPY ./ ./

RUN npm run build
 
CMD ["yarn", "run", "start"]
