# Start from a base image with Node.js preinstalled
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application's source code from the local directory to the working directory inside the container
COPY . .

# Document the volume for users data
# VOLUME ["/usr/src/app/data"]

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run the app using CMD which defines your runtime
CMD [ "node", "app.js" ]
