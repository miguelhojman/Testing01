import { Component } from '@angular/core';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css'],
})
export class CasosComponent {
  array = [
    {
      Escenario: 'Login',
      ID: 'TC-001-Login',
      Titulo: 'Acceder con valores válidos a Login',
      Tester: 'Mary Marin',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Login',
      ID: 'TC-002- Login',
      Titulo: 'Acceder con usuario y password inválidos a Login',
      Tester: 'Mary Marin',
      Criticidad: 'Media',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Login',
      ID: 'TC-003-Login ',
      Titulo: 'Acceder con usuario sin datos a Login',
      Tester: 'César Martínez',
      Criticidad: 'Media',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Login',
      ID: 'TC-004-Login',
      Titulo: 'Acceder con usuario válido y password inválido a Login',
      Tester: 'César Martínez',
      Criticidad: 'Media',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Login',
      ID: 'TC-005-Login ',
      Titulo: 'Acceder con usuario inválido y password válido a Login',
      Tester: 'César Martínez',
      Criticidad: 'Media',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Producto',
      ID: 'TC-006-Producto',
      Titulo: 'Seleccionar productos para agregar al carrito',
      Tester: 'Verónica López Perea',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Producto',
      ID: 'TC-007-Producto',
      Titulo:
        'Seleccionar otra unidad de un producto ya existente en el carrito para agregarlo',
      Tester: 'Verónica López Perea',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Producto',
      ID: 'TC-008-Producto',
      Titulo: 'Seleccionar desde el título un producto para agregar al carrito',
      Tester: 'José Luis Manto',
      Criticidad: 'Media',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Producto',
      ID: 'TC-009-Producto',
      Titulo: 'Acceder a la compra de mas un producto de igual clase',
      Tester: 'José Luis Manto',
      Criticidad: 'Media',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Página Principal',
      ID: 'TC-010-Cart',
      Titulo: 'Acceder al Carrito de Compras desde la Página Principal',
      Tester: 'Miguel Hojman',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Página "Your Cart"',
      ID: 'TC-011-Cart',
      Titulo: 'Volver a la Página Principal desde el Carrito de Compras.',
      Tester: 'Miguel Hojman',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Página "Your Cart"',
      ID: 'TC-012-Cart',
      Titulo: 'Continuar con la compra de productos.',
      Tester: 'Miguel Hojman',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Página "Your Cart"',
      ID: 'TC-013 Cart',
      Titulo: 'Quitar un producto del Carrito de Compras.',
      Tester: 'Miguel Hojman',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Cart',
      ID: 'TC-014-Cart',
      Titulo: 'Verificar el contenido del carrito de compras',
      Tester: 'José Rivero',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Your Cart',
      ID: 'TC-015- Your Cart',
      Titulo:
        'Verificar el producto por la imagen del contenido del carrito de compras',
      Tester: 'José Rivero',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
    {
      Escenario: 'Checkout',
      ID: 'TC-016-Checkout',
      Titulo: 'Que pueda verificar la compra (Checkout)',
      Tester: 'José Rivero',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '',
        b: '',
        c: '',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '',
        b: '',
        c: '',
      },
      ResultadoE: {
        a: '',
        b: '',
      },
      ResultadoO: {
        a: '',
        b: '',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv',
    },
  ];
}
