import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chef-table',
  templateUrl: './chef-table.component.html',
  styleUrls: ['./chef-table.component.css']
})
export class ChefTableComponent implements OnInit {
  chefs : any = [];

  userRole = "chef";
  constructor(private userService :UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsersByRole(this.userRole).subscribe(
      (res)=>{
        console.log("this res from BE", res);
        this.chefs = res ;
        
      }
    )
  }

  displayChef(id : number){
    this.router.navigate(["userDetails/"+id])
  }
  deleteChef(id : number){
    this.userService.deleteUserById(id).subscribe(
      (res) =>{console.log("this res from BE", res);
      this.userService.getUsersByRole(this.userRole).subscribe(
        (res)=>{
          this.chefs = res ;
          
        }
      )
      }
    
    )
  }
  editChef(id : number){
    this.router.navigate(["editUser/"+id])
  }
}
