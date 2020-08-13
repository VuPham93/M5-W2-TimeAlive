import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../date-util.service';

@Component({
  selector: 'app-time-lines',
  templateUrl: './time-lines.component.html',
  styleUrls: ['./time-lines.component.css']
})
export class TimeLinesComponent implements OnInit {

  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }

  output = '';

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
