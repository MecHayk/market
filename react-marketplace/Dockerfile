FROM node:18
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3005:3005
CMD ["npm", "run", "dev"]
