import { Cat } from './app.service';

export const formatCatNames = (catNames: string[]): string => {
  if (catNames.length === 1) {
    return catNames[0];
  }

  if (catNames.length === 2) {
    return catNames.join(' and ');
  }

  return `${catNames.slice(0, -1).join(', ')}, and ${catNames.slice(-1)}`;
};

export const calculateTotalPrice = (cats: Cat[]): number => {
  const pouchCosts: number[] = cats.map(({ pouchSize }) => {
    switch (pouchSize) {
      case 'A':
        return 55.5;
      case 'B':
        return 59.5;
      case 'C':
        return 62.75;
      case 'D':
        return 66;
      case 'E':
        return 69;
      case 'F':
        return 71.25;
      default:
        return 0;
    }
  });

  return pouchCosts.reduce((acc, curr) => acc + curr, 0);
};

export const hasFreeGift = (totalPrice: number): boolean => totalPrice > 120;
