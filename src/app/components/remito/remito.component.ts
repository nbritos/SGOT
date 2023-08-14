import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-remito',
  templateUrl: './remito.component.html',
  styleUrls: ['./remito.component.css']
})

export class RemitoComponent {
  //En esta version del codigo se usa html2canvas para capturar el contenido del html como una imagen 
  //y luego se agrega esa imagen al archivo PDF usando el método addImage que provee la libreria jsPDF

  @ViewChild('content', { static: false }) contentRef!: ElementRef;

  mostrarBoton = true;
  mostrarBotonImagen=false;
  seleccionImagen: string | undefined;
  imgWidth = 80; // Ancho de la imagen
  imgHeight = 80; // Alto de la imagen
  imagenSeleccionada: boolean = true;

  cargaImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.seleccionImagen = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    this.imagenSeleccionada=false;
    this.mostrarBotonImagen=true;
  }

  eliminarImagen(){
    this.seleccionImagen=undefined;
    this.mostrarBotonImagen=false;
    this.imagenSeleccionada=true;
  }

  async SavePDF() {

    this.mostrarBoton = false;

    const doc = new jsPDF();
    const content = this.contentRef.nativeElement;

    const canvas = await html2canvas(content);
    const imageData = canvas.toDataURL('image/png');

    doc.addImage(imageData, 'PNG', 5, 5, 90, 0); // Adjust the positioning and size as needed

    doc.save('remito.pdf');
    this.mostrarBoton = true;
  }
}