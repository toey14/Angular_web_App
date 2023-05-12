import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-police-api',
  templateUrl: './police-api.component.html',
  styleUrls: ['./police-api.component.css']
})
export class PoliceApiComponent implements OnInit {

  neighborhoods: any[];
  selectedNeighborhood: string;
  teams: any[];
  priorities: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getNeighborhoods() {
    this.http.get<any[]>('https://data.police.uk/api/lincolnshire/neighbourhoods')
      .subscribe(data => {
        this.neighborhoods = data;
      });
  }

  getTeams() {
    this.http.get<any[]>(`https://data.police.uk/api/lincolnshire/${this.selectedNeighborhood}/people`)
      .subscribe(data => {
        this.teams = data;
        this.priorities = null; // reset priorities when teams are loaded
      });
  }

  getPriorities() {
    this.http.get<any[]>(`https://data.police.uk/api/lincolnshire/${this.selectedNeighborhood}/priorities`)
      .subscribe(data => {
        this.priorities = data;
        this.teams = null; // reset teams when priorities are loaded
      });
  }

}
