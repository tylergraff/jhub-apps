/* eslint-disable @typescript-eslint/no-explicit-any */
export interface JhData {
  admin_access: boolean;
  base_url: string;
  options_form: boolean;
  prefix: string;
  user: string;
  xsrf_token: string;
}

export interface JhApp {
  id: string;
  name: string;
  description?: string;
  framework: string;
  url: string;
  thumbnail?: string;
  username?: string;
  ready: boolean;
  public: boolean;
}

export interface JhService {
  name: string;
  description?: string;
  url: string;
  external: boolean;
}

export interface JhServiceFull {
  prefix: string;
  kind: string;
  info: any;
  admin: boolean;
  display: boolean;
  roles: string[];
  pid: number;
  url: string;
  name: string;
  command: string[];
}
