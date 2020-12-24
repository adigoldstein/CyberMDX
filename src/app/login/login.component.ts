import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) {
  }

  username: string;
  password: string;

  ngOnInit(): void {
    this.username = 'user1';
    this.password = 'test1234';
  }

  onLogin(): void {
    this.dataService.login(this.username, this.password).subscribe((res) => {
      this.dataService.setData(res);
      this.router.navigate(['/view']);
    });
  }

}
