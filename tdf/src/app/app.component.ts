import { Component } from '@angular/core';
import { User } from './model/user.model';
import { EnrollmentService } from './services/enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted: boolean = false;
  errorMessage: string = '';

  userModel = new User(
    'kobe',
    'chris@test.com',
    1234567890,
    'default',
    'morning',
    true
  );

  constructor(private enrollmentService: EnrollmentService) {}

  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(userForm: any) {
    console.log(userForm);
    // this.submitted = true;
    // this.enrollmentService.enroll(this.userModel).subscribe(
    //   (data) => console.log(data),
    //   (error) => (this.errorMessage = error.statusText)
    // );
  }
}
