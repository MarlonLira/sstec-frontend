
function replaceCode(code) {
  code = code.replace(/[^\d]+/g, '');
  return code;
}

function replaceCodeNumber(code) {
  if (typeof code === 'string') {
    code = code.replace('R$', '');
    return code;
  }
  return code;
}

export { replaceCode, replaceCodeNumber };