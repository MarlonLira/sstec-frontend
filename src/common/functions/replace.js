
export function replaceCode(code) {
    code = code.replace(/[^\d]+/g, '');
    return code;
}

export function replaceCodeNumber(code) {
    if (typeof code === 'string') {
      code = code.replace('R$', '');
      return code;
    }
    return code;
}