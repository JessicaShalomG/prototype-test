export function capitalize(word: string): string {
  return word?.charAt(0).toUpperCase() + word.slice(1);
}

export function cleanWord(word: string): string {
  return word?.trim().toLocaleLowerCase();
}

export function localValue(value: number): string {
  return value?.toLocaleString('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  });
}

export function maxCategoriesType(categories: string[]) {
  if (categories.length == 0) return null;
  const categoriesMap: { [propName: string]: any } = {};
  var maxElement = categories[0],
    maxCount = 1;
  for (let i = 0; i < categories.length; i++) {
    let element: string = categories[i];
    if (categoriesMap[element] == null) categoriesMap[element] = 1;
    else categoriesMap[element]++;

    if (categoriesMap[element] > maxCount) {
      maxElement = element;
      maxCount = categoriesMap[element];
    }
  }
  return maxElement;
}
