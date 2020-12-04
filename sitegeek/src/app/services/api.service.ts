import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) {}

  getInformacao(){
    return this.httpClient.get('http://localhost:3000/api/informacao');
  }
  postInformacao(informacao,imagem){
    const formData = new FormData();
    formData.append('titulo',informacao.titulo);
    formData.append('imagem',imagem);
    formData.append('descricao',informacao.descricao);
    return this.httpClient.post('http://localhost:3000/api/informacao',formData);
    
  } public opiniao ={
    email:null,
    nome:null,
    assunto:null,
    mensagem:null
}
  postOpiniao(opiniao){
    const formData = new FormData();
    formData.append('email',opiniao.email);
    formData.append('nome',opiniao.nome);
    formData.append('assunto',opiniao.assunto);
    formData.append('mensagem',opiniao.mensagem);
    return this.httpClient.post('http://localhost:3000/api/opiniao',formData);
    
  }  
}
