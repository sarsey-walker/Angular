import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores'
  professorForm!: FormGroup
  professorSelecionado?: Professor
  professores = [
    {id: 1, nome: 'Paulo', disciplina:'Português'},
    {id: 2, nome: 'Jacira', disciplina:'Português'},
    {id: 3, nome: 'Ellenna', disciplina:'História'},
    {id: 4, nome: 'Sergio', disciplina:'Geografia'},
    {id: 5, nome: 'Onofre', disciplina:'Português'},
    {id: 6, nome: 'Ricardo', disciplina:'Matemática'}
  ]

  constructor(private fb: FormBuilder) { 
    this.createForm()
  }
  ngOnInit(): void {
  }
  selectProfessor(professor:Professor){
    this.professorSelecionado = professor
    this.professorForm.patchValue(professor)
  }
  voltar(){
    this.professorSelecionado = undefined
  }


  createForm() {
    this.professorForm = this.fb.group({
      nome:['', Validators.required],
      disciplina:['', Validators.required]
    })
  }

  professorSubmit(){
    console.log(this.professorForm?.value)
  }


}
