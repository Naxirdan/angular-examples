# Angular PWA

Para usarlo deberemos compilar en prod la aplicación

```sh
  $ ng build --prod
```

Instalar http-server de manera global:

```sh
  $ sudo npm install -g http-server
```

Tras esto podemos servir la aplicacion con http-server

```sh
  $ http-server -p 8080 -c-1 dist/<project-name>
```
