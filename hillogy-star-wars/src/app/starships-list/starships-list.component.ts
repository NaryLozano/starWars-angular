import { Observable } from 'rxjs';
import { ShipsService } from './../ships.service';
import { Component, OnInit } from '@angular/core';
import { Ship } from './../ship'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starships: any;
  starshipsList: any;


  constructor(private shipsService: ShipsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.shipsService.getShips().subscribe((res) => {
      this.starships = res;
      this.starshipsList = this.starships.results.map((obj : any) => (
        { ...obj, id: `${obj.url.split('/')[5]}` }));
      console.log(this.starshipsList);
    })
  }


}

 
    


  


