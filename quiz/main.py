import os, sys, csv
from typing import List
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import random
import requests

from utils.consoleMenu import InteractiveConsole

url: str = 'https://opentdb.com/api.php?amount={0}'

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

def trivia_fetch(num: int, legacy: bool=False) -> dict[str, int|str]:
  """
  Obtiene el facto de un número dado.

  Args:
    num(int): El número del que se quiere saber el facto.

  Returns:
    Un diccionario con el formato {'numero': `int`, 'text': `str`}.
  """

  if legacy: return _fact_format(num, read_psv()[num])

  response = requests.get(url.format(num))
  trivia = response.json()
  return trivia

def legacy_version() -> bool:
  """
    Permite realizar una trivia en consola, según a como comprendí
    cuando no habían actualizado el laboratorio.
    Honestamente, me daba pena tener que borrar mi trabajo y lo coloqué
    como 'legado'

    Returns:
      Indica 'False' si ya se ha terminado la versión de legado.
  """

  trivia = read_psv()
  running = True
  options = ['Buscar un facto', 'Decir un facto', 'Salir']
  while(running):
    option = InteractiveConsole.ask_menu(options, 0, 3)

    if option == 1:
      print('¿De qué número quieres saber el facto?')
      number = InteractiveConsole.ask_integer()
      fact = _fact_format(number, trivia[number])
      print(fact, '\n')

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
      print('Gracias por los factos')
      running = False
      save_psv(trivia)
  return False

def api_version() -> bool:
  """
  Permite realizar una trivia en consola, según los líneamientos
  actualizados del laboratorio.

  Returns:
    Indica 'False' si ya se ha terminado la versión de api.
  """

  def __multiple(question: dict[str, str| List[str]]) -> None:
    """
    Permite responder una pregunta de opción múltiple.
    """

    print(question['question'])
    incorrect_answers: List[str] = question['incorrect_answers']
    position: int = random.randint(0, 3)
    incorrect_answers.insert(position, question['correct_answer'])
    answers: List[str] = incorrect_answers
    option = InteractiveConsole.ask_menu(answers, 0, len(answers))

    if position == option-1: print('Correcto')
    else: print(f'Incorrecto. La respuesta es {question["correct_answer"]}')
    print()

  def __boolean(question: dict[str, str| List[str]]) -> None:
    """
    Permite responder una pregunta de sí o no.
    """

    yes = ['Cierto', 'Sí', 'S', 'Verdad', 'V', 'True', 'Yes', 'Y']
    no = ['Falso', 'No', 'N', 'False', 'F']
    option = InteractiveConsole.ask_yes_no(question['question'], yes, no)

    if option == bool(question['correct_answer']): print('Correcto')
    else: print('Incorrecto')
    print()

  running = True
  options = ['Responder un quizz', 'Salir']
  while(running):
    option = InteractiveConsole.ask_menu(options, 0, 2)

    if option == 1:
      print('¿Cuántas preguntas quieres responder?')
      number = InteractiveConsole.ask_integer(False)

      trivia = trivia_fetch(number)
      for i, question in enumerate(trivia['results']):
        if question['type'] == 'multiple': __multiple(question)
        else: __boolean(question)

        if i+1 < number and not(InteractiveConsole.ask_yes_no(
          f'¿Continuar? (Faltan {number-i-1})',
          ['Sí', 'S', 'Yes', 'Y'], ['No', 'N'])
        ): break
    else:
      running = False
      print('Gracias por jugar')
  return False

def main():
  running = True

  print('Escoge que versión quieres usar')
  options = [
    'Versión de API (Después de la API)',
    'Versión de legado (Antes de la API)', 'Salir'
  ]
  while(running):
    option = InteractiveConsole.ask_menu(options, 0, 3)

    if option == 1: running = api_version()
    elif option == 2: running = legacy_version()
    else:
      print('Nos vemos!!!')
      running = False

if __name__=="__main__":
  main()
