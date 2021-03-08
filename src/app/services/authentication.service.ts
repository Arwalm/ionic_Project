import { Injectable } from '@angular/core';
import {Platform} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs'; 
import {Storage} from '@ionic/storage'; 
import {HttpClient} from '@angular/common/http'; 

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authinticationState = new BehaviorSubject(false);
  constructor(
    private storage: Storage,
    private plt: Platform,
    private http: HttpClient,
  ) { 
    
    this.plt.ready().then( () => {
      this.checktoken();
    });
  }

  login(user){
this.http.post('http:127.0.0.1:8000/api/v1/login', user).subscribe(res => {
  return this.storage.set(TOKEN_KEY,'Bearer ${res[]}').then(res => {
    this.authinticationState.next(true);
  });
});
  }

  logout(){
    return this.storage.remove(TOKEN_KEY).then ( () => {
      this.authinticationState.next(false);
    })
  }

  isAuthenticated(){
    return this.authinticationState.value;
  }

  checktoken(){
    return this.storage.get(TOKEN_KEY).then( res => {
      if(res){
        this.authinticationState.next(true);
      }
    });
  }
}
