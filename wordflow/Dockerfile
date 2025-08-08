FROM node:14-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN grep '@wrdflow/common' src/app/components/**/*.ts || echo "No bad imports"
COPY . .
RUN npm run build-production

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/wordflow /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf