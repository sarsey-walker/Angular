import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos'
  
  alunos = [
    'Marta',
    'Miguel',
    'João',
    'Marcos',
    'Paula',
    'Ana',
    'Júlia'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
