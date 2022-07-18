import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos'

  alunos = [
      {nome: 'Marta'},
      {nome: 'Miguel'},
      {nome: 'João'},
      {nome: 'Marcos'},
      {nome: 'Paula'},
      {nome: 'Ana'},
      {nome: 'Júlia'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
