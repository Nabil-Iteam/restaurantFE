import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  clients : any = [];

  userRole = "client";
  constructor(private userService :UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsersByRole(this.userRole).subscribe(
      (res)=>{
        console.log("this res from BE", res);
        this.clients = res ;
        
      }
    )
  }

  displayClient(id : number){
    this.router.navigate(["userDetails/"+id])
  }
  deleteClient(id : number){
    this.userService.deleteUserById(id).subscribe(
      (res) =>{console.log("this res from BE", res);
      this.userService.getUsersByRole(this.userRole).subscribe(
        (res)=>{
          this.clients = res ;
          
        }
      )
      }
    
    )
  }
  editClient(id : number){
    this.router.navigate(["editUser/"+id])
  }
}
