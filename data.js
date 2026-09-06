export const units = [
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
            "Lanzas una pelota hacia arriba desde el suelo. Su altura sigue h = −5t² + 20t (metros, t en segundos). ¿En qué momento(s) está a 15 metros de altura?",
          steps: [
            "Igualamos: −5t² + 20t = 15",
            "Ordenamos y dividimos entre −5: t² − 4t + 3 = 0",
            "Factorizamos: (t − 1)(t − 3) = 0",
            "t = 1 o t = 3",
          ],
          answer: "La pelota está a 15 m a los 1 y a los 3 segundos.",
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
  { id: "desigualdades", name: "Desigualdades", ready: false, levels: {} },
  { id: "funciones", name: "Funciones algebraicas", ready: false, levels: {} },
];

export const levelMeta = {
  facil: { label: "Fácil", cls: "easy" },
  medio: { label: "Medio", cls: "medium" },
  dificil: { label: "Difícil", cls: "hard" },
};
