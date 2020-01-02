FROM node:12.13.1-alpine
RUN apk --no-cache update && apk --no-cache add bash curl nmap net-tools bind-tools busybox-extras tzdata
RUN npm install yarn@1.19.1
ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /app
COPY . /app
COPY manifests/default.conf /app
RUN yarn install
RUN npm run build

FROM nginx:1.15
RUN apt-get -y update && \
    apt-get -y install net-tools curl vim
RUN rm -rf /usr/share/nginx/html/*
COPY --from=0 /app/public/ /usr/share/nginx/html/
COPY --from=0 /app/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
#CMD ["servive", "nginx", "restart"]

