import re
import unicodedata as ud
from typing import List
from .characters import Color, SpecialCharacter

def normalize_string(text: str) -> str:
  """
  Función que normaliza una cadena.

  Referencia <a href="https://stackoverflow.com/questions/47094155/how-to-normalize-python-3-unicode-string">Stack Overflow</a>
  """

  normalized = text.lower()
  normalized = ''.join(
    c for c in ud.normalize('NFD', normalized)
      if ud.category(c) != 'Mn'
    )
  normalized = normalized.strip()
  return normalized

class Printer:
  """
  Clase para imprimir cadenas con colores
  """

  def print_error(*args, **kwargs) -> None:
    """
    Imprime en consola, de color rojo las letras.

    Args:
      string(str): Una cadena a ser impresa con los colores indicados.
    """

    print(Color.ROJO.value,*args,Color.RESET.value,**kwargs)

  def print_warning(*args, **kwargs) -> None:
    """
    Imprime en consola, las letras de color amarillo.

    Args:
     string(str): Una cadena a ser impresa con los colores indicados.
    """

    print(Color.AMARILLO.value,*args,Color.RESET.value,**kwargs)

  def print_ok(*args, **kwargs) -> None:
    """
    Imprime en consola, las letras de color verde.

    Args:
      string(str): Una cadena a ser impresa con los colores indicados.
    """

    print(Color.VERDE.value,*args,Color.RESET.value,**kwargs)

  def print_info(*args, **kwargs) -> None:
    """
    Imprime en consola, las letras de color azul.

    Args:
      string(str): Una cadena a ser impresa con los colores indicados.
    """

    print(Color.CIAN.value, *args, Color.RESET.value, **kwargs)

  def print_extra(*args, **kwargs) -> None:
    """
    Imprime en consola, las letras de color magenta.

    Args:
      string(str): Una cadena a ser impresa con los colores indicados.
    """

    print(Color.MAGENTA.value, *args, Color.RESET.value, **kwargs)

  def start_console(*args, **kwargs) -> None:
    """
    Imprime en consola, poniendo el caracter ">" con color azul para
    indicar que se espera una entrada de caracteres.
    """

    print(Color.CIAN_NEGRITAS.value + Color.NEGRO_FONDO.value,
          '> ', Color.RESET.value, *args, **kwargs)

