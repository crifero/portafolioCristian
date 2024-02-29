import { Component, effect, computed, signal, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { lenguajes } from '../models/persona';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './homeComponent.html',
  styleUrl: './homeComponent.css'
})

export class homeComponent {

  person = signal({
    nombre: 'Cristian Rodriguez',
    img: 'https://scontent.fbog2-5.fna.fbcdn.net/v/t39.30808-6/301147787_2139179076287510_515461760736029671_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=EPJeoOfA6zgAX_wpsvf&_nc_ht=scontent.fbog2-5.fna&oh=00_AfB_OfmZ3RFeAiQck0jnDUCiHzctKbHzj4-SjceX1QJGYA&oe=65E47F1E',
    descripcion: 'INGENIERO DE SISTEMAS'
  });

  lenguajes = signal<lenguajes[]>([
    {
      nombre: 'JAVA',
      conocimiento: 70
    },
    {
      nombre: 'PHP',
      conocimiento: 90
    },
    {
      nombre: 'PYTHON',
      conocimiento: 50
    },
    {
      nombre: 'HTML Y CSS',
      conocimiento: 90
    },
    {
      nombre: 'NODE JS',
      conocimiento: 60
    },
    {
      nombre: 'ANGULAR',
      conocimiento: 60
    },
    {
      nombre: 'SPRINGBOOT',
      conocimiento: 40
    },
  ]);

}



