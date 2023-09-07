# Указываем базовый образ Node.js для сборки фронтенда
FROM node:18-alpine as build

# Устанавливаем рабочую директорию для приложения
WORKDIR /app    

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем приложение React.js
RUN npm run build   

# Копируем статические файлы сборки в Nginx
FROM nginx:alpine   

# Копируем файл конфигурации Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем статические файлы сборки из предыдущего этапа
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт, на котором работает Nginx
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]