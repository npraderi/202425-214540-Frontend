import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

/** @title Date range picker forms integration */
@Component({
  selector: 'date-range-picker-forms-example',
  templateUrl: 'date-range-picker-forms-example.html',
})
export class DateRangePickerFormsExample {

  events: string[] = [];

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  @Output() dateChange = new EventEmitter<any>();
  

addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  this.events.push(`${type}: ${event.value}`);
  //console.log("CAMBIO LA FECHA");
  this.dateChange.emit(event.value);
}



}