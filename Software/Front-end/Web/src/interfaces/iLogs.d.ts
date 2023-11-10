export interface iLogs {
  id: string;
  register_time: string;
  current: number;
  power: number;
  created_at: string;
}

export interface iResponseLogs {
  logs: iLogs[];
}
