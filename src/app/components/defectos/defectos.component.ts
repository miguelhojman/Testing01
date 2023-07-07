import { Component } from '@angular/core';

@Component({
  selector: 'app-defectos',
  templateUrl: './defectos.component.html',
  styleUrls: ['./defectos.component.css'],
})
export class DefectosComponent {
  array = [
    {
      ID: 'BG-001',
      Fecha: '4/7/2023',
      Tipo: 'Funcional',
      Tester: 'Miguel Hojman',
      Titulo: 'Falla en el elemento "About" del Menú Hamburguesa',
      Elemento: 'Elemento "About" del Menú Hamburguesa',
      Descripcion: {
        a: '1.- Estar logueado en la página https://www.saucedemo.com',
        b: '2.- Hacer Click en el Menú Hamburguesa',
        c: '3.- Hacer Click en el elemento "About"',
        d: '',
      },
      Resultadoesperado: {
        a: 'Redireccionar a una página con contenido acerca del sitio.',
        b: '',
      },
      Resultadoreal: 'Se produce un ERROR 404.',

      Impacto: 'Alto',
      Prioridad: 'Alta',
      Estado: 'Abierto',
      Referencia: 'Testing Explotario',
      Notas:
        'https://drive.google.com/file/d/15vrsX9MgdcCkg_ILvwppPFt4FGIOLPmA/view?usp=sharing',
    },
    {
      ID: 'BG-002',
      Fecha: '4/7/2023',
      Tipo: 'Funcional',
      Tester: 'Miguel Hojman',
      Titulo: 'Falla al completar el formulario para finalizar la compra.',
      Elemento: 'Página Checkout.',
      Descripcion: {
        a: '1.- Estar logueado en la página https://www.saucedemo.com',
        b: '2.- Elegir un producto del catálogo',
        c: '3.- Hacer Click en el ícono del Carrito y hacer Click en el botón Checkout',
        d: '4.- Completar los campos del formulario.',
      },
      Resultadoesperado: {
        a: 'Redireccionar a una nueva página para completar la compra.',
        b: '',
      },
      Resultadoreal: 'No se pueden ingresar datos en el campo"Last Name".',
      Impacto: 'Alto',
      Prioridad: 'Alta',
      Estado: 'Abierto',
      Referencia: 'Testing Explotario',
      Notas:
        'https://drive.google.com/file/d/1JxxOqLLxteN1RHkMywAJJCd3eAyScz3_/view?usp=sharing',
    },
    {
      ID: 'BG-003',
      Fecha: '3/7/2023',
      Tipo: 'Funcional',
      Tester: 'Verónica López Perea',
      Titulo: 'Seleccionar productos para agregar al carrito.',
      Elemento: 'Producto.',
      Descripcion: {
        a: '1.- Hacer Click en el botón Add to cart (Añadir al carrito) correspondiente a un producto elegido',
        b: '2.- Repetir por cada producto que quiera agregarse al carrito',
      },
      Resultadoesperado: {
        a: 'Que en cada caso se agregue 1 producto al Cart (carrito).',
        b: '',
      },
      Resultadoreal: 'En algunos casos lo agrega y en otros no.',
      Impacto: 'Alto',
      Prioridad: 'Urgente',
      Estado: 'Abierto',
      Referencia: 'TC-001-Producto',
      Notas: 'https://prnt.sc/cbQHB1d5Yj3k',
    },
    {
      ID: 'BG-004',
      Fecha: '3/7/2023',
      Tipo: 'Funcional',
      Tester: 'Verónica López Perea',
      Titulo:
        'Seleccionar desde el título un producto para agregar al carrito.',
      Elemento: 'Producto.',
      Descripcion: {
        a: '1.- Hacer Click en el título de un producto.',
        b: '2.- Hacer Click en el botón Add to cart (Añadir al carrito).',
      },
      Resultadoesperado: {
        a: '1.- Que aparezca información del producto seleccionado y permita cargarlo al carrito con el botón Add to cart.',
        b: '2.- Que se agregue 1 producto al Cart (carrito)',
      },
      Resultadoreal:
        'Aparece información de otro producto con su botón Add to cart.',
      Impacto: 'Medio',
      Prioridad: 'Media',
      Estado: 'Abierto',
      Referencia: 'TC-003-Producto',
      Notas: 'https://prnt.sc/OZZgzaXPvh73 https://prnt.sc/KzkXi4p46cyP',
    },
    {
      ID: 'BG-005',
      Fecha: '3/7/2023',
      Tipo: 'Funcional',
      Tester: 'José Luis Manto',
      Titulo: 'Ordenar por precio de mayor a menor',
      Elemento: 'Lista desplegable.',
      Descripcion: {
        a: 'Ordenar los productos por precio de mayor a menor.',
        b: '',
      },
      Resultadoesperado: {
        a: 'Que los productos aparezcan en la lista ordenados por precio de mayor a menor.',
        b: '',
      },
      Resultadoreal: 'No ordena.',
      Impacto: 'Bajo',
      Prioridad: 'Baja',
      Estado: 'Abierto',
      Referencia: 'Testing Explotario.',
      Notas: 'https://prnt.sc/WMdsZBNCILaG',
    },
    {
      ID: 'BG-006',
      Fecha: '3/7/2023',
      Tipo: 'Funcional',
      Tester: 'Mary Marin',
      Titulo: 'Permanencia en la página.',
      Elemento: 'Login.',
      Descripcion: {
        a: '1.- Estar logueado en la página https://www.saucedemo.com.',
        b: '2.- Estar inactivo por 5 minutos.',
      },
      Resultadoesperado: {
        a: 'Deberia seguir logueado en la página.',
        b: '',
      },
      Resultadoreal: 'Pierde la sesion de login.',
      Impacto: 'Alto',
      Prioridad: 'Alta',
      Estado: 'Abierto',
      Referencia: 'Testing Explotario.',
      Notas:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      ID: 'BG-007',
      Fecha: '4/7/2023',
      Tipo: 'Funcional',
      Tester: 'José Rivero',
      Titulo:
        'Verificar el producto por la imagen del contenido del carrito de compras.',
      Elemento: 'Your Cart.',
      Descripcion: {
        a: '1.- Hacer Click en la imagen del producto seleccionado.',
        b: '2.- De estar conforme con el mismo permita volver a la página para confirmar selección de compra.',
        c: '3.- Hacer Click en el boton Back to product (volver al produto) en el extremo izquierdo del lado de abajo.',
      },
      Resultadoesperado: {
        a: '1.- Que redireccione a la página principal de selección de producto.',
        b: '2.- Al estar conforme con el producto seleccionado, que redireccione a la página Your cart (Tu carrito) para terminar chequeo del carrito compra',
      },
      Resultadoreal:
        'Al verificar que coincide la imagen del producto seleccionado y hacer Click en boton Back to producto (volver al producto) retornar a la página de productos.',
      Impacto: 'Alto',
      Prioridad: 'Alta',
      Estado: 'Abierto',
      Referencia: 'TC-015-Your cart',
      Notas: 'https://prnt.sc/fMaIEpRClEz6',
    },
  ];
}
