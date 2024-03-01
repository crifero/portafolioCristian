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

  redes = signal([
    {
      red: 'Instagram',
      logo: 'https://cdn.icon-icons.com/icons2/791/PNG/96/instagram_f_icon-icons.com_65485.png',
      link: 'https://www.instagram.com/cristianrod0/',
    },
    {
      red: 'Linkedin',
      logo: 'https://cdn.icon-icons.com/icons2/791/PNG/96/LINKEDIN_icon-icons.com_65488.png',
      link: 'https://www.linkedin.com/in/cristian-felipe-rodriguez-obando-739703267/',
    },
    {
      red: 'Facebook',
      logo: 'https://cdn.icon-icons.com/icons2/791/PNG/96/FB_icon-icons.com_65484.png',
      link: 'https://www.facebook.com/crifero16',
    },
    {
      red: 'GitHub',
      logo: 'https://cdn.icon-icons.com/icons2/791/PNG/96/GITHUB_icon-icons.com_65505.png',
      link: 'https://github.com/crifero',
    }
    
  ]);

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

  experiencia = signal({
    empresa: 'Tecno.Co',
    tiempo: 'septiembre 2021 - actualmente',
    cargo: 'Analista de soporte y desarrollador',
    descripcion: 'Diseño y desarrollo de software, automatizacion y optimizacion de procesos, gestion de base de datos del proyecto para las tiendas D1 en colombia. Adicionalmente se desarrolla un bot para la gestion de las certificaciones de la empresa'
  })

}



