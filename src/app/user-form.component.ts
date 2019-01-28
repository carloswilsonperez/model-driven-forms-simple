import { Component } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'app-user-form',
    templateUrl: 'user-form.component.html'
})
export class UserFormComponent {
    public countries = ['United States', 'Singapore', 'Hong Kong', 'Australia'];
    public user = new User();
    public submitted = false;

    public onSubmit() {
        this.submitted = true;
    }

    public register(user: User): void {
        console.log(user);
    }
}

