ANSWERS: dict[str, str] = {
  'INV': '¡¡¡Lo que ingresó es inválido!!! ({:s})',
  'ENTER': "<ENTER para continuar>",
  'OPTION': "Seleccione una opción",
  'RANGE': "Seleccione una opción en el rango de opciones",
  'ACCEPT': "Seleccionó: {:s}",
  'YES': "Sí",
  'NO': "No",
}

print('¿Qué quiere hacer')
answers = ['1.Suma','2.Resta','3.Multiplicación','4.División','5.Módulo']
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

number_1 = -1
number_2 = -1
while True:
  try:
    number_1 = int(input('Dé un número: '))
    break
  except ValueError:
    print(ANSWERS['INV'].format('No es un número'))
print('Dé otro número')
while True:
  try:
    number_2 = int(input("Ingrese el otro número: "))
    break
  except ValueError:
    print(ANSWERS['INV'].format('No es un número'))


resultado = -1
operacion = '+'
if option == 1: resultado = number_1 + number_2
elif option == 2:
  resultado = number_1 - number_2
  operacion = '-'
elif option == 3:
  resultado = number_1 * number_2
  operacion = '*'
elif option == 4:
  operacion = '/'
  try: resultado = number_1 / number_2
  except ZeroDivisionError: print("No se puede dividir entre cero")
elif option == 5:
  operacion = '%'
  try: resultado = number_1 % number_2
  except ZeroDivisionError: print("No se puede dividir entre cero")

print(f'El resultado es: {number_1} {operacion} {number_2} = {resultado}')
