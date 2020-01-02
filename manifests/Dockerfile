FROM node:12.13.1-alpine AS file-builder
RUN apk --no-cache update && apk --no-cache add bash curl nmap net-tools bind-tools busybox-extras tzdata
RUN npm install yarn@1.19.1
ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /app
COPY . /app
COPY manifests/default.conf /app
RUN npm run build
# EXPOSE 3000
# CMD [ "npm", "run", "serve" ]


FROM nginx:1.15
RUN apt-get -y update && \
    apt-get -y install net-tools curl vim
COPY --from=file-builder /app/public/* /usr/share/nginx/html
COPY --from=file-builder /app/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

