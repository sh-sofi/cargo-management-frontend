import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { CompletedWork } from '../../models/completed-work.model';

@Component({
  selector: 'app-completed-works',
  standalone: false,
  templateUrl: './completed-works.component.html',
  styleUrls: ['./completed-works.component.scss']
})
export class CompletedWorksComponent implements OnInit {
  completedWorks: CompletedWork[] = [];

  constructor(private transportService: TransportService) {}

  ngOnInit(): void {
    this.transportService.getCompletedWorks().subscribe((works) => {
      this.completedWorks = works;
    });
  }
}
