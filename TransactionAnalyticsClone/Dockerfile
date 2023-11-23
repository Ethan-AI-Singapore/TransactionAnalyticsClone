# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy all the files from the current directory to the working directory in the container
COPY . .

# Expose the port on which your Node.js application runs
EXPOSE 8000

# Command to run your Node.js application
CMD ["node", "index.js"]
