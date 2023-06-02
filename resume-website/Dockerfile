# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm ci --only=production

# Copy the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the application will run
EXPOSE 3000

# Set the command to run the application
CMD [ "npm", "start" ]
