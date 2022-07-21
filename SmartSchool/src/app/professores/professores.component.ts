import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores'
  professores = [
    {id: 1, nome: 'Paulo', disciplina:'Português'},
    {id: 2, nome: 'Jacira', disciplina:'Português'},
    {id: 3, nome: 'Ellenna', disciplina:'História'},
    {id: 4, nome: 'Sergio', disciplina:'Geografia'},
    {id: 5, nome: 'Onofre', disciplina:'Português'},
    {id: 6, nome: 'Ricardo', disciplina:'Matemática'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
