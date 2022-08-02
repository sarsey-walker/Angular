import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  textSample?:string

  alunoForm!: FormGroup
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

  constructor(private fb: FormBuilder) {
    this.createForm()
   }

  ngOnInit(): void {
  }

  createForm(){
    this.alunoForm = this.fb.group({
      nome:['', Validators.required],
      sobrenome:['', Validators.required],
      telefone:['', Validators.required]
    })
  }

  alunoSubmit(){
    console.log(this.alunoForm?.value)
  }

  selectAluno(aluno:Aluno){
    this.alunoSelecionado = aluno
    this.alunoForm.patchValue(aluno)
  }

  voltar(){
    this.alunoSelecionado = undefined
  }


}
