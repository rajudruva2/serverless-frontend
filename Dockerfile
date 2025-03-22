
# Use lightweight Node.js Alpine image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app and build it
COPY . . 
RUN npm run build

# Use nginx to serve the built React app
FROM nginx:alpine

# Remove default Nginx config and add a custom one for React routing
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built React app to Nginx's serving directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

