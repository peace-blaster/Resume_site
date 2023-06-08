# Stage 1: Build the application
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the production build
FROM node:14-alpine
WORKDIR /app
COPY --from=build /app/build ./build
EXPOSE 80
CMD [ "npx", "serve", "-s", "build" ]

