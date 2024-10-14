import { Injectable } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class OffcanvasService {

  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: any) {
    this.offcanvasService.open(content);
  }
}
