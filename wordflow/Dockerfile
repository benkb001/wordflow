FROM node:14-alpine AS build

WORKDIR /app
COPY .npmrc .npmrc
COPY package*.json ./
RUN npm install @wrdflow/common
RUN npm install

COPY . .
RUN npm run build-production

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/wordflow /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf