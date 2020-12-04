import { Component, OnInit,Input } from '@angular/core';
import { AngularDelegate } from '@ionic/angular';
import{ModalController} from '@ionic/angular';
import{ApiService} from '../services/api.service';

@Component({
  selector: 'app-nova-noticia-modal',
  templateUrl: './nova-noticia-modal.page.html',
  styleUrls: ['./nova-noticia-modal.page.scss'],
})
export class NovaNoticiaModalPage implements OnInit {

  @Input() modalController: ModalController
  
  public informacao ={
      titulo:null,
      descricao:null
    }
  public imagem:File;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  fileChangeLinstener($event){
    this.imagem = $event.target.files[0];
  }

  cancelar() {
    
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  adicionar() {
    //post api
    
    this.apiService.postInformacao(this.informacao,this.imagem).subscribe(data =>{
      this.modalController.dismiss(data);
    })
  }
}
