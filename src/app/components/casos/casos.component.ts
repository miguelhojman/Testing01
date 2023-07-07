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
        a: '1.- Estar en la página web www.saucedemo.com.',
        b: '2.- Contar con una cuenta válida',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Ingresar datos válidos en username y password.',
        b: '2.- Hacer Click en botón de color verde Login.',
      },
      ResultadoE: {
        a: '1.- Ingresar a la página principal.',
        b: '2.- Que muestre el Catalogo de Productos.',
      },
      ResultadoO: {
        a: '1.- Permite el acceso a la página principal home ',
        b: '2.- Muestra el Catálogo de productos',
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
        a: '1.- Estar en la página web www.saucedemo.com',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Ingresar datos Inválidos en username y password.',
        b: '2.- Hacer Click en botón de color verde Login.',
      },
      ResultadoE: {
        a: 'Devuelve el mensaje de "Epic sadface: el username y el password do not match any user in this service"',
      },
      ResultadoO: {
        a: '1.- No permite el acceso.',
        b: '2.- Muestra mensaje de error de username y password.',
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
        a: '1.- Estar en la página web www.saucedemo.com',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Ingresar sin datos en username y password',
        b: '2.- Hacer Click en botón de color verde Login',
      },
      ResultadoE: {
        a: 'Devuelve el mensaje de "Epic sadface: username is required',
      },
      ResultadoO: {
        a: '1.- No permite el acceso.',
        b: '2.- Muestra mensaje de error de username y password',
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
        a: '1.- Estar en la página web www.saucedemo.com',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Ingresar con datos válidos en username y password inválido.',
        b: '2.- Hacer Click en botón de color verde Login',
      },
      ResultadoE: {
        a: 'Devuelve el mensaje de "Epic sadface: el username y el password do not match any user in this service"',
      },
      ResultadoO: {
        a: '1.- No permite el acceso.',
        b: '2 .- Muestra mensaje de error de username y password',
      },
      Estado: 'Aprobado',
      Observaciones:
        'https://drive.google.com/drive/u/0/folders/1VyvWXzXbszRDuvtwSd3PdKT8ZQ_63omv  ',
    },
    {
      Escenario: 'Login',
      ID: 'TC-005-Login ',
      Titulo: 'Acceder con usuario inválido y password válido a Login',
      Tester: 'César Martínez',
      Criticidad: 'Media',
      Precondiciones: {
        a: '1.- Estar en la página web www.saucedemo.com',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Ingresar con datos inválidos en username y password válido.',
        b: '2.- Hacer Click en botón de color verde Login.',
      },
      ResultadoE: {
        a: 'Devuelve el mensaje de "Epic sadface: el username y el password do not match any user in this service"',
      },
      ResultadoO: {
        a: '1.- No permite el acceso.',
        b: '2.- Muestra mensaje de error de username y password.',
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
        a: '1.- Estar en la página web www.saucedemo.com',
        b: '2.- Estar en la página principal (home)',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Hacer Click en el botón Add to cart (Añadir al carrito) correspondiente a un producto elegido ',
        b: '2.- Repetir por cada producto que quiera agregarse al carrito',
      },
      ResultadoE: {
        a: 'Que en cada caso se agregue 1 producto al Cart (carrito)',
      },
      ResultadoO: {
        a: 'En algunos casos lo agrega y en otros no.',
      },
      Estado: 'Falló',
      Observaciones: 'https://prnt.sc/cbQHB1d5Yj3k',
    },
    {
      Escenario: 'Producto',
      ID: 'TC-007-Producto',
      Titulo:
        'Seleccionar otra unidad de un producto ya existente en el carrito para agregarlo',
      Tester: 'Verónica López Perea',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '1.- Estar en la página web www.saucedemo.com',
        b: '2.- Estar en la página principal (home) ',
        c: '3.- Que en el carrito haya agregado por lo menos un producto',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Hacer Click en el botón blanco Add to cart (Añadir al carrito) correspondiente al producto',
      },
      ResultadoE: {
        a: 'Que se agregue 1 producto al Cart (carrito)',
      },
      ResultadoO: {
        a: 'No aparece el botón Add to Cart (añadir al carrito), fue reemplazado por el botón Remove (eliminar)',
      },
      Estado: 'Bloqueado',
      Observaciones: 'https://prnt.sc/TRaE-mdxV9Yc',
    },
    {
      Escenario: 'Producto',
      ID: 'TC-008-Producto',
      Titulo: 'Seleccionar desde el título un producto para agregar al carrito',
      Tester: 'José Luis Manto',
      Criticidad: 'Media',
      Precondiciones: {
        a: '1.- Estar en la página web www.saucedemo.com',
        b: '2.- Estar en la página principal (home)',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Hacer Click en el título de un producto.',
        b: '2.- Hacer Click en el botón Add to cart (Añadir al carrito)',
      },
      ResultadoE: {
        a: '1.- Que aparezca información del producto seleccionado y permita cargarlo al carrito con el botón Add to cart (agregar al carrito)',
        b: '2.- Que se agregue 1 producto al Cart (carrito)',
      },
      ResultadoO: {
        a: 'Aparece información de otro producto con su botón Add to cart (agregar al carrito)',
      },
      Estado: 'Falló',
      Observaciones:
        'https://prnt.sc/OZZgzaXPvh73 https://prnt.sc/KzkXi4p46cyP',
    },
    {
      Escenario: 'Producto',
      ID: 'TC-009-Producto',
      Titulo: 'Acceder a la compra de mas un producto de igual clase',
      Tester: 'José Luis Manto',
      Criticidad: 'Media',
      Precondiciones: {
        a: '1.- Estar en la página web www.saucedemo.com',
        b: '2.- Estar en la página principal (home)',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Hacer Click en add to cart (añadir al carrito) del producto. ',
        b: '2.- Hacer Click en el ícono del carrito (Imagen superior derecha)',
        c: '3.- Aparece la ventana con el producto y el cuadrado con las cantidades a comprar.',
        d: '4.- Si se quiere comprar mas de una unidad se tendría que modificar dentro del espacio donde dice "1"',
      },
      ResultadoE: {
        a: 'Colocar la cantidad que se necesite comprar',
      },
      ResultadoO: {
        a: 'No se puede modificar el nro de unidades (QTY)',
      },
      Estado: 'Falló',
      Observaciones: 'https://prnt.sc/nF-IrH6Xpahd',
    },
    {
      Escenario: 'Página Principal',
      ID: 'TC-010-Cart',
      Titulo: 'Acceder al Carrito de Compras desde la Página Principal',
      Tester: 'Miguel Hojman',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '1.- Contar con datos válidos de una cuenta.',
        b: '2.- Ingresar a la página https://www.saucedemo.com',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: 'Hacer Click en el ícono del Carrito de Compras',
      },
      ResultadoE: {
        a: 'Se redirecciona a la página Your Cart (Tu carrito)',
      },
      ResultadoO: {
        a: 'Se redirecciona a la página "Your Cart" (Tu carrito)',
      },
      Estado: 'Aprobado',
      Observaciones: 'N/A',
    },
    {
      Escenario: 'Página "Your Cart"',
      ID: 'TC-011-Cart',
      Titulo: 'Volver a la Página Principal desde el Carrito de Compras.',
      Tester: 'Miguel Hojman',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '1.- Contar con datos válidos de una cuenta',
        b: '2.- Ingresar a la página https://www.saucedemo.com/',
        c: '3.- Ingresar a la página del carrito haciendo Click en el ícono del Carrito de Compras',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: 'Hacer Click en el botón Continue Shopping (Continuar comprando)',
      },
      ResultadoE: {
        a: 'Se redirecciona a la Home (Página Principal)',
      },
      ResultadoO: {
        a: 'Se redirecciona a la Home (Página Principal)',
      },
      Estado: 'Aprobado',
      Observaciones: 'N/A',
    },
    {
      Escenario: 'Página "Your Cart"',
      ID: 'TC-012-Cart',
      Titulo: 'Continuar con la compra de productos.',
      Tester: 'Miguel Hojman',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '1.- Contar con datos válidos de una cuenta',
        b: '2.- Ingresar a la página https://www.saucedemo.com/',
        c: 'Ingresar a la página del carrito haciendo Click en el ícono del Carrito de Compras',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: 'Hacer Click en el botón Checkout (verificar)',
      },
      ResultadoE: {
        a: 'Se redirecciona al formulario de Your Information (Datos Personales)',
      },
      ResultadoO: {
        a: 'Se redirecciona al formulario de Your Information (Datos Personales)',
      },
      Estado: 'Aprobado',
      Observaciones: 'N/A',
    },
    {
      Escenario: 'Página "Your Cart"',
      ID: 'TC-013 Cart',
      Titulo: 'Quitar un producto del Carrito de Compras.',
      Tester: 'Miguel Hojman',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '1.- Contar con datos válidos de una cuenta',
        b: '2.- Ingresar a la página https://www.saucedemo.com/',
        c: '3.- Seleccionar al menos un producto del catálogo.',
        d: '4.- Ingresar a la página del carrito haciendo Click en el ícono del Carrito de Compras',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: 'Hacer Click en el botón Remove (Eliminar)',
      },
      ResultadoE: {
        a: 'Se elimina el producto de Your Cart (Tu carrito)',
      },
      ResultadoO: {
        a: 'Se elimina el producto del icono Cart (Carrito de Compras)',
      },
      Estado: 'Aprobado',
      Observaciones: 'N/A',
    },
    {
      Escenario: 'Cart',
      ID: 'TC-014-Cart',
      Titulo: 'Verificar el contenido del carrito de compras',
      Tester: 'José Rivero',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '1.- Estar en la página principal ',
        b: '2.- Que existan productos seleccionados',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Hacer Click en el botón Negro Cart (Carrito) ',
        b: '2.- Que redireccione a la página Your Cart (tu carrito)',
      },
      ResultadoE: {
        a: 'Que redireccione a la página Your Cart (Tu Carrito)',
      },
      ResultadoO: {
        a: 'Muestra el resultado deseado',
      },
      Estado: 'Aprobado',
      Observaciones: 'N/A',
    },
    {
      Escenario: 'Your Cart',
      ID: 'TC-015- Your Cart',
      Titulo:
        'Verificar el producto por la imagen del contenido del carrito de compras',
      Tester: 'José Rivero',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '1.- Estar en la página Your cart (Tu carrito) ',
        b: '2.- Que exista o no productos seleccionados en la Description (Descripción)',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1.- Hacer Click en la imagen del producto seleccionado. ',
        b: '2.- De estar conforme con el mismo y permita volver a la página para confirmar selección de compra ',
        c: '3.- Hacer Click en el botón Back to products (volver a productos) en el extremo izquierdo del lado de abajo',
      },
      ResultadoE: {
        a: '1.- Que redireccione a la página principal de selección de producto. ',
        b: '2.- Al estar conforme con el producto, que redireccione a la página Your cart (Tu carrito) para terminar el chequeo del carrito de compra',
      },
      ResultadoO: {
        a: '1.- En el primer caso si redirige a la página Back to products (Volver a los productos)',
        b: '2.- Al verificar que coincide la imagen del producto seleccionado y hacer Click en botón Back to producto (volver al producto) retornar a la página de productos.No retorna a la página Your cart (Tu carrito) para concretar la compra.',
      },
      Estado: 'Falló',
      Observaciones: 'https://prnt.sc/fMaIEpRClEz6',
    },
    {
      Escenario: 'Checkout',
      ID: 'TC-016-Checkout',
      Titulo: 'Que pueda verificar la compra (Checkout)',
      Tester: 'José Rivero',
      Criticidad: 'Alta',
      Precondiciones: {
        a: '1.- Estar en la página Your cart (Tu carrito) ',
        b: '2.- Que exista productos seleccionados en la Description (Descripción)',
      },
      Datos: {
        a: 'Username: problem_user',
        b: 'Password: secret_sause',
      },
      Pasos: {
        a: '1. Hacer Click en botón Verde Checkout (Verificar) ubicado en el extremo derecho del lado de abajo.',
      },
      ResultadoE: {
        a: 'Que redireccione a la página Checkout: Your Information (Verificar: Su información).',
      },
      ResultadoO: {
        a: 'Muestra el resultado deseado',
      },
      Estado: 'Aprobado',
      Observaciones: 'N/A',
    },
  ];
}
