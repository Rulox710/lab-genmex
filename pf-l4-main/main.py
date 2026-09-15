ANSWERS = {
  'INV': '¡¡¡Lo que ingresó es inválido!!! ({:s})',
  'ENTER': "<ENTER para continuar>",
  'OPTION': "Seleccione una opción",
  'RANGE': "Seleccione una opción en el rango de opciones",
  'ACCEPT': "Seleccionó: {:s}",
  'YES': "Sí",
  'NO': "No",
}

# Variables relevantes
"""Corresponde a qué operacion"""
option: int
"""Corresponde a cuántos numeros en la operación"""
size: int
"""Números de la operación"""
numbers: list[int] = []

# Seleccionar operación
print('¿Qué quiere hacer?')
answers = ['1. Suma','2. Resta','3. Multiplicación','4. División','5. Módulo']
while True:
  print(answers)
  try:
    option = int(input("Ingresa un número del 1 al 5: "))
    if 1 <= option <= 5:
      print(ANSWERS['ACCEPT'].format(answers[option-1]))
      break
    else:
      print(ANSWERS['INV'].format('Número inválido'))
  except ValueError:
    print(ANSWERS['INV'].format('No es un número'))

# Seleccionar cantidad de números
print('Efectuar operación sobre 2 o 3 números')
answers = ['2. Dos números','3. Tres números']
while True:
  print(answers)
  try:
    size = int(input("Ingresa el número 2 o 3: "))
    if 2 <= size <= 3:
      print(ANSWERS['ACCEPT'].format(answers[size-2]))
      break
    else:
      print(ANSWERS['INV'].format('Número inválido'))
  except ValueError:
    print(ANSWERS['INV'].format('No es un número'))

# Seleccionar los números
INPUT_NUMBERS = ['Dé un un número: ', 'Dé otro número: ', 'Dé un último número: ']
for s in range(0, size):
  while True:
    try:
      numbers.append(int(input(INPUT_NUMBERS[s])))
      break
    except ValueError:
      print(ANSWERS['INV'].format('No es un número'))

# Resolver la operación con los números
OPERATIONS = {
  1: ['+', lambda a, b: a + b],
  2: ['-', lambda a, b: a - b],
  3: ['*', lambda a, b: a * b],
  4: ['/', lambda a, b: a / b],
  5: ['%', lambda a, b: a % b],
}
resultado = -1
if size == 2:
  try: resultado = OPERATIONS[option][1](numbers[0], numbers[1])
  except ZeroDivisionError: print("No se puede dividir entre cero")
else:
  try: resultado = OPERATIONS[option][1](OPERATIONS[option][1](numbers[0], numbers[1]),numbers[2])
  except ZeroDivisionError: print("No se puede dividir entre cero")

# Imprimir resultado
last_print = 'El resultado es: '
for i, number in enumerate(numbers):
  last_print += f'{number} {OPERATIONS[option][0] if i + 1 < size else f"= {resultado}"}'
print(last_print)
