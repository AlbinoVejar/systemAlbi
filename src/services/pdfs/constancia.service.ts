import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable, { RowInput, ColumnInput } from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class ConstanciaService {

  constructor() { }

  createFolio() {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'letter'
    });

    const height = doc.internal.pageSize.getHeight(); //215.9
    const width = doc.internal.pageSize.getWidth(); //279.4 
    let y = 15;
    // let img = new Image();
    // img.src = "../assets/logo.png"
    // img.crossOrigin = "anonymous";
    // let result: string;
    // var canvas = this.input?.elementRef.nativeElement;
    // var ctx = canvas.getContext("2d");
    // img.onload = () => {
    //   ctx?.drawImage(img,512,182);
    //   return canvas;
    // }
    // doc.addImage(canvas.toDataURL('image/png'),'PNG',10, y, 100, 40); 
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("SOLICITUD A: SECUNDARIA", 120, y);
    y += 6;
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("Grado a cursar: ", 120, y);
    doc.setTextColor("blue");
    doc.text("1ERO", 155, y)
    y += 6;
    doc.setTextColor("black"); "./../assets/logo.png";
    doc.text("Ciclo Escolar: ", 120, y);
    doc.setTextColor("blue");
    doc.text("2021-2022", 155, y)

    y += 6;
    doc.setFontSize(10)
    doc.setTextColor("black");
    doc.text("Nombre del alumno (a)", 10, y);
    doc.line(48, y + 1, 206, y + 1);
    y += 6;
    doc.text("Fecha de nacimiento", 10, y);
    doc.line(45, y, 117, y);
    doc.text("Lugar", 120, y);
    doc.line(130, y, 206, y);
    y += 6;
    doc.text("Dirección", 10, y);
    doc.line(27, y, 206, y);
    y += 6;
    doc.text("Colonia", 10, y);
    doc.line(24, y, 98, y);
    doc.text("C.P.", 100, y);
    doc.line(108, y, 130, y);
    doc.text("Teléfono Particular", 132, y);
    doc.line(163, y, 206, y);
    y += 6;
    doc.text("CURP", 10, y);
    doc.line(21, y, 98, y);
    doc.text("Estatura", 100, y);
    doc.line(115, y, 158, y);
    doc.text("Peso", 160, y);
    doc.line(170, y, 206, y);
    y += 6;
    doc.text("Tipo de Sangre", 10, y);
    doc.line(35, y, 63, y);
    doc.text("Utiliza Lentes", 65, y);
    doc.line(88, y, 108, y);
    doc.text("Alérgico a:", 110, y);
    doc.line(128, y, 206, y);

    y += 10;
    doc.text("PADECIMIENTOS:", 10, y);
    y += 6;
    doc.text("Déficit de atención e hiperactividad:", 10, y);
    doc.line(67, y, 148, y);
    doc.text("Medicado", 150, y);
    doc.line(167, y, 206, y);
    y += 6;
    doc.text("Medicamentos", 10, y);
    doc.line(35, y, 206, y);
    y += 6;
    doc.text("Alguna cosa que nosotros debamos saber para ayudar a su hijo (a):", 10, y);
    doc.rect(10, y + 2, 196, 12);
    y += 20;
    doc.text("Nombre del Padre o Tutor", 10, y);
    doc.line(53, y, 206, y);
    y += 6;
    doc.text("Celular", 10, y);
    doc.line(23, y, 98, y);
    doc.text("E-mail", 100, y);
    doc.line(112, y, 206, y);
    y += 6;
    doc.text("Ocupación", 10, y);
    doc.line(29, y, 98, y);
    doc.text("Lugar de Trabajo", 100, y);
    doc.line(129, y, 206, y);
    y += 6;
    doc.text("Horario", 10, y);
    doc.line(23, y, 98, y);
    doc.text("Teléfono(s) trabajo", 100, y);
    doc.line(132, y, 206, y);
    y += 6;
    doc.text("Nombre de la Madre", 10, y);
    doc.line(44, y, 206, y);
    y += 6;
    doc.text("Celular", 10, y);
    doc.line(23, y, 98, y);
    doc.text("E-mail", 100, y);
    doc.line(112, y, 206, y);
    y += 6;
    doc.text("Ocupación", 10, y);
    doc.line(29, y, 98, y);
    doc.text("Lugar de Trabajo", 100, y);
    doc.line(129, y, 206, y);
    y += 6;
    doc.text("Horario", 10, y);
    doc.line(23, y, 98, y);
    doc.text("Teléfono(s) trabajo", 100, y);
    doc.line(132, y, 206, y);
    y += 8;
    doc.text("Familiar (es) a quien (es) llamar en caso de emergencia:", 10, y);
    y += 2;
    const data: Array<RowInput> = [{ name: "Example", parent: "Example", tel: "example eaera" }, { name: "Example", parent: "Example", tel: "example eaera" }, { name: "Example", parent: "Example", tel: "example eaera" }];
    const headers: Array<ColumnInput> = [{ header: "Nombre", dataKey: "name" }, { header: "Parentesco", dataKey: "parent" }, { header: "Telefono", dataKey: "tel" }]

    autoTable(doc, { startY: y, margin: { left: 10, right: 10 }, columns: headers, body: data, theme: 'striped', styles: { lineColor: 'black', lineWidth: 0.2, halign: 'center', textColor: 'blue' }, headStyles: { fillColor: 'white', textColor: 'black', fontStyle: 'normal' } });

    y = (doc as any).lastAutoTable.finalY;

    y += 3;
    doc.setDrawColor('black');
    doc.setLineWidth(.5);
    doc.rect(10, y, 196, 40, 'S');
    y += 6;
    doc.text("DOCUMENTOS PRESENTADOS", 14, y);
    y += 4;
    doc.setFontSize(10);
    doc.rect(15, y, 8, 5, 'S');
    doc.text("CERTIFICADO DE PRIMARIA", 25, y + 4);
    doc.rect(85, y, 8, 5, 'S');
    doc.text("COPIA DE CURP", 95, y + 4);
    doc.rect(140, y, 8, 5, 'S');
    doc.text("CARTA DE BUENA CONDUCTA", 150, y + 4);
    y += 10;
    doc.rect(15, y, 8, 5, 'S');
    doc.text("ULTIMA BOLETA", 25, y + 4);
    doc.rect(85, y, 8, 5, 'S');
    doc.text("ACTA DE NACIMIENTO", 95, y + 4);
    doc.rect(140, y, 8, 5, 'S');
    doc.text("CARTA DE NO ADEUDO", 150, y + 4);
    y += 10;
    doc.rect(15, y, 8, 5, 'S');
    doc.text("FOTOGRAFÍAS", 25, y + 4);

    y += 16;
    doc.text("HERMOSILLO, SONORA a: Sábado, Marzo 12, 2020", 68, y);

    y += 25;
    doc.line(15, y - 5, 86, y - 5);
    doc.text("FIRMA DEL INTERESADO", 30, y);
    doc.line(125, y - 5, 200, y - 5);
    doc.text("FIRMA DEL COORDINADOR", 140, y);

    // const blob = new Blob([doc.output('blob')], {type: 'application/pdf'});
    // const blobUrl = URL.createObjectURL(blob);
    // pdfObject.embed(blobUrl, this.input);
    doc.save("example.pdf");
  }
}
