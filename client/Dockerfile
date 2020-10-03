FROM node:alpine
 
ENV CI=true
 
WORKDIR /app

# Install deps
COPY package.json ./
RUN npm install

# Copying source files
COPY ./ ./

# Production build
RUN npm run build
 
CMD ["npm", "run", "start"]