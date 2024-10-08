export type Repo = {
  id: string;
  name: string;
  url: string;
  status: Status;
  langs: [];
};

export type Status = {
  id: number;
  label: string;
};

export type Lang = {
  id: number;
  label: string;
};