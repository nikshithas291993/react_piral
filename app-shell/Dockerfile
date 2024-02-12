# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the content of the local src directory to /app in the container
COPY . .

# Expose port 1234
EXPOSE 1234

# Run npm start when the container launches
CMD ["npm", "start"]
