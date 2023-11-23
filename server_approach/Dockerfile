FROM node:21-alpine3.18

WORKDIR /usr/src/app

COPY challenge.js ./

RUN npm install readline-sync && \
    apk add --no-cache perl

CMD [ "node", "challenge.js" ]
