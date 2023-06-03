FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN NODE_ENV=development npm ci
RUN npx tsc
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
