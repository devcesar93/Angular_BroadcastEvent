import { Component, OnInit } from '@angular/core';
import { ComunicaService } from '../comunica.service';
import { Hero } from '../hero';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-componente-origem',
  templateUrl: './componente-origem.component.html',
  styleUrls: ['./componente-origem.component.css']
})
export class ComponenteOrigemComponent implements OnInit {

  hero = new Hero();
 
  constructor(private comunicaService : ComunicaService) { }

  ngOnInit() {
    this.hero.id = 0;
    this.hero.name = "";
    this.hero.skill = 10;
    this.hero.category = "";
  }


  onAddCurso(curso: string){
    this.comunicaService.addCurso(curso);
  }

  onAddHeroe(){
    this.comunicaService.addHeroe(this.hero);
  }

}
