import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {
  comicId;
  comicDetails;
  img;
  constructor(
    public router: ActivatedRoute,
    public route: Router,
    public heroService: HeroesService
  ) { }

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const comicID = Number(routeParams.get('idComic'));
    this.comicId = comicID;
    this.heroService.getComic (this.comicId).subscribe((data:any)=>{
      const result = data.data.results;
      this.comicDetails = result.map(comic=>{
        this.img = comic.thumbnail.path + '.' + comic.thumbnail.extension;
        return {title:comic.title, thumb: comic.thumbnail.path, description:comic.description};
      }); 
    })  
  }

}
