FROM nginx:alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY frontend/public /usr/share/nginx/html
COPY frontend/src /usr/share/nginx/html/src
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]