FROM node:12.13.1-alpine
RUN apk --no-cache update && apk --no-cache add bash curl nmap net-tools bind-tools busybox-extras tzdata
RUN npm install yarn@1.19.1
ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /app
COPY . /app
RUN yarn install
EXPOSE 3000
CMD [ "yarn", "run", "serve" ]
