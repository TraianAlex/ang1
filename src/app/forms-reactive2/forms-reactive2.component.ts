import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-forms-reactive2',
  templateUrl: './forms-reactive2.component.html',
  styleUrls: ['./forms-reactive2.component.scss'],
})
export class FormsReactive2Component implements OnInit {
  projectForm!: FormGroup;
  projStatus: String[] = ['Stable', 'Critical', 'Finished'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectData: this.fb.group({
        projectName: [
          null,
          [Validators.required, CustomValidators.invalidProjectName],
          CustomValidators.asyncInvalidProjectName,
        ],
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      projectStatus: new FormControl(this.projStatus[0]),
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }
}
