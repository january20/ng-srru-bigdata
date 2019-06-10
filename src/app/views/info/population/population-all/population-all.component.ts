import { Component, OnInit, NgZone } from '@angular/core';
import { InfoService } from '../../shared/info.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-population-all',
  templateUrl: './population-all.component.html',
  styleUrls: ['./population-all.component.scss']
})
export class PopulationAllComponent implements OnInit {

  ready = false;
  private chart: am4charts.XYChart;

  constructor(
    private zone: NgZone,
    private infoService: InfoService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.infoService.populationAll().subscribe(data => {
      this.createChart(data);
      this.ready = true;
    });
  }

  createChart(data) {
    this.zone.runOutsideAngular(() => {
      let popChart = am4core.create("popChart", am4charts.XYChart)
      let categoryAxis = popChart.xAxes.push(new am4charts.CategoryAxis());
      let valueAxis = popChart.yAxes.push(new am4charts.ValueAxis());

      popChart.colors.step = 2;
      popChart.data = data;
      popChart.legend = new am4charts.Legend();
      popChart.cursor = new am4charts.XYCursor();
      popChart.events.on("datavalidated", function () {
        categoryAxis.zoomToIndexes(Math.round(popChart.data.length * 0.4), Math.round(popChart.data.length * 0.55));
      });

      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.minGridDistance = 50;
      categoryAxis.renderer.grid.template.location = 0;

      this.chart = popChart;

      this.createAxisAndSeries("total", "รวม", "circle", false);
      this.createAxisAndSeries("male", "ชาย", "triangle", true);
      this.createAxisAndSeries("female", "หญิง", "rectangle", true);
      this.createAxisAndSeries("house", "ครัวเรือน", "circle", true);

      
    });
  }

  createAxisAndSeries(field, name, bullet, active) {
    this.zone.runOutsideAngular(() => {   
      let series = this.chart.series.push(new am4charts.LineSeries());
      let scrollbarX = new am4charts.XYChartScrollbar();
      let interfaceColors = new am4core.InterfaceColorSet();

      series.dataFields.valueY = field;
      series.dataFields.categoryX  = 'year';
      series.strokeWidth = 2;
      series.name = name;
      series.hidden = active;
      series.tooltipText = "{valueY}[/]";
      
      scrollbarX.series.push(series);
      this.chart.scrollbarX = scrollbarX;
      this.chart.cursor = new am4charts.XYCursor();
      
      switch(bullet) {
        case "triangle": {
          let bullet = series.bullets.push(new am4charts.Bullet());
          bullet.width = 12;
          bullet.height = 12;
          bullet.horizontalCenter = "middle";
          bullet.verticalCenter = "middle";
          
          let triangle = bullet.createChild(am4core.Triangle);
          triangle.stroke = interfaceColors.getFor("background");
          triangle.strokeWidth = 2;
          triangle.direction = "top";
          triangle.width = 12;
          triangle.height = 12;
          break;
        }
        case "rectangle": {
          let bullet = series.bullets.push(new am4charts.Bullet());
          bullet.width = 10;
          bullet.height = 10;
          bullet.horizontalCenter = "middle";
          bullet.verticalCenter = "middle";
          
          let rectangle = bullet.createChild(am4core.Rectangle);
          rectangle.stroke = interfaceColors.getFor("background");
          rectangle.strokeWidth = 2;
          rectangle.width = 10;
          rectangle.height = 10;
          break;
        }
        default:
          let bullet = series.bullets.push(new am4charts.CircleBullet());
          bullet.circle.stroke = interfaceColors.getFor("background");
          bullet.circle.strokeWidth = 2;
          break;
      }
    });
  }
}
