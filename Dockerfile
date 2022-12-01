FROM node:19-alpine As Base

ENV PYTHONUNBUFFERED 1
WORKDIR /frontend

COPY package.json /frontend/package.json
COPY package-lock.json /frontend/package-lock.json

RUN npm install

#stage
FROM node:19-alpine AS Stage
COPY --from=Base /frontend /frontend
WORKDIR /frontend
COPY . .
RUN npm run build

#stage 3
FROM node:19-alpine
COPY --from=Stage /frontend/build /frontend/build
COPY . .
#dont use a docker file
# CMD ["npm", "start"]
