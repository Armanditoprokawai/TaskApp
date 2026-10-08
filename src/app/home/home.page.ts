import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  IonBadge,
  IonButton,
  IonCheckbox,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, clipboardOutline, trashOutline } from 'ionicons/icons';
import { Prioridad, Tarea } from '../models/tarea';
import { TareaService } from '../services/tarea';

function validarTitulo(control: AbstractControl<string>): ValidationErrors | null {
  const titulo = control.value.trim();
  if (!titulo) return { required: true };
  if (titulo.length < 5) {
    return { minlength: { requiredLength: 5, actualLength: titulo.length } };
  }
  return null;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonCheckbox,
    IonButton,
    IonIcon,
    IonFab,
    IonFabButton,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonTextarea,
  ],
})
export class HomePage {
  tareas: Tarea[] = [];
  mostrarFormulario = false;
  readonly formulario;

  constructor(
    private readonly tareaService: TareaService,
    private readonly formBuilder: FormBuilder,
  ) {
    addIcons({ addOutline, clipboardOutline, trashOutline });
    this.formulario = this.formBuilder.nonNullable.group({
      titulo: ['', [Validators.required, Validators.minLength(5), validarTitulo]],
      descripcion: [''],
      prioridad: ['Media' as Prioridad, Validators.required],
    });
    this.actualizarTareas();
  }

  alternarFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
    if (!this.mostrarFormulario) this.formulario.reset({ prioridad: 'Media' });
  }

  agregarTarea(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const { titulo, descripcion, prioridad } = this.formulario.getRawValue();
    this.tareaService.agregarTarea({
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      prioridad,
    });
    this.actualizarTareas();
    this.formulario.reset({ prioridad: 'Media' });
    this.mostrarFormulario = false;
  }

  completarTarea(id: number): void {
    this.tareaService.completarTarea(id);
    this.actualizarTareas();
  }

  eliminarTarea(id: number): void {
    this.tareaService.eliminarTarea(id);
    this.actualizarTareas();
  }

  clasePrioridad(prioridad: Prioridad): string {
    return `prioridad-${prioridad.toLowerCase()}`;
  }

  private actualizarTareas(): void {
    this.tareas = this.tareaService.obtenerTareas();
  }
}
