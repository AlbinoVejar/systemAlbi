import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable, { RowInput, ColumnInput } from 'jspdf-autotable';
import { Student } from 'src/models/student';

@Injectable({
  providedIn: 'root'
})
export class CarnetService {

  constructor() { }

  createCarnet(student: Student) {
    const doc = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'letter'
    });

    const height = doc.internal.pageSize.getHeight(); //215.9
    const width = doc.internal.pageSize.getWidth(); //279.4 
    let y = 15;
    doc.setFontSize(10)
    doc.text(`CICLO ESCOLAR  ${String(student.yearSchool).toUpperCase()}`, 200, y);
    y += 10;
    doc.text("NI", 200, y);
    y += 10;
    doc.setTextColor("2f5597");
    doc.setFont("helvetica","bold");
    doc.text(`FECHA DE NACIMIENTO:`, 200, y);
    doc.setTextColor("black");
    doc.setFont("helvetica","normal");
    doc.text(`${String(student.born_date)}`, 245, y);
    y += 10;
    doc.setTextColor("2f5597");
    doc.text(`NOMBRE DEL ALUMNO:`, 10, y);
    doc.setTextColor("black");
    doc.text(`${String(student.names).toUpperCase()} ${String(student.last_name_first).toUpperCase()} ${String(student.last_name_second).toUpperCase()}`,52, y);
    doc.line(51, y + 1, 134, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`SECCIÓN:`, 135, y);
    doc.setTextColor("black");
    doc.text(`${String(student.section).toUpperCase()}`, 153, y);
    doc.line(153, y + 1, 185, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`GRADO:`, 190, y);
    doc.setTextColor("black");
    doc.text(`${String(student.grade).toUpperCase()}`, 206, y);
    doc.line(205, y + 1, 235, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`GRUPO: `, 240, y);
    doc.line(255, y + 1, 265, y + 1);
    y += 8;
    doc.setTextColor("2f5597");
    doc.text(`Nombre del padre/madre o tutor:`, 10, y);
    doc.setTextColor("black");
    doc.text(`${String(student.card.names).toUpperCase()}`, 63, y);
    doc.line(62, y + 1, 149, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`TEL. 1:`, 150, y);
    doc.setTextColor("black");
    doc.text(`${String(student.card.phone_father)}`, 163, y);
    doc.line(162, y + 1, 199, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`TEL. 2:`, 200, y);
    doc.setTextColor("black");
    doc.text(`${String(student.card.phone_mother)}`, 213, y);
    doc.line(212, y + 1, 253, y + 1);
    y += 6;
    doc.setTextColor("2f5597");
    doc.text(`TEL. 3:`, 20, y);
    doc.setTextColor("black");
    doc.text(`${String(student.card.phone_grandparents)}`, 33, y);
    doc.line(32, y + 1, 64, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`ABUELOS`, 70, y);
    doc.text(`PAPÁ`, 175, y);
    doc.text(`MAMÁ`, 230, y);
    
    doc.setTextColor("806000");
    y += 8;
    doc.text("COLEGIATURA A 12 MESES: $", 10, y);
    doc.line(61, y + 1, 89, y + 1);
    doc.text("A PARTIR DEL DIA ONCE DE CADA MES SE COBRARÁ INTERÉS DEL $220.00", 90, y);
    y += 8;
    doc.text("COLEGIATURA A 10 MESES: $", 10, y);
    doc.line(61, y + 1, 89, y + 1);
    doc.text("A PARTIR DEL DIA ONCE DE CADA MES SE COBRARÁ INTERÉS DEL $220.00", 90, y);
    y += 10;
    doc.text("COLEGIATURAS", 40, y);
    doc.line(40, y + 1, 68, y + 1);
    y += 6;
    doc.setTextColor("red");
    const e = doc.splitTextToSize("Las colegiaturas deberán cubrirse dentro de los primeros 10 (diez) días de cada mes.Se aplicará un recargo de $220.00 en los pagos que se realicen después de este día haciéndose efectivo a partir del día 11 (once).", 250);
    doc.text(e, 134, y, { align: 'center' });
    y += 20;
    doc.setTextColor("806000");
    doc.setFont("helvetica","bold");
    const warning = doc.splitTextToSize("Si no se ha cubierto para el día 20 (veinte) del mes, nos veremos en la penosa necesidad de negar el derecho de exámenes a su hijo (a) y le negaremos la entrada a clases. Por favor, no permita que esto suceda.", 250);
    doc.text(warning, 134, y, { align: 'center' });
    doc.setFont("helvetica", "normal");
    y += 20;
    doc.text("BLVD. JOSE MARIA ESCRIBA No. 143 ENTRE CALLES LUCRECIA RUIZ Y LUZ VALENCIA", 134, y, { align: 'center' });
    y += 5;
    doc.text("COL. VILLAS DEL PALMAR C.P. 83105", 100, y);
    y += 5;
    doc.text("TEL. (662) 2 80 80 81 HERMOSILLO, SONORA", 95, y);

    // const blob = new Blob([doc.output('blob')], { type: 'application/pdf' });
    // const blobUrl = URL.createObjectURL(blob);
    // pdfObject.embed(blobUrl, this.input);

    doc.save("example-carnet.pdf");
  }
}
