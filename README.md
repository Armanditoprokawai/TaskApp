# TaskApp

TaskApp es una aplicación híbrida sencilla para organizar tareas académicas. Está construida con Ionic y Angular en modo standalone.

## Requisitos

- Node.js y npm.
- Ionic CLI (opcional, pero útil para ejecutar `ionic serve`).
- PowerShell en Windows: usa `npm.cmd` e `ionic.cmd` si la política del equipo bloquea los scripts `.ps1`.

## Instalación y ejecución

Desde la carpeta `TaskApp`:

```powershell
npm.cmd install
ionic.cmd serve
```

La aplicación se abrirá normalmente en `http://localhost:8100`. También puedes iniciar el servidor con `npm.cmd start`.

## Funciones

- Crear tareas con título, descripción y prioridad alta, media o baja.
- Validar que el título sea obligatorio y tenga al menos cinco caracteres.
- Marcar tareas como completadas; su texto aparece tachado.
- Eliminar tareas.
- Guardar las tareas en `localStorage` para conservarlas al recargar la página en el mismo navegador.

## Estructura principal

- `src/app/models/tarea.ts`: tipos e interfaz de la tarea.
- `src/app/services/tarea.ts`: operaciones de tareas y persistencia local.
- `src/app/home/home.page.ts`: formulario, validaciones y acciones de la pantalla.
- `src/app/home/home.page.html`: componentes Ionic y contenido de la pantalla.
- `src/app/home/home.page.scss`: estilos responsive.

## Comprobar compilación

```powershell
npm.cmd run build
```

## Subir a GitHub

Inicializa un repositorio dentro de `TaskApp`, revisa los archivos con `git status` y confirma el código fuente. El `.gitignore` ya excluye `node_modules`, `www`, `.angular` y otros artefactos generados. No subas `node_modules`; GitHub recibirá `package.json` y `package-lock.json` para que otra persona pueda instalar las dependencias con `npm.cmd install`.

## Persistencia

Las tareas se guardan bajo la clave `taskapp-tareas` del almacenamiento local del navegador. Es una persistencia local del dispositivo/navegador, no una cuenta sincronizada entre equipos.
