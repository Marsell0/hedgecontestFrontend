FROM node:lts-alpine

RUN npm install -g @vue/cli

RUN mkdir frontend/
COPY . frontend/
WORKDIR frontend/

COPY package*.json ./

# устанавливаем зависимости проекта
RUN npm install

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY . .

# собираем приложение для production с минификацией
RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "serve" ]