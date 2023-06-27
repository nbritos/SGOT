import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-remito',
  templateUrl: './remito.component.html',
  styleUrls: ['./remito.component.css']
})
export class RemitoComponent {

  constructor() {

  }

  @ViewChild('content', { static: false }) contentRef!: ElementRef;

  SavePDF() {
    const doc = new jsPDF();
    const content = this.contentRef.nativeElement;

    doc.html(content, {
      callback: function (doc) {
        doc.save('remito.pdf');
      }
    });
  }
}
