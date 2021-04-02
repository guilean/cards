export enum Status {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export type Card = {
  _id: string;
  name: string;
  imageUrl: string;
  count: {
    total: number;
  };
};

export interface CardsState {
  items: Array<Card>;
  status: Status;
}
