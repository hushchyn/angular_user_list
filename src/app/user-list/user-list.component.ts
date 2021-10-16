import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

 public newUsers: Array<IUsers> = [];
 public login!: string;
 public pass!: any; 
 public email!: any;
 public save = true
 public editUserIndex!: number; 

  constructor() { }

  ngOnInit(): void {
  }

  addUser(){
    let log = this.login;
    let pa = this.pass;
    let em = this.email
    let user = new User ( log, pa, em)
    this.newUsers.push(user)
    this.login = ''
    this.pass = ''
    this.email = ''
  }

  deleteUser(index:number):void {
    this.newUsers.splice(index,1)
  }

  editUser(index:number):void{
    this.login = this.newUsers[index].login
    this.pass = this.newUsers[index].password
    this.email = this.newUsers[index].email
    this.editUserIndex = index
    this.save = !this.saveUser
  }

  saveUser():void{
    this.newUsers[this.editUserIndex].login = this.login
    this.newUsers[this.editUserIndex].password = this.pass
    this.newUsers[this.editUserIndex].email = this.email
    this.login = ''
    this.pass = ''
    this.email = ''
    this.save = true
  }
}

export interface IUsers{
  login: string;
  password: number;
  email: any;
}

export class User implements IUsers{
  login: string;
  password: number;
  email: any;
  constructor ( uLogin: string, uPassword: number, uEmail: any)
  {
    this.login = uLogin;
    this.password = uPassword;
    this.email = uEmail;
  }
}


