import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!: string 

  momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({ //inicializou o form e sues atributos
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),//validação de requisição
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title(){
    return this.momentForm.get('title')!;
  }

  get description(){
    return this.momentForm.get('description')!;
  }


  submit(){
    if(this.momentForm.invalid){
      return;
    }//caso o form seja inválido, ele não ira enviar ao banco
    console.log('Enviou o formulário')
  }

}
