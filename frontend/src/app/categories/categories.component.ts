import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { CategoryI } from '../models/category';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  displayedColumns: string[] = ['categoryName'];
  dataSource: MatTableDataSource<CategoryI>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  Top3Categories: CategoryI[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getTop().subscribe(response => {
      for (var i = 0; i < response.body.length; i++) {
        this.Top3Categories.push(response.body[i]);
      }
      
    }); 
  }

  
    
  }


