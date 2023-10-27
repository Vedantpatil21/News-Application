import { Component, OnInit } from '@angular/core';
import { CgnewsapiService } from '../service/cgnewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent  implements OnInit {
 
  constructor(private api: CgnewsapiService){ }

  //Display BusinessNews data in new variable 
  businessNewsData:any = [];

  ngOnInit(): void {
    this.api.cgBusinessNews().subscribe((result)=>{
      console.log(result.articles);
      this.businessNewsData = result.articles;
      })
  }

}
