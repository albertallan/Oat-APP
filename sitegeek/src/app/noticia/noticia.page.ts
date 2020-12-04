import { Component,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NovaNoticiaModalPage } from '../nova-noticia-modal/nova-noticia-modal.page';
import { ApiService} from '../services/api.service';


@Component({
  selector: 'app-noticia',
  templateUrl: 'noticia.page.html',
  styleUrls: ['noticia.page.scss']
})
export class NoticiaPage {

  public informacoes =[
    {

      titulo:null,
      imagem:null,
      descricao:null
  }
  ]

  constructor(public modalController: ModalController, private apiService:ApiService) {}

  ngOnInit(){

    this.apiService.getInformacao().subscribe((data:any)=>{
      this.informacoes = data;
    })

  }


  async novaNoticia() {
    const modal = await this.modalController.create({
      component: NovaNoticiaModalPage,
      componentProps:{
        'modalController': this.modalController
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.informacoes.push(data);
    return 
  }
  

}
