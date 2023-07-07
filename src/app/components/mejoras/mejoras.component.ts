import { Component } from '@angular/core';

@Component({
  selector: 'app-mejoras',
  templateUrl: './mejoras.component.html',
  styleUrls: ['./mejoras.component.css'],
})
export class MejorasComponent {
  array = [
    {
      ID: 'RM-001',
      Fecha: '3/7/2023',
      Tipo: 'Funcional',
      Tester: 'José Luis Manto',
      Titulo:
        'Seleccionar otra unidad de un producto ya existente en el carrito para agregarlo',
      Elemento: 'Producto',
      Descripcion:
        'Al elegir un producto y agregarlo al carrito, el botón de Add to Cart se reemplaza por Remove',
      Resultadoesperado:
        'Que siga apareciendo el botón Add to Cart además del botón Remove',
      Resultadoreal: 'Solo aparece el botón Remove',
      Impacto: 'Alto',
      Prioridad: 'Urgente',
      Estado: 'Abierto',
      Referencia: 'TC-002-Producto',
      Notas: 'https://prnt.sc/TRaE-mdxV9Yc',
    },
    {
      ID: 'RM-002',
      Fecha: '3/7/2023',
      Tipo: 'Funcional',
      Tester: 'López Perea',
      Titulo: 'Imágenes',
      Elemento: 'Productos',
      Descripcion: 'Imagen del producto ofrecido',
      Resultadoesperado: 'Que aparezca la imagen del producto ofrecido',
      Resultadoreal: 'Aparece la imagen de un perro',
      Impacto: 'Medio',
      Prioridad: 'Medio',
      Estado: 'Abierto',
      Referencia: 'Testing Exploratorio',
      Notas: 'https://prnt.sc/bS23oL3Ct2q8',
    },
    {
      ID: 'RM-003',
      Fecha: '3/7/2023',
      Tipo: 'Funcional',
      Tester: 'Mary Marin',
      Titulo: 'Hacer Click en el Logo ',
      Elemento: 'Logo ',
      Descripcion:
        'Que sin importar la página que estes consultando, se pueda hacer click en el logo y redirija al Home',
      Resultadoesperado: 'Que redirija al HOme o Pagina Principal',
      Resultadoreal: 'No tiene hipervinculo ',
      Impacto: 'Alto',
      Prioridad: 'Alta',
      Estado: 'Abierto',
      Referencia: 'Testing Exploratorio',
      Notas: 'N/A ',
    },
    {
      ID: 'RM-004 ',
      Fecha: '03/07/2023',
      Tipo: 'Funcional',
      Tester: 'Miguel Hojman',
      Titulo: 'Poder ver las Condiciones de Servicio y Politica de Privacidad',
      Elemento: 'Condiciones de Servicio y Politica de Privacidad',
      Descripcion:
        'Que en el sitio web se pueda hacer Click y leer las Condiciones de Servicio y la Politica de Privacidad ',
      Resultadoesperado:
        'Ver las Condiciones de Servicio y la Politica de Privacidad',
      Resultadoreal: 'No tiene hipervinculo',
      Impacto: 'Medio',
      Prioridad: 'Media',
      Estado: 'Abierto',
      Referencia: 'Testing Exploratorio',
      Notas: 'N/A',
    },
    {
      ID: 'RM-005',
      Fecha: '03/07/2023',
      Tipo: 'Funcional',
      Tester: 'César Martinez',
      Titulo: 'Poder ver los medios de pago que acepta el sitio web',
      Elemento: 'Cart',
      Descripcion:
        'Antes de realizar el Checkout, poder ver las formas de pago que ofrece el sitio web para realizar la compra ',
      Resultadoesperado: 'Elegir la forma de pago ',
      Resultadoreal: 'No tiene información de las formas de pago',
      Impacto: 'Alto',
      Prioridad: 'Alto',
      Estado: 'Abierto',
      Referencia: 'Testing Exploratorio',
      Notas:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      ID: 'RM-006',
      Fecha: '4/7/2023',
      Tipo: 'Funcional',
      Tester: 'José Rivero',
      Titulo:
        'Que tenga el ojo visor para verificar si se ingresó correctamente la contraseña',
      Elemento: 'Login',
      Descripcion:
        'Al ingresar los datos de la contraseña que permita ver el contenido',
      Resultadoesperado: 'Ver la si la contraseña ingresada esta correcta',
      Resultadoreal: 'No tiene el ojo visor',
      Impacto: 'Alta',
      Prioridad: 'Alta',
      Estado: 'Abierto',
      Referencia: 'Testing Exploratorio',
      Notas: 'https://prnt.sc/hy23tTOb0npr',
    },
  ];
}
