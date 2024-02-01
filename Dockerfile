# base on alpine nodejs image
FROM node:alpine
# set working directory
WORKDIR /usr/src/app
# copy package.json to working directory
COPY app.js ./

EXPOSE 3000
# run app
CMD ["node", "app.js"]
