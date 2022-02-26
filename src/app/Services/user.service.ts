import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserLogin, UserRegistration } from '../../../Models/UserModels'
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class UserService {
constructor(private http: HttpClient){}


 registerUser!: UserRegistration;
 loginUser!: UserLogin;

login(loginModel: UserLogin){
  //once api is set up in backend, this function will make an http POST call
  //need the login url
return this.http.post(loginUrl, loginModel, httpOptions);
}
 register(registerModel: UserRegistration){
   //once api is set up in backend this function will an http POST call to add user to database
   //need the register url
  return this.http.post(loginUrl, registerModel, httpOptions);
 }



}
