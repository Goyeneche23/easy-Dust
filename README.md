# Easy-Dust
Solución accesible y especializada para el monitoreo de temperatura, humedad y polvo en racks de telecomunicación.

## Sensores
Se usan sensores dht11 y GP2Y1010AU0F 

## Base de datos
Almacenará las lecturas de los modulos de sensores en los racks, accesible y visible mediante la UI.

## Interfaz
Instrucciones para probar la interfaz:
1. Descarga el proyecto.
2. Tener Xampp instalado.
3. Descargar base de datos `easy_dust.sql`.
4. mover carpeta interfaz en .htdocs.
5. Ejecuta `(http://localhost/Interfaz/index.html)` en tu navegador.

### Animation

#### Wind
El elemento `<path>` en SVG (Scalable Vector Graphics) define una ruta a seguir, creando formas complejas mediante comandos. Los comandos más comunes en un `<path>` son:

- **M (moveto)**: mueve la posición actual a un punto específico, sin dibujar una línea.
- **L (lineto)**: dibuja una línea desde el punto actual hasta el punto especificado.
- **C (curveto)**: dibuja una curva cúbica Bézier.
- **S (smooth curveto)**: dibuja una curva cúbica Bézier suave.
- **Q (quadratic Bézier curve)**: dibuja una curva cuadrática Bézier.
- **T (smooth quadratic Bézier curveto)**: dibuja una curva cuadrática Bézier suave.
- **Z (closepath)**: cierra la ruta, conectando el último punto al punto inicial.

### Snow
Se crea una trayectoria a travez del div en el que se encuentra y se crean distintas particulas en diferentes posiciones y con diferentes velocidades(delay).

## Presentaciones
Para abrir las presentaciones de pitch y demostración, utiliza los siguientes enlaces a Canva:
- Pitch
- Demostración

## Pruebas
Para probar los sensores y la base de datos, sigue estos pasos:
1. Navega a las carpetas `test_dht`, `test_gp2` y `base_de_datos`.
2. Ejecuta los archivos de prueba con el IDE de tu preferencia, recomendablemente Arduino.

## Documentación Adicional
El proyecto incluye:
- La ficha técnica de los dos sensores utilizados.
- El archivo para imprimir en 3D el módulo que contendrá los sensores.
