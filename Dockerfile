# Use an existing Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port 3000
EXPOSE 3000

# Set the command to run when the container starts
CMD [ "npm", "start" ]