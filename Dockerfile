FROM node:18
WORKDIR ~/Public/development/Section4
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "app.js"]
