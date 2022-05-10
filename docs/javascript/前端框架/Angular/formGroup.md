```ts
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
```

```ts
userForm = new FormGroup({
     name: new FormControl(),
     age: new FormControl('20')
});
```
formGroup formControlName 会将输入值传入到 userForm 中
```html
<form [formGroup]="userForm" (ngSubmit)="onFormSubmit()">
  Name: <input formControlName="name"  placeholder="Enter Name">
  Age: <input formControlName="age"  placeholder="Enter Age">
  <button type="submit">Submit</button>
</form>
```

```ts
onFormSubmit(): void {
    console.log('Name:' + this.userForm.get('name').value);
}
```
