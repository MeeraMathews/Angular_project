import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {
  usersForm: FormGroup;
  errormessage: string;
  studentDetails = [];
  data=null;
  admissionNumber=null;
  isReadOnly=true;
  listOfData: any[] = [];
  enableEdit = false;
  enableEditIndex = null;
  editable=true;

  constructor(private formBuilder: FormBuilder) {
    this.usersForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phonenumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
      mothername: new FormControl('', [Validators.required]),
      fathername: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      dob: new FormControl('',[Validators.required]),
      gender: new FormControl('', [Validators.required]),
      std: new FormControl('', [Validators.required, Validators.max(12)]),
      annualincome: new FormControl('', [Validators.required]),
      admissionNumber: new FormControl()
    });
  }

  onPhChange(e: any,index) {
    this.enableEditIndex= index
    var formValue=this.usersForm.value;
    var editValue=e.target.value;
    for(let j=0; j<=index; j++) {
      if(j==index) {
        formValue.phonenumber=editValue;
        this.studentDetails[j].phonenumber=formValue.phonenumber;
        // this.studentDetails.splice(this.enableEditIndex-1,0, formValue)
        console.log(this.enableEditIndex);
      }
    }
    // this.enableEdit=false
    return formValue.phonenumber;
  }

  onStdChange(e: any,index) {
    this.enableEditIndex= index
    var formValue=this.usersForm.value;
    var editValue=e.target.value;
    for(let j=0; j<=index; j++) {
      if(j==index) {
        formValue.std=editValue;
        this.studentDetails[j].std=formValue.std;
        // this.studentDetails.splice(this.enableEditIndex-1,0, formValue)
        console.log(this.enableEditIndex);
      }
    }
    // this.enableEdit=false
    return formValue.std;
  }

  onEmailChange(e: any, index) {
    this.enableEditIndex= index
    var formValue=this.usersForm.value;
    var editValue=e.target.value;
    for(let j=0; j<=index; j++) {
      if(j==index) {
        formValue.email=editValue;
        this.studentDetails[j].email=formValue.email;
        // this.studentDetails.splice(this.enableEditIndex-1,0, formValue)
        console.log(this.enableEditIndex);
      }
    }
    // this.enableEdit=false
    return formValue.email
  }

  ondateChange(e: any,index) {
    this.enableEditIndex= index
    var formValue=this.usersForm.value;
    var editValue=e.target.value;
    for(let j=0; j<=index; j++) {
      if(j==index) {
        formValue.dob=editValue;
        this.studentDetails[j].dob=formValue.dob;
        // this.studentDetails.splice(this.enableEditIndex-1,0, formValue)
        console.log(this.enableEditIndex);
      }
    }
    // this.enableEdit=false
    return formValue.dob;
  }

  onNameChange(e: any,index) {
    this.enableEditIndex= index
    var formValue=this.usersForm.value;
    var editValue=e.target.value;
    for(let j=0; j<=index; j++) {
      if(j==index) {
        formValue.name=editValue;
        this.studentDetails[j].name=formValue.name;
        // this.studentDetails.splice(this.enableEditIndex-1,0, formValue)
        console.log(this.enableEditIndex);
      }
    }
    // this.enableEdit=false
    return formValue.name;
  }

  enableEditMethod(j:number) {
        this.enableEdit = true;
        this.enableEditIndex = j;
        return this.enableEditIndex;
  }

  ngOnInit(): void {

  };

  addRow() {
    const obj = {
    }
    this.studentDetails.push(obj)
  }

  numGenerator() {
    var minm = 10000;
    var maxm = 99999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  }

  onSubmit() {
    this.errormessage="";
    if (this.usersForm.valid) {
      if(this.data==null) {
        var student = this.usersForm.value;
        student.admissionNumber = this.numGenerator();
        this.studentDetails.push(student);
        this.usersForm.get('admissionNumber').setValue(student.admissionNumber);
        console.log(student.admissionNumber);
      }
      else {
        this.isReadOnly=true;
        for(let i=0; i<this.studentDetails.length; i++) {
          var student = this.studentDetails[i];
          if(student.admissionNumber==this.data.admissionNumber) {
            this.studentDetails[i]=(this.usersForm.value);
            this.data= null;
            this.usersForm.reset();
            break;
          }
        }
      }
    }
    else if(this.usersForm.get('name').hasError('required') || this.usersForm.get('name').hasError('minlength')) {
      this.errormessage="Enter your name";
    }
    else if(this.usersForm.get('dob').hasError('required')) {
      this.errormessage="Enter your date of birth";
    }
    else if(this.usersForm.get('phonenumber').hasError('required') || this.usersForm.get('phonenumber').hasError('min')) {
      this.errormessage="Enter your phone number";
    }
    else if(this.usersForm.get('mothername').hasError('required')) {
      this.errormessage="Enter your mother's name'";
    }
    else if(this.usersForm.get('fathername').hasError('required')) {
      this.errormessage="Enter your father's name";
    }
    else if(this.usersForm.get('email').hasError('required')) {
      this.errormessage="Email required";
    }
    else if(this.usersForm.get('gender').hasError('required')) {
      this.errormessage="Enter your gender";
    }
    else if(this.usersForm.get('std').hasError('required')) {
      this.errormessage="Enter your std";
    }
    else if(this.usersForm.get('annualincome').hasError('required')) {
      this.errormessage="Enter your annualincome";
    }
  }


  saveSegment(value) {
    this.enableEdit=false;
  //   this.enableEdit=false;
  //   if(value.name==null && value.phonenumber==null && value.email==null && value.std==null && value.dob==null) {
  //     value.dob=this.ondateChange("e")
  //     value.std=this.onStdChange("e")
  //     value.email=this.onEmailChange('e');
  //     value.phonenumber=this.onPhChange("e");
  //     value.name=this.onNameChange;
  //   }
  // this.studentDetails[this.enableEditIndex.length].push(value);
  // console.log(value.name);
  }

  onEdit(formData) {
    this.isReadOnly=true;
    this.data=formData;
    this.usersForm.get('name').setValue(formData.name);
    this.usersForm.get('phonenumber').setValue(formData.phonenumber);
    this.usersForm.get('mothername').setValue(formData.mothername);
    this.usersForm.get('fathername').setValue(formData.fathername);
    this.usersForm.get('email').setValue(formData.email);
    this.usersForm.get('dob').setValue(formData.dob);
    this.usersForm.get('gender').setValue(formData.gender);
    this.usersForm.get('std').setValue(formData.std);
    this.usersForm.get('annualincome').setValue(formData.annualincome);
    this.usersForm.get('admissionNumber').setValue(formData.admissionNumber);
  }

  deleteData(i:number):void {
    this.studentDetails.push(this.usersForm.value)
    this.studentDetails.splice(i,1);
  }
}
