import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  //variavel em json
  public objeto_feed = {
    titulo: "Suelen Damas",
    data: "Março 5, 2018",
    descricao: "Estou criando um app incrível",
    qntd_likes: 12,
    qntd_coment: 4,
    time_coment: "11h ago"
  }

  public lista_filmes = new  Array<any>(); //variavel pra receber a lista de filmes 

  public nome_usuario: string = "Suelen Damaso";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;  //fazer o result receber a lista de filmes

        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
}
