import { Component, OnInit, AfterContentInit, ContentChild} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee! : EmployeeComponent;
  ngOnInit(): void {
    console.log("ngOnInit");
    //console.log(this.employee.employeeName); // this.employee not available until ngAfterContentInit
  }
  
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
    console.log(this.employee.employeeName);
    this.employee.employeeName = "Ricky!!!"
  }

}
