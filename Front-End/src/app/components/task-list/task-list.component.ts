import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TaskListService } from './task-list.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit  {



  ELEMENT_DATA = [];
  displayedColumns: string[] = ['id', 'name', 'status', 'delete','update'];
  dataSource: MatTableDataSource<{ id: number; name: string;  status: string; }>;
  animal: any;

  constructor(private taskservice: TaskListService,public dialog: MatDialog) {


  }
  ngOnInit() {
    this.refreshTodo();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      // data: {name: 'sss', animal: 'eee'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });

  }

  refreshTodo(){
    this.taskservice.loaddata().subscribe(obj=>{
      this.ELEMENT_DATA = obj;
      console.log('data', obj)
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteTask(id){
    console.log('sdfsf',id)
    this.taskservice.deleteData(id).subscribe(data=>{

      console.log(data)
      this.refreshTodo();
    })
  }
  updateTask(){

  }

}
