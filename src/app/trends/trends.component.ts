import { Component, OnInit } from '@angular/core';
import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';
//import { GoogleChart } from 'https://www.gstatic.com/charts/loader.js';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})

export class TrendsComponent implements OnInit {

  constructor(private google:GoogleChart) { }

  ngOnInit(){
    // this.google.charts.load('current', {'packages':['corechart']});
    // this.google.charts.setOnLoadCallback(drawChart);
  }

  drawChart() {

    // let data = this.google.visualization.arrayToDataTable([
    //   ['Task', 'Hours per Day'],
    //   ['Work',     11],
    //   ['Eat',      2],
    //   ['Commute',  2],
    //   ['Watch TV', 2],
    //   ['Sleep',    7]
    // ]);

    let options = {
      title: 'My Daily Activities'
    };

    // let chart = new this.google.visualization.PieChart(document.getElementById('trends'));
    //
    // chart.draw(data, options);
  }

}
