# apps/web/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy source & build
COPY . .
RUN npm run build

# Expose and start
EXPOSE 3000
CMD ["npm", "run", "start"]
