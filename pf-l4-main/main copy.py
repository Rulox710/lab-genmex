SPECIAL_CHARACTERS = {
  'UP': "\u001B[{:n}A",
  'DOWN': "\u001B[{:n}B",
  'RIGHT': "\u001B[{:n}C",
  'LEFT': "\u001B[{:n}D",
  'NEXT_LINE': "\u001B[{:n}E",
  'PREV_LINE': "\u001B[{:n}F",

  # Directos (solo toString)
  'START_LINE': "\r",
  'CLEAR': "\u001B[2J",
  'CLEAR_FROM_CURSOR': "\u001B[0J",
  'CLEAR_CURRENT_LINE': "\u001B[2K",
  'SAVE_CURSO': "\u001b[s",
  'REST_CURSO': "\u001b[u",
  # Repetibles
  'NEW_LINE': "\n",
  'BACKSPACE': "\b",
}

answers: dict[str, str] = {
  'INV': '¡¡¡Lo que ingresó es inválido!!! ({:s})',
  'ENTER': "<ENTER para continuar>",
  'OPTION': "Seleccione una opción",
  'RANGE': "Seleccione una opción en el rango de opciones",
  'ACCEPT': "Seleccionó: {:d}",
  'YES': "Sí",
  'NO': "No",
}

first_error: bool = False
numero: int = -1
while True:
    try:
        numero = int(input("Ingresa un número del 1 al 5: "))
        if 1 <= numero <= 5: break
        else:
            first_error = True
            print(answers['INV'].format('Número inválido'))
    except ValueError:
        first_error = True
        print(answers['INV'].format('No es un número'))
if first_error:
  first_error = False
  print(SPECIAL_CHARACTERS['PREV_LINE'].format(4))
print(answers['ACCEPT'].format(numero))
