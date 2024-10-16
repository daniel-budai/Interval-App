FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

EXPOSE 5173
# Starta applikationen och ange port 5173 samt tillåt anslutningar via --host
CMD ["npm", "run", "preview", "--", "--port", "5173", "--host"]
