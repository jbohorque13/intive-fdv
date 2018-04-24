
# React, Redux, Sass & Webpack Starter
Aplicación ejercicio para alimentar con datos una tabla mediante la inserción de datos por un formulario, persistiendo los datos en el local storage.   

### Empezar!
```
git clone
cd intive-fdv
npm i
```

### Arrancar el Servidor:
```

npm run start:dev

```

### Construir:
```

npm run build

```

#### Estructura.

```
/
├─ public/
|  ├─ dist/
|  |  ├─ bundle.css           # CSS compilado de SASS
|  |  ├─ bundle.js            # js compilados.
|  ├─ index.html              # contenido root
└─ src/
   ├─ actions/                # Crear acciones aquí.
   |  
   ├─ components/             # crear componentes aquí
   |  ├─ Form.js
   |  ├─ Table.js
   ├─ constants/              # Define action types here.
   |  ├─ ActionTypes.js
   ├─ reducers/               # Create reducers here.
   |  ├─ users.js
   |  ├─ index.js             
   ├─ styles/                 # Stylos aquí.
   |  ├─ main.scss
   ├─ App.js                  # Include los componentes aquí.
   ├─ index.js                
   └─ store.js                # Crear y exportar store.
```

#### The MIT License (MIT)
MIT © 2018 Josue Bohorquez