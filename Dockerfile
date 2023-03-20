FROM node:14.21.2

COPY . .

CMD ["node", "main.js"]