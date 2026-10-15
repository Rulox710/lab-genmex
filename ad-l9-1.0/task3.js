function getInfoLinks() {
  const LINKS = document.querySelectorAll('a');
  alert(
    `La página tiene ${LINKS.length} enlaces en total.
    El primero lleva a ${LINKS[0].href}
    Y el útimo a ${LINKS[LINKS.length - 1].href}`);
}
