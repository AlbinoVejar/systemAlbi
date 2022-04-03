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
    doc.text("CICLO ESCOLAR", 200, y);
    y += 10;
    doc.text("NI", 200, y);
    y += 10;
    doc.text("FECHA DE NACIMIENTO: 9/21/2009", 200, y);
    y += 10;
    doc.text("NOMBRE DEL ALUMNO: ", 10, y);
    doc.text("SECCIÓN: SECUNDARIA", 100, y);
    doc.text("GRADO: 1ERO", 180, y);
    doc.text("GRUPO:", 240, y);
    y += 8;
    doc.text("Nombre del padre/madre o tutor: ERIK FLORES FERNANDEZ", 10, y);
    doc.text("TEL. 1: 6623867266", 150, y);
    doc.text("TEL. 2: 6623867266", 200, y);
    y += 5;
    doc.text("TEL. 3: 6623867266", 10, y);
    doc.text("ABUELOS", 60, y);
    doc.text("PAPÁ", 155, y);
    doc.text("MAMÁ", 200, y);

    y += 8;
    doc.text("COLEGIATURA A 12 MESES: $", 10, y);
    doc.text("A PARTIR DEL DIA ONCE DE CADA MES SE COBRARÁ INTERÉS DEL $220.00", 90, y);
    y += 5;
    doc.text("COLEGIATURA A 10 MESES: $", 10, y);
    doc.text("A PARTIR DEL DIA ONCE DE CADA MES SE COBRARÁ INTERÉS DEL $220.00", 90, y);

    y += 10;
    doc.text("COLEGIATURAS", 40, y);
    y += 4;
    const e = doc.splitTextToSize("Las colegiaturas deberán cubrirse dentro de los primeros 10 (diez) días de cada mes.Se aplicará un recargo de $220.00 en los pagos que se realicen después de este día haciéndose efectivo a partir del día 11 (once).", 250);
    doc.text(e, 134, y, { align: 'center' });
    y += 20;
    const warning = doc.splitTextToSize("Si no se ha cubierto para el día 20 (veinte) del mes, nos veremos en la penosa necesidad de negar el derecho de exámenes a su hijo (a) y le negaremos la entrada a clases. Por favor, no permita que esto suceda.", 250);
    doc.text(warning, 134, y, { align: 'center' });

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
