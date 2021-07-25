import { Component, OnInit } from '@angular/core';
import { PostagensService } from '../postagens.service';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  postagens: Array<any> = new Array();

  constructor(private postagensService: PostagensService) { }

  ngOnInit() {
    this.listarPostagens();
  }

  listarPostagens() {
      this.postagensService.listarPostagens().subscribe(postagens => {
        this.postagens = postagens;
        console.log(postagens)
      }, err => {
        console.log('Erro ao carregar lista de postagens', err);
      })
  }

}
