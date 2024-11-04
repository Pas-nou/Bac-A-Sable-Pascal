FROM node:lts-alpine AS dev

WORKDIR /app
COPY *.json ./
COPY src src
COPY src/data src/data
RUN npm install
EXPOSE 4000

CMD ["npm", "run", "full"]