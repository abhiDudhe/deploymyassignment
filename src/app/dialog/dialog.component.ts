import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import{MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  postForm !: FormGroup;
  posts:any[] =[]
  constructor(private formBuilder :FormBuilder, private api : ApiService,private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title:['',Validators.required],
       body:['',Validators.required]
    })
    
  }
  addUser(){  
 console.log(this.postForm.value)
 if(this.postForm.valid){
  this.api.postuser(this.postForm.value)
  .subscribe({
    next:(res)=>{
      alert(JSON.stringify(res))
    
      this.postForm.reset();
      this.dialogRef.close('save');
    },
    error:()=>{
      alert("error while adding the product")
    }
  })
 }
  }
  
}
