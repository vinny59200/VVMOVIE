import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [MovieFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule
  ],
  exports:[
    MovieFormComponent
  ]
})
export class MovieModule { }