class InteractiveConsole:
  """
  Clase para manejar una aplicación que se corre en consola. Tiene
  métodos para interactuar con el usuario muy sencillos y reusables.

  Version 1.1.1
  """

  GENERIC_ANSWERS: dict[str, str] = {
    'INV': '¡¡¡Lo que ingresó es inválido!!!',
    'ENTER': "<ENTER para continuar>",
    'OPTION': "Seleccione una opción: ",
    'RANGE': "Seleccione una opción en el rango de opciones:",
    'ACCEPT': "Seleccionó: {:s}",
    'YES': "Sí",
    'NO': "No",
  }

  @staticmethod
  def ask_pause(**kwargs) -> None:
    """
    Función que generar una pausa en el programa y solicitar al usuario
    que presione enter para continuar.
    """

    if 'sep' not in kwargs: kwargs['sep'] = ''
    if 'end' not in kwargs: kwargs['end'] = ''

    loop: bool = True
    counter: int = 2
    validation: str
    Printer.print_info(InteractiveConsole.GENERIC_ANSWERS['ENTER'])
    while(loop):
      validation = input()
      if not(validation): loop = False
      else: counter += 1
    print(SpecialCharacter.PREV_LINE.value.format(counter),
          SpecialCharacter.CLEAR_FROM_CURSOR.value, **kwargs)

  @staticmethod
  def __ask_regex(regex: str, **kwargs) -> str:
    """
    Función genérica que permite recibir una entrada arbitraria según
    una expresión regular

    Args:
      regex(str): Una expresión para validar luna cadena dada.

    Returns:
      Una cadena con el valor ingresado y validado por el la expresión.
    """

    if 'sep' not in kwargs: kwargs['sep'] = ''
    if 'end' not in kwargs: kwargs['end'] = ''

    loop: bool = True
    error: bool = False
    validation: str
    while(loop):
      Printer.start_console(sep='', end='')
      validation = input().strip()
      loop = not(bool(re.fullmatch(regex, validation)))
      if error:
        print(SpecialCharacter.PREV_LINE.value.format(1),
              SpecialCharacter.CLEAR_FROM_CURSOR.value, **kwargs)
      if loop and not(error):
        error = True
        Printer.print_error(SpecialCharacter.PREV_LINE.value.format(1),
                            InteractiveConsole.GENERIC_ANSWERS['INV'], end='\n')

    if(error):
      print(SpecialCharacter.PREV_LINE.value.format(1),
            SpecialCharacter.CLEAR_FROM_CURSOR.value, **kwargs)
      Printer.start_console(validation, sep='', end='\n')
    return validation

  @staticmethod
  def ask_integer(negatives: bool=True, **kwargs) -> int:
    """
    Función para que el usuario ingrese un número (enteros). No permite
    que el usuario ingrese decimales.
    Se puede usar para preguntar por opciones.

    Args:
      negatives(bool): Indica si se aceptan o no números negativos.

    Returns:
      El número que ingresó el usuario.
    """

    regex: str = r'^-?[0-9]+$' if negatives else r'^[0-9]+$'
    return int(InteractiveConsole.__ask_regex(regex, **kwargs))

  @staticmethod
  def ask_float(negatives: bool=True, **kwargs) -> float:
    """
    Función para que el usuario ingrese un número (reales). Permite
    que el usuario ingrese decimales.

    Args:
      negatives(bool): Indica si se aceptan o no números negativos.

    Returns:
      El número que ingresó el usuario.
    """

    regex: str = r'^-?[0-9]*(.[0-9]+)?$' if negatives else r'^[0-9]*(.[0-9]+)?$'
    return float(InteractiveConsole.__ask_regex(regex, **kwargs))

  def ask_menu(options: List[str], start: int, size: int, **kwargs) -> int:
    """
    Función que regresa un entero. Este imprime en consola un menú; este menú
    se obtiene recorriendo un arreglo dado de cadenas que contienen las
    opciones y los índices de donde comienzan y donde terminan las opciones
    (Es necesario que estos sean contiguas). Les asigna a cada elemento del
    arreglo un número de opción que va desde el 1 hasta n.
    Luego el interactua con el usuario para que seleccione una opción del
    menú; solo acepta valores válidos del menú.

    Args:
      options(List[str]): El arreglo con las opciones.
      start(int): Indice de la posición inicial del arreglo, desde
        donde empezará a recorrelo.
      size(int): Tamaño de cuántos elementos del arreglo.

    Returns:
      La opción seleccionada por el usuario. Un entero.
    """

    if 'sep' not in kwargs: kwargs['sep'] = ''
    if 'end' not in kwargs: kwargs['end'] = ''

    loop: bool = True
    error: bool = False
    option: int = 0
    for i in range(0, size-start):
      print(f"{i+1}.- {options[start+i]}")
    Printer.print_warning(InteractiveConsole.GENERIC_ANSWERS['OPTION'])
    while(loop):
      option = InteractiveConsole.ask_integer(False)
      if option <= (size - start) and option >= 1: loop = False
      if error:
        print(SpecialCharacter.PREV_LINE.value.format(0),
              SpecialCharacter.CLEAR_FROM_CURSOR.value, **kwargs)
      if loop and not(error):
        error = True
        Printer.print_error(SpecialCharacter.PREV_LINE.value.format(0),
                            InteractiveConsole.GENERIC_ANSWERS['RANGE'],
                            end='\n')

    print(SpecialCharacter.PREV_LINE.value.format(2),
          SpecialCharacter.CLEAR_FROM_CURSOR.value,sep='',end='')
    Printer.print_ok(InteractiveConsole.GENERIC_ANSWERS['ACCEPT']
                     .format(options[option + start -1]))
    return option

  def ask_yes_no(question: str, yes: List[str], no: List[str], **kwargs) -> bool:

    if 'sep' not in kwargs: kwargs['sep'] = ''
    if 'end' not in kwargs: kwargs['end'] = ''

    form: str = f'{question} [{yes[0]}/{no[0]}]'
    yes = [normalize_string(y) for y in yes]
    no = [normalize_string(n) for n in no]
    loop: bool = True
    answer: bool = False
    user_input = ''
    Printer.print_warning(form, SpecialCharacter.SAVE_CURSOR.value, end=' ')
    while(loop):
      user_input = normalize_string(input())
      if user_input in yes:
        loop = False
        answer = True
      elif user_input in no: loop = False
      if loop:
        print(SpecialCharacter.REST_CURSOR.value,
              SpecialCharacter.UP.value.format(1),
              SpecialCharacter.CLEAR_FROM_CURSOR.value, sep='', end='\n')
        Printer.print_error(InteractiveConsole.GENERIC_ANSWERS['INV'], **kwargs)
        print(SpecialCharacter.REST_CURSOR.value,
              SpecialCharacter.UP.value.format(1), **kwargs)

    print(SpecialCharacter.REST_CURSOR.value,
          SpecialCharacter.UP.value.format(1),
          SpecialCharacter.CLEAR_FROM_CURSOR.value, **kwargs)

    Printer.print_ok(user_input)
    return answer
