import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores'
  professores = [
    {nome: 'Paulo'},
    {nome: 'Jacira'},
    {nome: 'Ellenna'},
    {nome: 'Sergio'},
    {nome: 'Onofre'},
    {nome: 'Ricardo'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
