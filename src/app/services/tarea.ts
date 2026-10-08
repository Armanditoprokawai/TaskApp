import { Injectable } from '@angular/core';
import { Tarea, NuevaTarea } from '../models/tarea';

const CLAVE_ALMACENAMIENTO = 'taskapp-tareas';

@Injectable({ providedIn: 'root' })
export class TareaService {
  private tareas: Tarea[] = this.cargarTareas();

  obtenerTareas(): Tarea[] {
    return [...this.tareas];
  }

  agregarTarea(datos: NuevaTarea): void {
    const nuevaTarea: Tarea = {
      ...datos,
      id: Date.now(),
      completada: false,
    };
    this.tareas = [...this.tareas, nuevaTarea];
    this.guardarTareas();
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
    this.guardarTareas();
  }

  completarTarea(id: number): void {
    this.tareas = this.tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
    );
    this.guardarTareas();
  }

  private cargarTareas(): Tarea[] {
    if (typeof localStorage === 'undefined') return [];

    try {
      const guardadas: unknown = JSON.parse(localStorage.getItem(CLAVE_ALMACENAMIENTO) ?? '[]');
      return Array.isArray(guardadas) ? guardadas as Tarea[] : [];
    } catch {
      return [];
    }
  }

  private guardarTareas(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(this.tareas));
    }
  }
}
