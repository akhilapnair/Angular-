import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TaskListService } from '../task-list.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, public taskService: TaskListService) {}
taskForm: FormGroup;
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      status : ['', Validators.required]
    })
  }
  submitTask(data){
    console.log(data)
    this.taskService.addData(data).subscribe(obj=>{
      console.log('data',obj)
    });
  }
}
