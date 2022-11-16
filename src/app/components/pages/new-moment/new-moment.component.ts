import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';

import { Moment } from '../../Moment';
@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText = 'Compartilhar!';

  constructor(private momentService: MomentService) { }

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

    //enviar para o service

    //exibir msg

    //redirect
  }

}
