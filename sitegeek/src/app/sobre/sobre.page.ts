import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OpiniaoModalPage } from '../opiniao-modal/opiniao-modal.page';
import { ApiService} from '../services/api.service';

@Component({
  selector: 'app-sobre',
  templateUrl: 'sobre.page.html',
  styleUrls: ['sobre.page.scss']
})
export class SobrePage {
  public opinioes =[
    {

      email:null,
      nome:null,
      assunto:null,
      mensagem:null
  }
  ]

  constructor(public modalController: ModalController, private apiService:ApiService) {}


  async novaOpiniao() {
    const modal = await this.modalController.create({
      component: OpiniaoModalPage,
      componentProps:{
        'modalController': this.modalController
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.opinioes.push(data);
    return 
  }
}
