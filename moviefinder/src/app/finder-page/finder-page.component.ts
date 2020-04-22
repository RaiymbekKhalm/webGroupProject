import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finder-page',
  templateUrl: './finder-page.component.html',
  styleUrls: ['./finder-page.component.css']
})
export class FinderPageComponent implements OnInit {
  public genreList = []
  constructor(private genreService: GenreService, private router: Router) { }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(
      data => {
        this.genreList = data

        
        this.router.navigate(['find', this.genreList[0].name])
      }
    )
  }

}
