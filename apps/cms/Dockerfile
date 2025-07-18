# apps/cms/Dockerfile
FROM node:18-alpine

WORKDIR /srv/app

# Install only production deps
COPY package.json package-lock.json ./
RUN npm ci --production

# Copy rest of Strapi
COPY . .

# Build the admin UI
RUN npm run build

# Expose and start
EXPOSE 1337
CMD ["npm", "run", "start"]
