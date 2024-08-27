import type { Tender, TenderWithDetails } from '@/models/tender';
import type { IResponseWithList } from './types/response';

import { adapterTendersList } from '@/lib/apadterts/adapterTendersList';

export class TenderRepository {
  private static _baseUrl = import.meta.env.VITE_APP_BASE_API_URL;
  private static _endpoints = {
    list: 'list/',
    element: 'element/',
  };

  static async getAll(page: number = 1): Promise<IResponseWithList<Tender>> {
    const response = await fetch(`${this._baseUrl}${this._endpoints.list}?page=${page}`);

    if (!response.ok) {
      throw new Error('Ошибка получения списка тендеров');
    }

    const data = await response.json() as unknown as IResponseWithList<Tender>;
    const correctData = adapterTendersList(data);

    return correctData;
  }

  static async getById(id: string): Promise<TenderWithDetails> {
    const response = await fetch(`${this._baseUrl}${this._endpoints.element}?id=${id}`);

    if (!response.ok) {
      throw new Error('Ошибка получения тендера');
    }

    return response.json();
  }
}