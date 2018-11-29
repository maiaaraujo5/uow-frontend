from node:7
WORKDIR /app
RUN npm i http-server
COPY . /app
CMD ["http-server"]
EXPOSE 8080