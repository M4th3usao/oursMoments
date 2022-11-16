import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { Moment } from '../../Moment';

import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText = 'Compartilhar!';

  constructor(
    private momentService: MomentService, 
    private messagesService: MessagesService, 
    private router: Router ) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment){//operações assincronas
    const formData = new FormData();

    formData.append('title', moment.title)
    formData.append("description", moment.description)

    if(moment.image){
      formData.append('image', moment.image);
    }

    //to do
    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add("Momento adicionado com sucesso!");//exibir mensagem de sucesso

    //redirect
    this.router.navigate(['/']);
  }

}
