import { Injectable, EventEmitter } from '@angular/core';
import { Hero } from '../app/hero';

@Injectable({
  providedIn: 'root'
})
export class ComunicaService {

  static criouNovoCurso = new EventEmitter<string>();
  static criouNovoHero = new EventEmitter<any>();
  
  constructor() { }


  addCurso(curso: string) {

    ComunicaService.criouNovoCurso.emit(curso);
  }

  addHeroe(hero : Hero) {

    ComunicaService.criouNovoHero.emit(hero);
  }
}
