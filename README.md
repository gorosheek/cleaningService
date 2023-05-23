# cleaningService
Для начала нужно установить пакета
```bash
npm i
```

Выполнить применение уже существующих миграций, перед этим убедитесь что 
в файле ```.env``` верно указан адрес к вашей бд, если нет то её можно создать (не создавая таблицы)
либо вы можете поставить свои данные в ```.env```
```
prisma migrate up

//коммент от Нади: у меня сработало npx prisma migrate dev
//если вы запускаете бд через докер, то держите docker run --name cleaning -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=0000 -e POSTGRES_DB=CleaningService -d postgres
```

Запуск
```bash
npm run dev
```

## Prisma
С бд работаем через ORM Prisma

Если хотите изменить модели меняем их в файлике 
```bash
prisma/schema.prisma
```
Затем нужно прописать миграцию, она автоматически сразу встанет в бд (вместо ```init``` нужно навзвание )
```bash
 npx prisma migrate dev --name init
```