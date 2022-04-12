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
      orientation: 'p',
      unit: 'mm',
      format: 'letter'
    });
    const height = doc.internal.pageSize.getHeight(); //215.9
    const width = doc.internal.pageSize.getWidth(); //279.4 
    let y = 10;
    y = this.addCarnet(student, doc, y);
    y += 30;
    this.addCarnet(student, doc, y);

    doc.addPage('letter','p');

    y = 30;
    y = this.addSchedule(student, doc, y);
    y += 60;
    this.addSchedule(student, doc, y);

    doc.save("example-carnet.pdf");
  }

  addCarnet(student: Student, doc: jsPDF, y: number){
    const initY = y;
    doc.setDrawColor("black");
    doc.setTextColor("black");
    doc.setFontSize(8)
    doc.text(`CICLO ESCOLAR  ${String(student.yearSchool).toUpperCase()}`, 150, y);
    y += 8;
    doc.text("NI", 150, y);
    y += 8;
    doc.setTextColor("2f5597");
    doc.setFont("helvetica","bold");
    doc.text(`FECHA DE NACIMIENTO:`, 150, y);
    doc.setTextColor("black");
    doc.setFont("helvetica","normal");
    doc.text(`${String(student.born_date)}`, 195, y);
    y += 10;
    doc.setTextColor("2f5597");
    doc.text(`NOMBRE DEL ALUMNO:`, 10, y);
    doc.setTextColor("black");
    doc.text(`${String(student.names).toUpperCase()} ${String(student.last_name_first).toUpperCase()} ${String(student.last_name_second).toUpperCase()}`,43, y);
    doc.line(43, y + 1, 104, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`SECCIÓN:`, 106, y);
    doc.setTextColor("black");
    doc.text(`${String(student.section).toUpperCase()}`, 121, y);
    doc.line(121, y + 1, 146, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`GRADO:`, 148, y);
    doc.setTextColor("black");
    doc.text(`${String(student.grade).toUpperCase()}`, 161, y);
    doc.line(161, y + 1, 185, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`GRUPO: `, 187, y);
    doc.line(200, y + 1, 205, y + 1);
    y += 8;
    doc.setTextColor("2f5597");
    doc.text(`NOMBRE DEL PADRE/MADRE O TUTOR:`, 10, y);
    doc.setTextColor("black");
    doc.text(`${String(student.card.names).toUpperCase()}`, 65, y);
    doc.line(65, y + 1, 139, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`TEL. 1:`, 141, y);
    doc.setTextColor("black");
    doc.text(`${String(student.card.phone_father)}`, 151, y);
    doc.line(151, y + 1, 171, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`TEL. 2:`, 173, y);
    doc.setTextColor("black");
    doc.text(`${String(student.card.phone_mother)}`, 183, y);
    doc.line(183, y + 1, 203, y + 1);
    y += 6;
    doc.setTextColor("2f5597");
    doc.text(`TEL. 3:`, 20, y);
    doc.setTextColor("black");
    doc.text(`${String(student.card.phone_grandparents)}`, 33, y);
    doc.line(30, y + 1, 50, y + 1);
    doc.setTextColor("2f5597");
    doc.text(`ABUELOS`, 60, y);
    doc.text(`PAPÁ`, 158, y);
    doc.text(`MAMÁ`, 189, y);
    
    doc.setTextColor("806000");
    y += 8;
    doc.text("COLEGIATURA A 12 MESES: $", 10, y);
    doc.line(51, y + 1, 89, y + 1);
    doc.text("A PARTIR DEL DIA ONCE DE CADA MES SE COBRARÁ INTERÉS DEL $220.00", 90, y);
    y += 8;
    doc.text("COLEGIATURA A 10 MESES: $", 10, y);
    doc.line(51, y + 1, 89, y + 1);
    doc.text("A PARTIR DEL DIA ONCE DE CADA MES SE COBRARÁ INTERÉS DEL $220.00", 90, y);
    y += 10;
    doc.text("COLEGIATURAS", 40, y);
    doc.line(40, y + 1, 63, y + 1);
    y += 6;
    doc.setTextColor("red");
    const e = doc.splitTextToSize("Las colegiaturas deberán cubrirse dentro de los primeros 10 (diez) días de cada mes.Se aplicará un recargo de $220.00 en los pagos que se realicen después de este día haciéndose efectivo a partir del día 11 (once).", 190);
    doc.text(e, 104, y, { align: 'center' });
    y += 15;
    doc.setTextColor("806000");
    doc.setFont("helvetica","bold");
    const warning = doc.splitTextToSize("Si no se ha cubierto para el día 20 (veinte) del mes, nos veremos en la penosa necesidad de negar el derecho de exámenes a su hijo (a) y le negaremos la entrada a clases. Por favor, no permita que esto suceda.", 190);
    doc.text(warning, 104, y, { align: 'center' });
    doc.setFont("helvetica", "normal");
    y += 15;
    doc.text("BLVD. JOSE MARIA ESCRIBA No. 143 ENTRE CALLES LUCRECIA RUIZ Y LUZ VALENCIA", 114, y, { align: 'center' });
    y += 5;
    doc.text("COL. VILLAS DEL PALMAR C.P. 83105", 85, y);
    y += 5;
    doc.text("TEL. (662) 2 80 80 81 HERMOSILLO, SONORA", 80, y);
    doc.setDrawColor("red");
    doc.rect(5, initY - 5, 205, 120);
    return y;
  }

  addSchedule(student: Student, doc: jsPDF, y: number){
    doc.setFontSize(8);
    doc.setTextColor("black");
    doc.setDrawColor("black");
    doc.text("N. Alumno:", 40, y);
    doc.line(55, y + 1, 99, y + 1);
    doc.text("SECCIÓN:", 100, y);
    doc.line(115, y +1 , 139, y + 1);
    doc.text("GRADO:",140, y);
    doc.line(152, y + 1, 179, y + 1);
    doc.text("GRUPO:", 180, y);
    doc.line(192, y + 1, 200, y + 1);

    y += 5;
    doc.setTextColor("1f4e79");
    doc.text("CICLO ESCOLAR", 65, y);
    y += 5;
    doc.setDrawColor("FFC000");
    doc.setLineWidth(2);
    doc.rect(40, y, 160, 80);
    doc.setLineWidth(.3);
    doc.setDrawColor('FFE187');
    doc.rect(42, y + 2, 156, 76, 'S');

    //Rects will fill pattern colors
    doc.setFillColor("FFFDDB");
    doc.rect(42, y + 2, 156, 19, 'F');
    doc.setFillColor("F4E8D3");
    doc.rect(42, y + 21, 156, 19, 'F');
    doc.setFillColor("FFFDDB");
    doc.rect(42, y + 40, 156, 19, 'F');
    doc.setFillColor("F4E8D3");
    doc.rect(42, y + 59, 156, 19, 'F');

    //Horizontal Lines
    doc.setDrawColor("C3CBC3");
    doc.line(42, y + 21, 198, y + 21);
    doc.line(42, y + 40, 198, y + 40);
    doc.line(42, y + 59, 198, y + 59);

    //Vertical Lines
    doc.line(73.2, y + 2, 73.2, y + 78);
    doc.line(104.4, y + 2, 104.4, y + 78);
    doc.line(135.6, y + 2, 135.6, y + 78);
    doc.line(166.8, y + 2, 166.8, y + 78);

    //Labels
    doc.setTextColor("black");
    doc.setFontSize(12);
    y += 7;
    doc.text("Inscripción", 43, y);
    doc.text("Agosto", 75, y);
    doc.text("Septiembre", 106, y);
    doc.text("Octubre", 137, y);
    doc.text("Noviembre", 168, y);
    y += 19;
    doc.text("Libros", 43, y);
    doc.text("Diciembre", 75, y);
    doc.text("Enero", 106, y);
    doc.text("Febrero", 137, y);
    doc.text("Marzo", 168, y);
    y += 19;
    doc.text("Seg. Esc.", 43, y);
    doc.text("Abril", 75, y);
    doc.text("Mayo", 106, y);
    doc.text("Junio", 137, y);
    doc.text("Julio", 168, y);
    y += 19;
    doc.setFont("helvetica","bold");
    doc.text("Actividad anual", 42, y);
    doc.setFont("helvetica","normal");
    doc.text("Uniformes", 75, y);
    const label1 = doc.splitTextToSize("Reinscripción semestre par", 32);
    doc.text(label1, 106, y);
    doc.text("Libros sem-par", 137, y);
    return y;
  }
}
