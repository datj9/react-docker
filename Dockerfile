FROM node:alpine as builder
WORKDIR '/app'
COPY ./package*.json ./
RUN yarn
COPY . .
RUN yarn build
 
FROM nginx
EXPOSE 3000 80
COPY --from=0 /app/build /usr/share/nginx/html