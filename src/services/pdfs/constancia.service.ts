import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable, { RowInput, ColumnInput } from 'jspdf-autotable';
import { Emergency } from 'src/models/emergency';
import { Student } from 'src/models/student';

@Injectable({
  providedIn: 'root'
})
export class ConstanciaService {

  constructor() { }

  createFolio(student: Student) {
    console.log(student);
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
    doc.text(`SOLICITUD A: ${String(student.section).toUpperCase()}`, 120, y);
    y += 6;
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(`Grado a cursar:`, 120, y);
    doc.setTextColor("blue");
    doc.text(`${String(student.grade).toUpperCase()}`, 155, y)
    y += 6;
    doc.setTextColor("black"); "./../assets/logo.png";
    doc.text("Ciclo Escolar: ", 120, y);
    doc.setTextColor("blue");
    doc.text(`${String(student.yearSchool)}`, 155, y)

    y += 6;
    doc.setFontSize(10)
    doc.setTextColor("black");
    doc.text(`Nombre del alumno (a)  ${String(student.names).toUpperCase()} ${String(student.last_name_first).toUpperCase()} ${String(student.last_name_second).toUpperCase()}`, 10, y);
    doc.line(48, y + 1, 206, y + 1);
    y += 6;
    doc.text(`Fecha de nacimiento  ${String(student.born_date).toUpperCase()}`, 10, y);
    doc.line(45, y + 1, 117, y + 1);
    doc.text(`Lugar ${String(student.born_place).toUpperCase()}`, 120, y);
    doc.line(130, y + 1, 206, y+1);
    y += 6;
    doc.text(`Dirección  ${String(student.address).toUpperCase()}`, 10, y);
    doc.line(27, y + 1, 206, y+1);
    y += 6;
    doc.text(`Colonia  ${String(student.colony).toUpperCase()}`, 10, y);
    doc.line(24, y + 1, 98, y+1);
    doc.text(`C.P.  ${String(student.postal_code)}`, 100, y);
    doc.line(108, y + 1, 130, y+1);
    doc.text(`Teléfono Particular  ${String(student.phone)}`, 132, y);
    doc.line(163, y + 1, 206, y+1);
    y += 6;
    doc.text(`CURP  ${String(student.curp).toUpperCase()}`, 10, y);
    doc.line(21, y + 1, 98, y+1);
    doc.text(`Estatura  ${String(student.height)}`, 100, y);
    doc.line(115, y + 1, 158, y+1);
    doc.text(`Peso  ${String(student.weight)}`, 160, y);
    doc.line(170, y + 1, 206, y+1);
    y += 6;
    doc.text(`Tipo de Sangre  ${String(student.blood_type).toUpperCase()}`, 10, y);
    doc.line(35, y + 1, 63, y+1);
    doc.text(`Utiliza Lentes  ${String(student.glasses ? 'SÍ' : 'NO').toUpperCase()}`, 65, y);
    doc.line(88, y + 1, 108, y+1);
    doc.text(`Alérgico a:  ${String(student.alergic ? 'SÍ' : 'NO').toUpperCase()}`, 110, y);
    doc.line(128, y + 1, 206, y+1);

    y += 10;
    doc.text(`PADECIMIENTOS:`, 10, y);
    y += 6;
    doc.text(`Déficit de atención e hiperactividad: ${String(student.ailments.has_deficit ? 'SÍ' : 'NO').toUpperCase()}`, 10, y);
    doc.line(67, y + 1, 148, y+1);
    doc.text(`Medicado  ${String(student.ailments.use_medicine ? 'SÍ' : 'NO').toUpperCase()}`, 150, y);
    doc.line(167, y + 1, 206, y+1);
    y += 6;
    doc.text(`Medicamentos  ${String(student.ailments.medicines != null ? student.ailments.medicines : 'ninguno').toUpperCase()}`, 10, y);
    doc.line(35, y + 1, 206, y+1);
    y += 6;
    doc.text(`Alguna cosa que nosotros debamos saber para ayudar a su hijo (a):`, 10, y);
    doc.rect(10, y + 2, 196, 12);
    const infoVital = doc.splitTextToSize(`${String(student.ailments.info_vital ? student.ailments.info_vital : '').toUpperCase()}`, 250);
    doc.text(infoVital, 11, y + 5);
    y += 20;
    doc.text(`Nombre del Padre o Tutor  ${String(student.father.names).toUpperCase()}`, 10, y);
    doc.line(53, y + 1, 206, y+1);
    y += 6;
    doc.text(`Celular  ${String(student.father.cellphone).toUpperCase()}`, 10, y);
    doc.line(23, y + 1, 98, y+1);
    doc.text(`E-mail  ${String(student.father.email ? student.father.email : '').toUpperCase()}`, 100, y);
    doc.line(112, y + 1, 206, y+1);
    y += 6;
    doc.text(`Ocupación  ${String(student.father.job).toUpperCase()}`, 10, y);
    doc.line(29, y + 1, 98, y+1);
    doc.text(`Lugar de Trabajo  ${String(student.father.job_address).toUpperCase()}`, 100, y);
    doc.line(129, y + 1, 206, y+1);
    y += 6;
    doc.text(`Horario  ${String(student.father.schedule).toUpperCase()}`, 10, y);
    doc.line(23, y + 1, 98, y+1);
    doc.text(`Teléfono(s) trabajo  ${String(student.father.job_phone).toUpperCase()}`, 100, y);
    doc.line(132, y + 1, 206, y+1);
    y += 6;
    doc.text(`Nombre de la Madre  ${String(student.mother.names).toUpperCase()}`, 10, y);
    doc.line(44, y + 1, 206, y+1);
    y += 6;
    doc.text(`Celular  ${String(student.mother.cellphone).toUpperCase()}`, 10, y);
    doc.line(23, y + 1, 98, y+1);
    doc.text(`E-mail  ${String(student.mother.email ? student.mother.email : '').toUpperCase()}`, 100, y);
    doc.line(112, y + 1, 206, y+1);
    y += 6;
    doc.text(`Ocupación  ${String(student.mother.job).toUpperCase()}`, 10, y);
    doc.line(29, y + 1, 98, y+1);
    doc.text(`Lugar de Trabajo  ${String(student.mother.job_address).toUpperCase()}`, 100, y);
    doc.line(129, y + 1, 206, y+1);
    y += 6;
    doc.text(`Horario  ${String(student.mother.schedule).toUpperCase()}`, 10, y);
    doc.line(23, y + 1, 98, y+1);
    doc.text(`Teléfono(s) trabajo  ${String(student.mother.job_phone).toUpperCase()}`, 100, y);
    doc.line(132, y + 1, 206, y+1);
    y += 8;
    doc.text("Familiar (es) a quien (es) llamar en caso de emergencia:", 10, y);
    y += 2;
    const data: Array<RowInput> = student.emergency.map((e:Emergency) => ({
      name: e.names,
      parent: e.family_relationship,
      tel: e.phone
    }));
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
