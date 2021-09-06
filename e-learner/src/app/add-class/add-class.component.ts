import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  userForm: FormGroup;
  lectureDetails = [];
  errormsg;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = new FormGroup ({
      name: new FormControl('', [Validators.required,Validators.minLength(2)]),
      class: new FormControl('', [Validators.required, Validators.max(12), Validators.min(1)]),
      subject: new FormControl('', [Validators.required,]),
      division: new FormControl('', [Validators.required, Validators.max(2)])
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.errormsg='';
    console.log(this.userForm);
    if (this.userForm.valid) {
      this.lectureDetails.push(this.userForm.value);
      console.log(this.userForm.value);
    }

    else if(this.userForm.get('name').hasError('required') || this.userForm.get('name').hasError('minlength')) {
      this.errormsg="Enter your name"
    }

    else if(this.userForm.get('class').hasError('required')) {
      this.errormsg="Enter the class"
    }

    else if(this.userForm.get('class').hasError('min') || this.userForm.get('class').hasError('min')) {
      this.errormsg="invalid entry"
    }

    else if(this.userForm.get('subject').hasError('required')){
      this.errormsg="Enter subject"
    }

    else if(this.userForm.get('division').hasError('required') || (this.userForm.get('division').hasError('max'))){
      this.errormsg="Enter class division"
    }
  }

  cancel() {
    this.userForm.reset();
  }
}
