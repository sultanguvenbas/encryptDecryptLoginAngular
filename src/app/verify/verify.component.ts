import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

  constructor(private http: HttpClient) { }

  decryptedCode="";
  encryptedCode: string | null ="";


  verifyEmail() {
    this.encryptedCode = localStorage.getItem('encryptedCode');
    console.log(this.decryptedCode)
    this.http.post<string>("http://localhost:8000/user/checkCode" ,
      {"encryptedCode":this.encryptedCode, "decryptedCode":this.decryptedCode}).subscribe((data:any) => {
      alert(data)

    }, (error => {
      alert(error.error.Error)
    }))
  }

}

