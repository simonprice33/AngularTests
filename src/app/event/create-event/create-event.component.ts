import { Component, Inject, OnInit, Renderer2, SecurityContext, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Placement as PopperPlacement, Options } from '@popperjs/core'

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  hoveredDate!: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  @ViewChild('datepicker',{static:false}) ngbDatepicker: any


  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private renderer: Renderer2) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 2);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit()
  {
    let dpFrom = document.querySelector('input[name=dpFromDate]');
    this.renderer.listen(dpFrom,"keydown", (evt: KeyboardEvent)=>
    {
      if(evt.key=='Enter')
      {
        console.log('From date selected', this.fromDate);
      }
    })

    let dpTo = document.querySelector('input[name=dpToDate]');
    this.renderer.listen(dpTo,"keydown", (evt: KeyboardEvent)=>
    {
      if(evt.key=='Enter')
      {
        console.log('To date selected', this.toDate);
      }
    
    })
  }

  isHovered(date: NgbDate) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }

    isInside(date: NgbDate) {
        return date.after(this.fromDate) && date.before(this.toDate);
    }

    isRange(date: NgbDate) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    }

    onDateSelection(date: NgbDate) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
            console.log('setting from date')
        } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
            console.log('setting to date')
        } else {
            this.fromDate = date;
          console.log('setting from date')
        }
    }
    async onSubmit(action: string){

    }
}

