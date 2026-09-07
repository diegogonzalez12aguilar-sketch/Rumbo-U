export const subjects = [
  {
    id: "matematicas",
    name: "Matemáticas",
    tagline: "Álgebra, geometría analítica, trigonometría y cálculo",
    ready: true,
    units:
    [
      {
        id: "numeros-reales",
        name: "Números reales y expresiones algebraicas",
        ready: true,
        levels: {
          facil: [
            {
              statement:
                "A las 3 a.m. de un día de invierno se reporta una temperatura de −3°C. A las 12 del día la temperatura ya es de 15°C. ¿De cuántos grados fue la diferencia de temperaturas?",
              steps: [
                "Diferencia = temperatura final − temperatura inicial",
                "Diferencia = 15 − (−3)",
                "Diferencia = 15 + 3 = 18",
              ],
              answer: "La diferencia fue de 18°C.",
            },
            {
              statement:
                "Simplifica la expresión algebraica: (2x + 3) + (5x − 7)",
              steps: [
                "Agrupamos términos semejantes: (2x + 5x) + (3 − 7)",
                "Sumamos los coeficientes de x: 7x",
                "Sumamos los términos independientes: −4",
              ],
              answer: "El resultado es 7x − 4.",
            },
            {
              statement:
                "Una alberca tiene 3/4 de su capacidad llena. Si le agregan 1/8 más, ¿qué fracción de la alberca queda llena?",
              steps: [
                "Buscamos común denominador entre 4 y 8: es 8",
                "3/4 = 6/8",
                "6/8 + 1/8 = 7/8",
              ],
              answer: "Queda llena 7/8 de la alberca.",
            },
          ],
          medio: [
            {
              statement: "Desarrolla el producto: (2x − 3)(x + 5)",
              steps: [
                "Multiplicamos término a término: 2x·x + 2x·5 − 3·x − 3·5",
                "Obtenemos: 2x² + 10x − 3x − 15",
                "Sumamos términos semejantes: 2x² + 7x − 15",
              ],
              answer: "El resultado es 2x² + 7x − 15.",
            },
            {
              statement:
                "Un terreno tiene un costo de $x² + 4x + 3 pesos por metro cuadrado, según su ubicación. Factoriza esta expresión para encontrar las dos medidas que la generan.",
              steps: [
                "Buscamos dos números que multiplicados den 3 y sumados den 4",
                "Esos números son 1 y 3",
                "Factorizamos: (x + 1)(x + 3)",
              ],
              answer: "La expresión factorizada es (x + 1)(x + 3).",
            },
            {
              statement:
                "Racionaliza la expresión: 1 / (√5 − 2)",
              steps: [
                "Multiplicamos numerador y denominador por el conjugado (√5 + 2)",
                "El denominador queda: (√5)² − (2)² = 5 − 4 = 1",
                "El numerador queda: (√5 + 2)",
              ],
              answer: "El resultado es √5 + 2.",
            },
          ],
          dificil: [
            {
              statement:
                "Simplifica la siguiente expresión algebraica compuesta:\n(2a)/(x−3) dividido entre (x−2)/(2a(x−2))",
              steps: [
                "Dividir fracciones es multiplicar por el recíproco",
                "(2a)/(x−3) · (2a(x−2))/(x−2)",
                "Simplificamos (x−2) en numerador y denominador",
                "Queda: (2a · 2a)/(x−3) = 4a²/(x−3)",
              ],
              answer: "El resultado simplificado es 4a²/(x−3).",
            },
            {
              statement:
                "Un ingeniero calcula el volumen de un tanque con la fórmula V = x³ − 4x. Factoriza completamente esta expresión.",
              steps: [
                "Factorizamos el factor común: x(x² − 4)",
                "x² − 4 es una diferencia de cuadrados: (x−2)(x+2)",
                "Queda: x(x − 2)(x + 2)",
              ],
              answer: "La factorización completa es x(x − 2)(x + 2).",
            },
            {
              statement:
                "Simplifica: (x² − 9)/(x² − x − 12)",
              steps: [
                "Factorizamos el numerador (diferencia de cuadrados): (x−3)(x+3)",
                "Factorizamos el denominador: (x−4)(x+3)",
                "Simplificamos el factor común (x+3)",
              ],
              answer: "El resultado simplificado es (x − 3)/(x − 4).",
            },
          ],
        },
      },
      {
        id: "ecuaciones",
        name: "Ecuaciones",
        ready: true,
        levels: {
          facil: [
            {
              statement:
                "Estás ahorrando para un boleto de concierto que cuesta $850. Ya tienes $320 ahorrados y planeas ahorrar la misma cantidad fija cada semana durante 6 semanas. ¿Cuánto debes ahorrar cada semana?",
              steps: [
                "Planteamos la ecuación: 320 + 6x = 850",
                "Despejamos: 6x = 850 − 320 → 6x = 530",
                "Dividimos: x = 530 ÷ 6 = 88.33",
              ],
              answer: "Debes ahorrar aproximadamente $88.33 por semana.",
            },
            {
              statement:
                "Un taxi cobra $15 de bandera más $8 por cada kilómetro recorrido. Si el viaje costó $103, ¿cuántos kilómetros recorrió?",
              steps: [
                "Ecuación: 15 + 8x = 103",
                "Despejamos: 8x = 103 − 15 → 8x = 88",
                "x = 88 ÷ 8 = 11",
              ],
              answer: "El taxi recorrió 11 km.",
            },
            {
              statement:
                "Un terreno rectangular tiene un área de 24 m², y su largo es el doble de su ancho. ¿Cuáles son las dimensiones del terreno?",
              steps: [
                "Sea x el ancho, entonces el largo es 2x.",
                "Área: x(2x) = 24 → 2x² = 24",
                "x² = 12 → x = √12 ≈ 3.46",
              ],
              answer: "Ancho ≈ 3.46 m, largo ≈ 6.93 m.",
            },
          ],
          medio: [
            {
              statement:
                "Repartes una herencia de $18,000 entre tú y tu hermano. Tú recibes $2,000 más que la mitad de lo que recibe tu hermano. ¿Cuánto recibe cada uno?",
              steps: [
                "Sea x lo del hermano; tú recibes (x/2) + 2000.",
                "Suman el total: x + (x/2) + 2000 = 18000",
                "Multiplicamos todo por 2: 2x + x + 4000 = 36000",
                "3x = 32000 → x = 10,666.67",
              ],
              answer: "Hermano ≈ $10,666.67; tú ≈ $7,333.33.",
            },
            {
              statement:
                "Encuentra las raíces de la ecuación: 2x² + 5x − 3 = 0",
              steps: [
                "Usamos la fórmula general: x = [−b ± √(b²−4ac)] / 2a",
                "a=2, b=5, c=−3 → discriminante = 25 − 4(2)(−3) = 25+24 = 49",
                "x = (−5 ± 7) / 4",
                "x₁ = 2/4 = 1/2, x₂ = −12/4 = −3",
              ],
              answer: "Las raíces son x = 1/2 y x = −3.",
            },
            {
              statement:
                "La ganancia semanal de un negocio de playeras es G = −10x² + 300x, donde x es el precio de cada playera. ¿A qué precio(s) la ganancia es exactamente $2,000?",
              steps: [
                "Igualamos: −10x² + 300x = 2000",
                "Ordenamos y dividimos entre −10: x² − 30x + 200 = 0",
                "Factorizamos: (x − 10)(x − 20) = 0",
                "x = 10 o x = 20",
              ],
              answer: "A $10 o a $20 por playera, la ganancia es $2,000.",
            },
          ],
          dificil: [
            {
              statement:
                "Un padre tiene el triple de la edad de su hijo. En 12 años, la edad del padre será el doble de la del hijo. ¿Qué edad tiene cada uno actualmente?",
              steps: [
                "Sea x la edad del hijo; padre = 3x.",
                "En 12 años: 3x + 12 = 2(x + 12)",
                "3x + 12 = 2x + 24",
                "x = 12",
              ],
              answer: "Hijo: 12 años; padre: 36 años.",
            },
            {
              statement:
                "Un cohete de prueba sigue h = −4.9t² + 35t + 2. ¿En qué momento toca el suelo (h = 0)?",
              steps: [
                "−4.9t² + 35t + 2 = 0",
                "Fórmula general: t = [−35 ± √(35² − 4(−4.9)(2))] / (2(−4.9))",
                "Discriminante: 1225 + 39.2 = 1264.2 → √1264.2 ≈ 35.56",
                "t = (−35 − 35.56)/(−9.8) ≈ 7.2 (se descarta la raíz negativa)",
              ],
              answer: "El cohete toca el suelo a los ≈7.2 segundos.",
            },
            {
              statement:
                "Quieres cercar un jardín rectangular con 40 metros de malla y que tenga un área de 96 m². ¿Cuáles son las dimensiones posibles del jardín?",
              steps: [
                "Perímetro: 2(l + a) = 40 → l = 20 − a",
                "Área: (20 − a)a = 96",
                "Ordenamos: a² − 20a + 96 = 0",
                "Factorizamos: (a − 8)(a − 12) = 0 → a = 8 o a = 12",
              ],
              answer: "El jardín mide 8 × 12 metros.",
            },
          ],
        },
      },
      {
        id: "desigualdades",
        name: "Desigualdades",
        ready: true,
        levels: {
          facil: [
            {
              statement:
                "Vas a rentar un coche. La tarifa es $150 fijos más $35 por día. Tienes un presupuesto máximo de $500. ¿Cuál es el máximo número de días que puedes rentarlo?",
              steps: [
                "Planteamos la desigualdad: 150 + 35x ≤ 500",
                "Despejamos: 35x ≤ 350",
                "x ≤ 10",
              ],
              answer: "Puedes rentarlo un máximo de 10 días.",
            },
            {
              statement: "Resuelve la desigualdad: 3x − 5 > x + 6",
              steps: [
                "Pasamos las x a un lado: 3x − x > 6 + 5",
                "2x > 11",
                "x > 11/2",
              ],
              answer: "La solución es x > 11/2.",
            },
            {
              statement:
                "Para aprobar un curso necesitas un promedio mayor o igual a 8. Llevas 7, 9 y 6 en tres exámenes. ¿Cuánto necesitas sacar como mínimo en el cuarto examen?",
              steps: [
                "Promedio: (7+9+6+x)/4 ≥ 8",
                "22 + x ≥ 32",
                "x ≥ 10",
              ],
              answer: "Necesitas sacar al menos 10 en el cuarto examen.",
            },
          ],
          medio: [
            {
              statement:
                "Una fábrica tiene un costo fijo de $2,000 y un costo variable de $15 por unidad producida. Cada unidad se vende en $35. ¿A partir de cuántas unidades vendidas la fábrica empieza a tener ganancias?",
              steps: [
                "Ganancia = ingresos − costos: 35x − (2000 + 15x) > 0",
                "35x − 2000 − 15x > 0",
                "20x > 2000 → x > 100",
              ],
              answer: "A partir de vender 101 unidades, la fábrica tiene ganancias.",
            },
            {
              statement: "Resuelve la desigualdad doble: −3 < 2x + 1 ≤ 7",
              steps: [
                "Restamos 1 en las tres partes: −4 < 2x ≤ 6",
                "Dividimos entre 2: −2 < x ≤ 3",
              ],
              answer: "La solución es −2 < x ≤ 3.",
            },
            {
              statement:
                "Un elevador soporta un peso máximo de 500 kg. Si ya hay 3 personas de 70 kg cada una, ¿cuántas personas más de 65 kg pueden subir sin exceder el límite?",
              steps: [
                "Peso actual: 3(70) = 210 kg",
                "210 + 65x ≤ 500",
                "65x ≤ 290 → x ≤ 4.46",
              ],
              answer: "Pueden subir 4 personas más como máximo.",
            },
          ],
          dificil: [
            {
              statement:
                "El rango seguro para conservar cierta vacuna es entre 2°C y 8°C. Si la conversión a Fahrenheit es F = (9/5)C + 32, encuentra el rango correspondiente en grados Fahrenheit.",
              steps: [
                "Planteamos: 2 ≤ C ≤ 8",
                "Sustituimos en F = (9/5)C + 32 en ambos extremos",
                "Para C=2: F = 3.6 + 32 = 35.6",
                "Para C=8: F = 14.4 + 32 = 46.4",
              ],
              answer: "El rango seguro es entre 35.6°F y 46.4°F.",
            },
            {
              statement:
                "Resuelve la desigualdad cuadrática: x² − 5x + 6 > 0",
              steps: [
                "Factorizamos: (x−2)(x−3) > 0",
                "Las raíces son x=2 y x=3, que dividen la recta en tres intervalos",
                "Probamos un valor en cada intervalo: el producto es positivo cuando x<2 o x>3",
              ],
              answer: "La solución es x < 2 o x > 3.",
            },
            {
              statement:
                "Una empresa de telefonía cobra $200 fijos más $1.5 por minuto. Un plan competidor cobra $350 fijos sin costo por minuto. ¿Para qué cantidad de minutos el primer plan es más barato?",
              steps: [
                "Planteamos: 200 + 1.5x < 350",
                "1.5x < 150",
                "x < 100",
              ],
              answer: "El primer plan es más barato si usas menos de 100 minutos.",
            },
          ],
        },
      },
      {
        id: "sistemas-ecuaciones",
        name: "Sistemas de ecuaciones",
        ready: true,
        levels: {
          facil: [
            {
              statement:
                "Un boleto de adulto cuesta $10 más que uno de niño. Si compras 2 adultos y 3 niños pagas $150 en total. ¿Cuánto cuesta cada boleto?",
              steps: [
                "Sea x el precio del adulto, y el del niño: x = y + 10",
                "2x + 3y = 150",
                "Sustituimos: 2(y+10) + 3y = 150 → 5y + 20 = 150",
                "5y = 130 → y = 26, x = 36",
              ],
              answer: "El boleto de niño cuesta $26 y el de adulto $36.",
            },
            {
              statement:
                "La suma de dos números es 20. Su diferencia es 4. ¿Cuáles son los números?",
              steps: [
                "x + y = 20",
                "x − y = 4",
                "Sumamos ambas ecuaciones: 2x = 24 → x = 12",
                "Sustituimos: 12 + y = 20 → y = 8",
              ],
              answer: "Los números son 12 y 8.",
            },
            {
              statement:
                "En una tienda, 3 plumas y 2 lápices cuestan $28. Una pluma cuesta $2 más que un lápiz. ¿Cuánto cuesta cada uno?",
              steps: [
                "Sea x pluma, y lápiz: x = y + 2",
                "3x + 2y = 28",
                "3(y+2) + 2y = 28 → 5y + 6 = 28",
                "5y = 22 → y = 4.4, x = 6.4",
              ],
              answer: "El lápiz cuesta $4.40 y la pluma $6.40.",
            },
          ],
          medio: [
            {
              statement:
                "Se quiere mezclar café tipo A ($120/kg) y tipo B ($80/kg) para obtener 10 kg de mezcla a $100/kg. ¿Cuántos kilos de cada tipo se necesitan?",
              steps: [
                "x + y = 10",
                "120x + 80y = 1000",
                "De la primera: x = 10 − y",
                "120(10−y) + 80y = 1000 → 1200 − 40y = 1000 → y = 5, x = 5",
              ],
              answer: "Se necesitan 5 kg de cada tipo de café.",
            },
            {
              statement:
                "Resuelve el sistema: 2x + 3y = 12 y x − y = 1",
              steps: [
                "De la segunda ecuación: x = y + 1",
                "Sustituimos: 2(y+1) + 3y = 12",
                "2y + 2 + 3y = 12 → 5y = 10 → y = 2",
                "x = 2 + 1 = 3",
              ],
              answer: "La solución es x = 3, y = 2.",
            },
            {
              statement:
                "Un bote viaja 30 km a favor de la corriente en 2 horas y regresa los mismos 30 km en contra de la corriente en 3 horas. ¿Cuál es la velocidad del bote y de la corriente?",
              steps: [
                "Sea b la velocidad del bote y c la de la corriente",
                "A favor: b + c = 15 (30 km / 2 h)",
                "En contra: b − c = 10 (30 km / 3 h)",
                "Sumamos: 2b = 25 → b = 12.5, c = 2.5",
              ],
              answer: "El bote va a 12.5 km/h y la corriente a 2.5 km/h.",
            },
          ],
          dificil: [
            {
              statement:
                "La suma de tres números es 18. El segundo es el doble del primero. El tercero es 3 más que el segundo. Encuentra los tres números.",
              steps: [
                "x + y + z = 18, con y = 2x y z = y + 3 = 2x + 3",
                "Sustituimos: x + 2x + (2x+3) = 18",
                "5x + 3 = 18 → 5x = 15 → x = 3",
                "y = 6, z = 9",
              ],
              answer: "Los números son 3, 6 y 9.",
            },
            {
              statement:
                "Resuelve el sistema de tres ecuaciones:\n5x + 2y − z = −7\nx − 2y + 2z = 0\n3y + z = 17",
              steps: [
                "De la tercera ecuación: z = 17 − 3y",
                "Sustituimos en la segunda: x − 2y + 2(17−3y) = 0 → x − 8y + 34 = 0 → x = 8y − 34",
                "Sustituimos ambas en la primera: 5(8y−34) + 2y − (17−3y) = −7",
                "40y − 170 + 2y − 17 + 3y = −7 → 45y = 180 → y = 4",
                "Entonces x = 8(4)−34 = −2, z = 17−12 = 5",
              ],
              answer: "La solución es x = −2, y = 4, z = 5.",
            },
            {
              statement:
                "Un restaurante vende combos de tacos (x), tortas (y) y quesadillas (z). Un día vendió 3x+2y+z=29 pesos por unidad de ingresos relativos, con x+y+z=12 unidades vendidas y 2x−y=3. Encuentra x, y, z.",
              steps: [
                "De la tercera ecuación: y = 2x − 3",
                "Sustituimos en la segunda: x + (2x−3) + z = 12 → 3x + z = 15 → z = 15 − 3x",
                "Sustituimos en la primera: 3x + 2(2x−3) + (15−3x) = 29",
                "3x + 4x − 6 + 15 − 3x = 29 → 4x + 9 = 29 → x = 5",
                "y = 2(5)−3 = 7, z = 15−15 = 0",
              ],
              answer: "Se vendieron x=5, y=7, z=0.",
            },
          ],
        },
      },
      {
        id: "funciones-algebraicas",
        name: "Funciones algebraicas",
        ready: true,
        levels: {
          facil: [
            {
              statement:
                "Encuentra el dominio de la función f(x) = √(x − 4)",
              steps: [
                "El contenido de una raíz cuadrada no puede ser negativo",
                "Planteamos: x − 4 ≥ 0",
                "x ≥ 4",
              ],
              answer: "El dominio es x ≥ 4, o sea [4, ∞).",
            },
            {
              statement:
                "Si f(x) = 3x − 2, encuentra f(5).",
              steps: [
                "Sustituimos x = 5 en la función",
                "f(5) = 3(5) − 2",
                "f(5) = 15 − 2 = 13",
              ],
              answer: "f(5) = 13.",
            },
            {
              statement:
                "Un plomero cobra f(x) = 300 + 150x, donde x son las horas trabajadas. ¿Cuánto cobra por un trabajo de 4 horas?",
              steps: [
                "Sustituimos x = 4",
                "f(4) = 300 + 150(4)",
                "f(4) = 300 + 600 = 900",
              ],
              answer: "Cobra $900 por 4 horas de trabajo.",
            },
          ],
          medio: [
            {
              statement:
                "Encuentra el dominio de la función f(x) = (x + 2)/(x − 3) y evalúa f(5).",
              steps: [
                "El denominador no puede ser cero: x − 3 ≠ 0 → x ≠ 3",
                "El dominio es todos los reales excepto x = 3",
                "f(5) = (5+2)/(5−3) = 7/2",
              ],
              answer: "Dominio: x ≠ 3. Además, f(5) = 7/2.",
            },
            {
              statement:
                "Encuentra el dominio de la función con regla f(x) = x² + 1 si su rango es f(x) ∈ [1, 17].",
              steps: [
                "Si f(x) = x² + 1 llega hasta 17, entonces x² = 16",
                "x = ±4",
                "El dominio que genera ese rango es x ∈ [−4, 4]",
              ],
              answer: "El dominio es Df = x ∈ [−4, 4].",
            },
            {
              statement:
                "Calcula el rango de la función y = e^(6x − 1/6) + 6",
              steps: [
                "La función exponencial e^(algo) siempre es mayor que 0",
                "Entonces e^(6x−1/6) > 0 para cualquier x",
                "Sumando 6: y > 0 + 6 = 6",
              ],
              answer: "El rango es (6, ∞).",
            },
          ],
          dificil: [
            {
              statement:
                "Determina si f(x) = x³ − 4x es una función par, impar o ninguna, y encuentra sus raíces.",
              steps: [
                "Evaluamos f(−x) = (−x)³ − 4(−x) = −x³ + 4x = −(x³ − 4x) = −f(x)",
                "Como f(−x) = −f(x), la función es impar",
                "Para las raíces: x(x² − 4) = 0 → x = 0, x = 2, x = −2",
              ],
              answer: "Es una función impar, con raíces en x = 0, 2, −2.",
            },
            {
              statement:
                "Dadas f(x) = 2x + 1 y g(x) = x² − 3, encuentra (f∘g)(x) y (g∘f)(x).",
              steps: [
                "(f∘g)(x) = f(g(x)) = 2(x²−3) + 1 = 2x² − 6 + 1 = 2x² − 5",
                "(g∘f)(x) = g(f(x)) = (2x+1)² − 3",
                "Desarrollamos: 4x² + 4x + 1 − 3 = 4x² + 4x − 2",
              ],
              answer: "(f∘g)(x) = 2x² − 5, y (g∘f)(x) = 4x² + 4x − 2.",
            },
            {
              statement:
                "Una empresa modela sus ganancias con f(x) = −2x² + 40x − 150. Encuentra el precio x que maximiza la ganancia y cuál es esa ganancia máxima.",
              steps: [
                "El máximo de una parábola que abre hacia abajo está en x = −b/2a",
                "x = −40/(2·−2) = −40/−4 = 10",
                "Sustituimos: f(10) = −2(100) + 400 − 150 = −200+400−150 = 50",
              ],
              answer: "El máximo se da en x = 10, con una ganancia de $50.",
            },
          ],
        },
      },
      {
        id: "productos-notables",
        name: "Productos notables y factorización",
        ready: true,
        levels: {
          facil: [
            {
              statement: "Factoriza: x² − 9",
              steps: [
                "Reconocemos una diferencia de cuadrados: a² − b²",
                "Se factoriza como (a+b)(a−b)",
                "Aquí a = x, b = 3",
              ],
              answer: "El resultado es (x + 3)(x − 3).",
            },
            {
              statement: "Desarrolla el binomio al cuadrado: (x + 4)²",
              steps: [
                "Usamos la fórmula (a+b)² = a² + 2ab + b²",
                "a = x, b = 4",
                "x² + 2(x)(4) + 16",
              ],
              answer: "El resultado es x² + 8x + 16.",
            },
            {
              statement: "Factoriza: x² + 7x + 10",
              steps: [
                "Buscamos dos números que multiplicados den 10 y sumados den 7",
                "Esos números son 2 y 5",
                "Factorizamos: (x+2)(x+5)",
              ],
              answer: "El resultado es (x + 2)(x + 5).",
            },
          ],
          medio: [
            {
              statement:
                "Un ingeniero necesita factorizar el área de un panel solar: 4x² − 25. Factorízalo.",
              steps: [
                "Es una diferencia de cuadrados: (2x)² − (5)²",
                "Se factoriza como (2x+5)(2x−5)",
              ],
              answer: "El resultado es (2x + 5)(2x − 5).",
            },
            {
              statement: "Factoriza usando el trinomio cuadrado perfecto: 9x² − 12x + 4",
              steps: [
                "Comprobamos: (3x)² = 9x², (2)² = 4",
                "2(3x)(2) = 12x, coincide con el término medio (con signo negativo)",
                "Se factoriza como (3x − 2)²",
              ],
              answer: "El resultado es (3x − 2)².",
            },
            {
              statement:
                "Factoriza el trinomio: 2x² + 5x − 3 (con coeficiente distinto de 1)",
              steps: [
                "Multiplicamos a·c: 2 × (−3) = −6",
                "Buscamos dos números que multiplicados den −6 y sumados den 5: son 6 y −1",
                "Reescribimos: 2x² + 6x − x − 3, factorizamos por agrupación: 2x(x+3) −1(x+3)",
                "Factor común: (x+3)(2x−1)",
              ],
              answer: "El resultado es (x + 3)(2x − 1).",
            },
          ],
          dificil: [
            {
              statement: "Factoriza completamente usando diferencia de cubos: x³ − 27",
              steps: [
                "Reconocemos la fórmula a³ − b³ = (a−b)(a² + ab + b²)",
                "Aquí a = x, b = 3",
                "Sustituimos: (x−3)(x² + 3x + 9)",
              ],
              answer: "El resultado es (x − 3)(x² + 3x + 9).",
            },
            {
              statement:
                "Simplifica la fracción algebraica: (x² − 9)/(2a) dividido entre (2a(x−2))/(x−2)",
              steps: [
                "Simplificamos primero el segundo término: 2a(x−2)/(x−2) = 2a",
                "Queda: (x²−9)/(2a) ÷ 2a = (x²−9)/(4a²)",
                "Factorizamos el numerador: (x−3)(x+3)/(4a²)",
              ],
              answer: "El resultado es (x−3)(x+3)/(4a²).",
            },
            {
              statement:
                "Factoriza completamente: x⁴ − 16",
              steps: [
                "Es una diferencia de cuadrados: (x²)² − (4)²",
                "Factorizamos: (x²−4)(x²+4)",
                "El primer factor también es diferencia de cuadrados: (x−2)(x+2)",
              ],
              answer: "El resultado es (x−2)(x+2)(x²+4).",
            },
          ],
        },
      },
      { id: "circunferencia", name: "Circunferencia", ready: false, levels: {} },
      { id: "parabola", name: "Parábola", ready: false, levels: {} },
      { id: "elipse", name: "Elipse", ready: false, levels: {} },
      { id: "hiperbola", name: "Hipérbola", ready: false, levels: {} },
      { id: "la-recta", name: "La recta", ready: false, levels: {} },
      {
        id: "ecuacion-general-2do-grado",
        name: "Ecuación general de segundo grado",
        ready: false,
        levels: {},
      },
      { id: "trigonometria-basica", name: "Trigonometría básica", ready: false, levels: {} },
      {
        id: "funciones-trigonometricas",
        name: "Funciones trigonométricas",
        ready: false,
        levels: {},
      },
      {
        id: "exponenciales-logaritmicas",
        name: "Funciones exponenciales y logarítmicas",
        ready: false,
        levels: {},
      },
      { id: "limites", name: "Límites y continuidad", ready: false, levels: {} },
      { id: "derivada", name: "La derivada", ready: false, levels: {} },
      { id: "integral", name: "La integral", ready: false, levels: {} },
    ]
  },
  {
    id: "fisica",
    name: "Física",
    tagline: "Mecánica, electricidad y óptica",
    ready: false,
    units: [],
  },
  {
    id: "espanol",
    name: "Español",
    tagline: "Comprensión lectora y redacción",
    ready: false,
    units: [],
  },
  {
    id: "quimica",
    name: "Química",
    tagline: "Química general e inorgánica",
    ready: false,
    units: [],
  },
];

export const levelMeta = {
  facil: { label: "Fácil", cls: "easy" },
  medio: { label: "Medio", cls: "medium" },
  dificil: { label: "Difícil", cls: "hard" },
};
