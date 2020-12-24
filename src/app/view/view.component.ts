import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  data = {};

  ngOnInit(): void {
    // todo: unsubscribe ondestroy
    this.dataService.getData().subscribe((res => {
      this.data = res;
      console.log(res);
    }));


  }

}
