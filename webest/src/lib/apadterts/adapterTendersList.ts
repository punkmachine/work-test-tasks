import type { IResponseWithList } from '@/api/types/response';
import type { Tender } from '@/models/tender';

export function adapterTendersList(data: IResponseWithList<Tender>): IResponseWithList<Tender> {
  return {
    ...data,
    data: data.data.map(item => ({
      ...item,
      description: item.description ?? '',
    })),
  };
}