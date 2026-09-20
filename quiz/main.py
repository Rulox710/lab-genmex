import os, sys, csv
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from utils.consoleMenu import InteractiveConsole

def read_psv() -> dict[int, str]:
  """
  Lee el archivo 'trivia.psv' y crea un diccionario con las entradas de
  cada fila.

  Returns:
    Un diccionario de la forma {`int`: `str`}.
  """

  dictionary: dict[int, str] = {}
  with open('trivia.psv', newline='', encoding='utf-8') as file:
    reader = csv.reader(file, delimiter='|')
    for row in reader:
      try:
        key = int(row[0])
        if key not in dictionary:
          dictionary[key] = row[1]
      except (ValueError, TypeError): continue
  return dictionary

def save_psv(dictionary: dict[int, str]) -> None:
  """
  Guarda un diccionario con datos de los números en el archivo
  'trivia.psv'.

  Args:
    dictionary(dict[int, str]): Viene de la forma
    {`int`: `str`}.
  """

  with open('trivia.psv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file, delimiter="|")
    for key, value in dictionary.items():
        writer.writerow([key, value])

def _fact_format(num: int, fact: str) -> dict[str, int|str]:
  """
  Crea un diccionario con un formato específico para los datos dados.

  Args:
    num(int): El número del que se escribe el facto.
    fact(str): El texto que corresponde al facto del número.

  Returns:
    Un diccionario con el formato {'numero': `int`, 'text': `str`}.
  """

  return {'number': num, 'text': fact}

def trivia_fetch(num: int) -> dict[str, int|str]:
  """
  Obtiene el facto de un número dado.

  Args:
    num(int): El número del que se quiere saber el facto.

  Returns:
    Un diccionario con el formato {'numero': `int`, 'text': `str`}.
  """

  return _fact_format(num, read_psv()[num])

def main():
  trivia = read_psv()
  running = True

  options = ['Buscar un facto', 'Decir un facto', 'Salir']

  while(running):
    option = InteractiveConsole.ask_menu(options, 0, 3)

    if option == 1:
      print('¿De qué número quieres saber el facto?')
      number = InteractiveConsole.ask_integer()
      fact = _fact_format(number, trivia[number])
      print(fact['text'], '\n')

    elif option == 2:
      print('¿De qué número quieres escribir el facto?')
      number = InteractiveConsole.ask_integer()
      if trivia.get(number) != None:
        overwrite = InteractiveConsole.ask_yes_no(
          f'¿Seguro que quieres sobreescribir el facto del número {number}?',
          ['Sí', 's', 'yes', 'y'], ['No', 'n'])
        if not(overwrite):
          print('Se cancela la tirada de factos\n')
          continue
      print(f'¿Qué facto vas a escribir del {number}?')
      trivia[number] = input()
      print()

    else:
      print(f'Gracias por los factos. Vuelve pronto')
      running = False
      save_psv(trivia)

if __name__=="__main__":
  main()
