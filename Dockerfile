#builder
FROM Node:20 as builder

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]
