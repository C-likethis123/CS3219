FROM node:13-alpine

WORKDIR /app

# Copy uncommonly changed devDependencies 
COPY package.json yarn.lock ./

# Install only packages required in production
RUN npm install --production

# Copy rest of the source code and node modules
COPY . .

# Expose port 3000
EXPOSE 3000

# Run this command when we run the docker image
CMD node index.js
