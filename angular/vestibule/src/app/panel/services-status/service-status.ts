export interface ServiceStatusResponse {
  services: { [status: string] : ServiceStatus }
}

export interface ServiceStatus {
  name: string;
  up: boolean;
  url?: string;
}

export const INITIAL_STATUS: ServiceStatusResponse = {
  services: {
    plex: {
      name: 'plex',
      up: false
    },
    transmission: {
      name: 'transmission',
      up: false
    }
  }
}
