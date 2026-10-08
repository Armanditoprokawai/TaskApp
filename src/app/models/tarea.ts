export type Prioridad = 'Alta' | 'Media' | 'Baja';

// Datos que introduce el formulario antes de que el servicio asigne id y estado.
export interface NuevaTarea {
  titulo: string;
  descripcion: string;
  prioridad: Prioridad;
}

// Representación completa que se muestra en la lista y se guarda en localStorage.
export interface Tarea extends NuevaTarea {
  id: number;
  completada: boolean;
}
