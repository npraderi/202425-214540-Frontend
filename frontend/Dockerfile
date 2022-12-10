FROM node:16-alpine AS build
WORKDIR /app
RUN npm install -g @angular/cli@14.2.3
COPY package.json package-lock.json ./
RUN npm install
COPY src/ ./src
COPY .browserslistrc karma.conf.js *.json ./
RUN npm run ng build
# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:latest
# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/frontend /usr/share/nginx/html
# Expose port 80
EXPOSE 80