FROM node:17.6.0
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm i
EXPOSE 8000
COPY . /app
ENTRYPOINT ["npm","start"]
