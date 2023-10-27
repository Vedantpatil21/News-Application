import { Component, OnInit } from '@angular/core';
import { CgnewsapiService } from '../service/cgnewsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
 
  constructor(private api: CgnewsapiService){ }

  //Display HealthNews data in new variable 
  healthNewsData:any = [];

  ngOnInit(): void {
    this.api.cgHealthNews().subscribe((result)=>{
      console.log(result.articles);
      this.healthNewsData = result.articles;
      })
  }

}
