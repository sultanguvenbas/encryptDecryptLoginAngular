import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-send-code',
  templateUrl: './send-code.component.html',
  styleUrls: ['./send-code.component.css']
})
export class SendCodeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  email = "";
  encryptedCode = "";

  sendEmail() {
    this.http.post<string>("http://localhost:8000/user/sendCode",
      {"email": this.email}).subscribe((data:any) => {
      this.encryptedCode = data.encryptedCode
      localStorage.setItem('encryptedCode', this.encryptedCode);
    }, (error => {
      alert(error.error.Error)
    }))
  }

}

