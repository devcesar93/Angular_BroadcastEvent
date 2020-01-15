import { Component, OnInit } from '@angular/core';
import { ComunicaService } from '../comunica.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-componente-destino',
  templateUrl: './componente-destino.component.html',
  styleUrls: ['./componente-destino.component.css']
})
export class ComponenteDestinoComponent implements OnInit {

  cursos: string[] = [];

  _hero : Hero[] = [];

  constructor() { }

  ngOnInit() {
    ComunicaService.criouNovoCurso.subscribe( curso => this.cursos.push(curso));
    ComunicaService.criouNovoHero.subscribe( hero => this._hero.push(hero));
    console.log(this._hero);
  }

}
