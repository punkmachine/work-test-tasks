export interface Tender {
  id: string;
  date: string;
  deadline_date: string;
  title: string;
  category: string;
  description: string;
  phase: string;
  phase_en: string;
  place: string;
  sid: string;
  eid: string;
  awarded_value: string;
  awarded_currency: string;
  awarded_value_eur: string;
  purchaser: Purchaser;
  type: TenderType;
  awarded: Award[];
}

export interface TenderWithDetails extends Tender {
  data: DataValues;
  notices: Notices;
}

interface Notices {
  SZERZODESSEL_KAPCSOLATOS_INFORMACIOK_BLOKK: unknown[];
  OSSZEGZES_AJANLAT_ELBIRALAS_BLOKK: unknown[];
  ELOZETES_VITARENDEZES_BLOKK : unknown[];
}

interface DataValues {
  initial_estimated: string;
  final: string;
  currency: string;
}

interface Purchaser {
  id: number;
  sid: number;
  name: string;
}

interface TenderType {
  id: string;
  name: string;
  slug: string;
}

interface Award {
  date: string;
  value_for_two: number;
  value_for_two_eur: number;
  suppliers: Supplier[];
  value_for_three: number;
  value_for_one_eur: number;
  count: number;
  value_for_one: number;
  value_for_three_eur: number;
  suppliers_id: number;
  value_eur: number;
  offers_count: number[];
  suppliers_name: string;
  value: number;
  offers_count_data: Object;
}

interface Supplier {
  name: string;
  id: number;
  slug: string;
}