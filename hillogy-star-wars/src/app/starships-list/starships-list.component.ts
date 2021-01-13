import { Observable } from 'rxjs';
import { ShipsService } from './../ships.service';
import { Component, OnInit } from '@angular/core';
import { Ship } from './../ship'


@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starships: any;
  starshipslist: any;

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.shipsService.getShips().subscribe((res) => {
      this.starships = res;
      this.starshipslist = this.starships.results
      console.log(this.starshipslist);
    })
  }


}