import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { calculateTotalPrice, formatCatNames, hasFreeGift } from './helpers';

export type getCommsParams = {
  id: string;
};

export type getCommsResponse = {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
};

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: Cat[];
};

export type Cat = {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: string;
};

@Injectable()
export class AppService {
  getComms({ id }: getCommsParams): getCommsResponse {
    const db = readFileSync('data.json', 'utf8');
    const users: User[] = JSON.parse(db);

    const user = users.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    // users in the database have at least one active subscription
    const activeCats = user.cats.filter((cat) => cat.subscriptionActive);

    const catNames = activeCats.map((cat) => cat.name);
    const formattedCatNames = formatCatNames(catNames.sort());

    const title = `Your next delivery for ${formattedCatNames}`;
    const message = `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${formattedCatNames}'s fresh food.`;
    const totalPrice = calculateTotalPrice(activeCats);
    const freeGift = hasFreeGift(totalPrice);

    return {
      title,
      message,
      totalPrice,
      freeGift,
    };
  }
}
