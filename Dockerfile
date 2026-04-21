# Stage 1: Build the Vite frontend
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Setup the production server
FROM node:20-alpine
WORKDIR /app

# Install production dependencies only (for your Express server)
COPY package*.json ./
RUN npm install --omit=dev

# Copy the built dist folder and your service folder
COPY --from=builder /app/dist ./dist
COPY service ./service

EXPOSE 8080
CMD ["node", "service/index.js"]