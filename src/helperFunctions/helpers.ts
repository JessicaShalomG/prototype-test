export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function cleanWord(word: string): string {
  return word.trim().toLocaleLowerCase();
}

export function localValue(value: number): string {
  return value.toLocaleString('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  });
}
