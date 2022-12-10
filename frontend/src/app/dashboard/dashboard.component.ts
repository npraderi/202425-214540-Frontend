import {AfterViewInit, Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule } from '@angular/material/table';
import { ExpenseI,ExpenseResponse } from '../models/expense';
import { ExpensesService } from '../services/expenses.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, TimeScale } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DateRangePickerFormsExample } from '../material/datePicker/date-range-picker-forms-example';
import { DatePipe } from '@angular/common'
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit {  

 
  categories: any[] = [];
  amount: number[] = [];
  displayedColumns: string[] = ['categoryName', 'userEmail', 'expenseDate', 'expenseRegistryDate','description','amount'];
  dataSource: MatTableDataSource<ExpenseI>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('dateFilter') dateFilter:DateRangePickerFormsExample;

  
  constructor(private expensesService: ExpensesService,public datepipe: DatePipe) { 
    
  }

  ngOnInit(): void {
    let date = new Date();  

    console.log(date.getMonth());

    let dateFormatInit = this.datepipe.transform(date.getFullYear()+'/'+(date.getMonth()+1)+'/'+'1', 'yyyy-MM-dd');
    let dateFormatEnd = this.datepipe.transform(date.getFullYear()+'/'+(date.getMonth()+2)+'/'+'1', 'yyyy-MM-dd');
    console.log(dateFormatInit,dateFormatEnd);
    this.getAllExpensesByDate(dateFormatInit,dateFormatEnd);
  }

  ngAfterViewInit() {
    
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  OnDateChange(event: any){
    let dateIni = this.dateFilter.range.value.start ? this.dateFilter.range.value.start:'';
    let dateEnd = this.dateFilter.range.value.end ? this.dateFilter.range.value.end:'';

    this.getAllExpensesByDate(dateIni,dateEnd);    
  }

  getAllExpensesByDate(dateIni:any,dateEnd:any) {    

    let initialDate = this.datepipe.transform(dateIni, 'yyyy-MM-dd');
    let finalDate = this.datepipe.transform(dateEnd, 'yyyy-MM-dd');

    if(initialDate&&finalDate){   

      this.amount.length = 0;
      this.categories.length = 0;

    this.expensesService.getAllByDate(initialDate,finalDate).subscribe(response => {        

        response.body.forEach(expense =>{
          if(expense.categoryName){
            if(!this.categories.includes(expense.categoryName)){
              this.categories.push(expense.categoryName);
              this.amount.push(0);        
            }
          }
        })

        response.body.forEach(expense =>{
          if(expense.amount){
            console.log("El amount es:",expense.amount);
            console.log("VERIFICANDO ARRAY DE CATEGORIAS:",this.categories);
            let index:number = this.categories.indexOf(expense.categoryName);
            console.log("EL INDEX ES:",index);
            this.amount[index]+= parseInt(expense.amount)
            //this.amount.push(parseInt(expense.amount));
            console.log("amount AHORA ES:",this.amount);
          }
        })
        this.chart?.update(); 


        this.dataSource = new MatTableDataSource(Object.values(response.body));
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
    })    
      
    }

  }
  

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: this.categories,
    datasets: [
      { data: this.amount, label: 'Expenses' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  
}
