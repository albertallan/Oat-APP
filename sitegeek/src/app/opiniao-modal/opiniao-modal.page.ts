import { Component, OnInit } from '@angular/core';
import{ModalController} from '@ionic/angular';
import{ApiService} from '../services/api.service';

@Component({
  selector: 'app-opiniao-modal',
  templateUrl: './opiniao-modal.page.html',
  styleUrls: ['./opiniao-modal.page.scss'],
})
export class OpiniaoModalPage implements OnInit {

  

  public opiniao ={
      email:null,
      nome:null,
      assunto:null,
      mensagem:null
  }

  constructor(private apiService:ApiService, private modalController:ModalController) { }

  ngOnInit() {
  }
  cancelar() {
    
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  adicionar() {
    this.apiService.postOpiniao(this.opiniao).subscribe(data =>{
      this.modalController.dismiss(data);      
    })
  }
}
