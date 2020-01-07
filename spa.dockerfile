 
FROM node:last
MAINTAINER Tiago Mantay
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 3000