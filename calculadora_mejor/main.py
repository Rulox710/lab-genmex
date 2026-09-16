from typing import List
from util import SpecialCharacter, Color
from consoleMenu import Printer, InteractiveConsole

def addmultiplenumbers(number_list: List[int|float]) -> int|float:
  '''
  Función que puede sumar los números en una lista.

  Args:
    number_list(List[int|float]): Una lista que puede contener números
      reales.

  Returns:
    Un numero, resultante de sumar todos los elementos de la lista.
  '''
  result: int|float = 0
  for number in number_list:
    result += number
  return result

def multiplymultiplenumbers(number_list: List[int|float]) -> int|float:
  '''
  Función que puede multiplicar los números en una lista.

  Args:
    number_list(List[int|float]): Una lista que puede contener números
      reales.

  Returns:
    Un numero, producto resultante de multiplicar todos los elementos
    de la lista.
  '''
  result: int|float = 1
  for number in number_list:
    result *= number
  return result

def isiteven(number: int|float) -> bool:
  '''
  Función que puede verificar si un número es par o no.

  Args:
    number(int|float): El número a verificar que puede ser un número
      real.

  Returns:
    Un boleano que indica si el número es par o no
  '''
  return number % 2 == 0

def isitaninteger(number: int|float) -> bool:
  '''
  Función que puede verificar si un número es entero o no.

  Args:
    number(int|float): El número a verificar que puede ser un número
      real.

  Returns:
    Un boleano que indica si el número es entero o no
  '''
  return int(number) == number

def main():
  operaciones = ['Suma', 'Multiplicación', 'Verificar si par', 'Verificar si entero']
  operation = InteractiveConsole.ask_menu(operaciones, 0, 3)

  if operation < 3:
    print('Ingrese un número')
    num_1 = InteractiveConsole.ask_float()
    print('Ingrese otro número')
    num_2 = InteractiveConsole.ask_float()


    if operation == 1: print(f'{num_1} + {num_2} = {addmultiplenumbers([num_1, num_2])}')
    else: print(f'{num_1} * {num_2} = {multiplymultiplenumbers([num_1, num_2])}')
  else:
    print('Ingrese el número')
    num = InteractiveConsole.ask_float()

    if operation == 3:
      print(f'El número {num}{" " if isiteven(num) else " no "}es par')
    else:
      print(f'El número {num}{" " if isitaninteger(num) else " no "}es un entero')

if __name__=='__main__':
  main()
