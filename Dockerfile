# Step 1: Build React App
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build the app
COPY . .

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["npm", "start"]

