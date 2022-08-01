import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos'
  alunoSelecionado?: Aluno;
  alunos = [
      {id: 1, nome: 'Marta', sobrenome:'Rofrigues', telefone:'99123456789'},
      {id: 2, nome: 'Miguel', sobrenome:'Palhares', telefone:'99123456777'},
      {id: 3, nome: 'João', sobrenome:'Vitor', telefone:'99123456999'},
      {id: 4, nome: 'Marcos', sobrenome:'Pontes', telefone:'99123456987'},
      {id: 5, nome: 'Paula', sobrenome:'Rodrigues', telefone:'99123456014'},
      {id: 6, nome: 'Ana', sobrenome:'Paula', telefone:'99123456321'},
      {id: 7, nome: 'Júlia', sobrenome:'Neves', telefone:'99123456712'},
  ]

  selectAluno(aluno:Aluno){
    this.alunoSelecionado = aluno
  }

  voltar(){
    this.alunoSelecionado = undefined
  }

  constructor() { }

  ngOnInit(): void {
  }

}
