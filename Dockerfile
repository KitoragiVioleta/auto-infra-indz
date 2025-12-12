FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm i
COPY src ./src
EXPOSE 8080
CMD ["npm", "start"]
