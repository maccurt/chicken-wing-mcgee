import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {


    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    })

  }

  ngOnInit(): void {
  }

}
