import { Component } from '@angular/core';
import { faFilm ,faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clinic';
  fa = faFilm;
  fs = faSearch;
}
