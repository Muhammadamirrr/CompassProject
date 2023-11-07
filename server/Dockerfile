FROM node:latest
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["node", "build/server.js"]