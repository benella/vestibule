export interface ServiceStatusResponse {
  services: { [status: string] : ServiceStatus }
}

export interface ServiceStatus {
  name: string;
  up: boolean;
  url: string;
}
