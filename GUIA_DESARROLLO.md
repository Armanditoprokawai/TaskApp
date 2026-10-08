# Guía paso a paso del desarrollo de TaskApp

Este documento sirve como base para preparar el PDF de la práctica. Puedes abrirlo en Word o Google Docs y exportarlo como PDF. Añade capturas propias de cada paso para mostrar el proceso en tu equipo.

## 1. Crear el proyecto

Se creó el proyecto con Ionic y Angular usando una plantilla en blanco y componentes standalone:

```powershell
ionic.cmd start TaskApp blank --type=angular
```

Después se entró en la carpeta `TaskApp` y se arrancó con `ionic.cmd serve` para confirmar que la plantilla inicial abría en el navegador.

## 2. Definir el modelo

En `src/app/models/tarea.ts` se creó el tipo `Prioridad` y la interfaz `Tarea`. La interfaz describe los datos de cada actividad: `id`, `titulo`, `descripcion`, `prioridad` y `completada`. TypeScript usa esta definición para señalar errores de tipos mientras se programa.

## 3. Crear el servicio

En `src/app/services/tarea.ts` se implementó `TareaService` con `@Injectable({ providedIn: 'root' })`. El servicio centraliza agregar, consultar, completar y eliminar tareas para que la pantalla no tenga que duplicar esa lógica.

## 4. Guardar datos localmente

Al iniciar, el servicio lee la lista desde `localStorage`. Cada vez que se agrega, completa o elimina una tarea, convierte la lista a JSON y la guarda de nuevo. Así los datos permanecen después de recargar en el mismo navegador.

## 5. Preparar el formulario reactivo

En `home.page.ts` se importó `ReactiveFormsModule` y se creó un formulario con `FormBuilder`. El campo título tiene dos validaciones: `required` y `minLength(5)`. La prioridad empieza en “Media” y la descripción es opcional.

## 6. Construir la interfaz Ionic

En `home.page.html` se organizaron el encabezado, el contenido, la lista de tareas y el pie con componentes Ionic. Cada elemento muestra título, descripción, prioridad en un `ion-badge`, checkbox y botón de eliminar. El botón flotante abre el formulario.

## 7. Conectar acciones y estados

El formulario llama al servicio para crear una tarea. El checkbox alterna el estado `completada`; una clase CSS tacha el título y la descripción. El botón de basura elimina la tarea por su identificador.

## 8. Aplicar estilos adaptables

`home.page.scss` controla colores, espacios, tarjetas, estados de prioridad y tamaños para pantallas estrechas y anchas. La estructura limita el ancho de lectura en pantallas grandes y ocupa el espacio disponible en móviles.

## 9. Ejecutar y revisar

En PowerShell, desde la carpeta del proyecto, los comandos de instalación y ejecución son:

```powershell
npm.cmd install
ionic.cmd serve
```

Prueba en el navegador: crea una tarea con título corto para ver la validación, crea otra válida, cambia su checkbox, elimínala y recarga para observar que la lista persiste.

Para comprobar compilación:

```powershell
npm.cmd run build
```

## 10. Preparar entrega

El proyecto incluye `README.md` con instalación y ejecución. El `.gitignore` excluye `node_modules` y artefactos generados. Para GitHub se comparte el código fuente, `package.json` y `package-lock.json`, sin copiar la carpeta `node_modules`.

## Capturas recomendadas para el PDF

1. Pantalla de inicio vacía.
2. Formulario mostrando el error de título obligatorio o menor de cinco caracteres.
3. Una tarea guardada con su prioridad.
4. Una tarea marcada como completada y su texto tachado.
5. El proyecto abierto en VS Code mostrando modelo, servicio y página.
6. Terminal con `ionic.cmd serve` y, después de ejecutar la compilación, `npm.cmd run build`.
