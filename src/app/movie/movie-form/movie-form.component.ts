import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieModule } from '../movie.module';
import { Movie } from '../Movie';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  currentMovie:Movie=new Movie({'title':"",'plot':"",'picture':""});
  public moviedata = [];
  constructor(private servMovie: MovieService) {}
  ngOnInit() {
    this.refreshMovie();
  }

  refreshMovie():void{
    this.servMovie.getData(this.currentMovie.title).subscribe((data:any) => {
      this.currentMovie.title=data.Title;
      this.currentMovie.plot=data.Plot;
      this.currentMovie.picture=data.Poster;
      
     
   });
  }
 
 

}
