import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  results: Observable<any[]>;
  public total_avg: number;
  public consum_avg: number;


  constructor(private albumService: AlbumService) {
    this.results = this.albumService.getAlbums();
    this.results.subscribe(elt => {
    	var results_lenght = elt.length;
    	console.log(results_lenght);

    	var avg = 0;
    	for (var i = 0; i < results_lenght; i++) {
    		avg = avg + elt[i].id;
    		//console.log(elt[i].id);
    	}
    	console.log(avg);
    	this.total_avg = avg/results_lenght;
    	console.log("Tot_avg: " + this.total_avg);

    	var kh_p = 450; //Precio kWh

    	this.consum_avg = this.total_avg * kh_p;

    	console.log("Consum_avg: " + this.consum_avg);
    	});
    
  }

  ngOnInit() {
  }

  
 
/*  this.results_lenght=this.i+1; console.log(this.i);
	ngAfterContentChecked()  {
    let avg = 0;
    let len = 0;
    for (let i in this.results) {
    	console.log("Entró")
    	this.results[i].id;
     	len = len + 1 ;
    }

    this.total_avg = len;
  } */

}
