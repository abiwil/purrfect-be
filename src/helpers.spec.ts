import { calculateTotalPrice, formatCatNames, hasFreeGift } from './helpers';

describe('formatCatNames', () => {
  describe('when the user has one cat', () => {
    const catNames = ['Betsy'];
    it('should return the cat name', () => {
      const formattedCatNames = formatCatNames(catNames);

      expect(formattedCatNames).toBe('Betsy');
    });
  });

  describe('when the user has two cats', () => {
    const catNames = ['Betsy', 'Mittens'];
    it('should return the cat names separated by "and"', () => {
      const formattedCatNames = formatCatNames(catNames);

      expect(formattedCatNames).toBe('Betsy and Mittens');
    });
  });

  describe('when the user has three or more cats', () => {
    const catNames = ['Betsy', 'Mittens', 'Fluffy'];
    it('should return the cat names separated by commas and "and"', () => {
      const formattedCatNames = formatCatNames(catNames);

      expect(formattedCatNames).toBe('Betsy, Mittens, and Fluffy');
    });
  });
});

describe('calculateTotalPrice', () => {
  const cats = [
    {
      name: 'Betsy',
      subscriptionActive: true,
      breed: 'British Shorthair',
      pouchSize: 'A',
    },
    {
      name: 'Mittens',
      subscriptionActive: true,
      breed: 'Siamese',
      pouchSize: 'C',
    },
    {
      name: 'Fluffy',
      subscriptionActive: true,
      breed: 'Persian',
      pouchSize: 'E',
    },
  ];
  describe('when the user has one cat', () => {
    const cat = cats[0];

    it('should return the correct total price', () => {
      const totalPrice = calculateTotalPrice([cat]);

      expect(totalPrice).toBe(55.5);
    });
  });

  describe('when the user has multiple cats', () => {
    it('should return the correct total price', () => {
      const totalPrice = calculateTotalPrice(cats);

      expect(totalPrice).toBe(187.25);
    });
  });
});

describe('hasFreeGift', () => {
  describe('when the total price is greater than 120', () => {
    it('should return true', () => {
      expect(hasFreeGift(121)).toBe(true);
    });
  });

  describe('when the total price is less than or equal to 120', () => {
    it('should return false', () => {
      expect(hasFreeGift(120)).toBe(false);
      expect(hasFreeGift(119)).toBe(false);
    });
  });
});
