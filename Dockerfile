FROM node:14.16.1-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]