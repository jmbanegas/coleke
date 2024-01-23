import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { PiedepComponent } from './component/piedep/piedep.component';
import { PortadaComponent } from './component/portada/portada.component';
import { TextoComponent } from './component/texto/texto.component';
import { TextogComponent } from './component/textog/textog.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { InstitucionComponent } from './component/institucion/institucion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,EncabezadoComponent,PiedepComponent,PortadaComponent,TextoComponent,TextogComponent,InicioComponent,InstitucionComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colek';
}
