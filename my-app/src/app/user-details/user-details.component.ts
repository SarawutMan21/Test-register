import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

  yearForm: FormGroup;
  years: number[] = [];
  countries: { name: string, code: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.yearForm = this.fb.group({
      year: ['']
    });
  }

  ngOnInit(): void {
    this.generateYears();
    this.loadCountries();

  }

  generateYears(): void {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;

    for (let year = currentYear; year >= startYear; year--) {
      this.years.push(year);
    }
  }

  loadCountries(): void {
    this.countries = [
      { name: 'Thailand', code: '+66' },
      { name: 'United States', code: '+1' },
      { name: 'United Kingdom', code: '+44' },
      { name: 'Japan', code: '+81' },
      // เพิ่มประเทศและรหัสหมายเลขโทรศัพท์ตามต้องการ
    ];
  }
}
