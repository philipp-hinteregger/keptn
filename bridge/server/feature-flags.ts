import { IClientFeatureFlags, IServerFeatureFlags } from '../shared/interfaces/feature-flags';

export class ClientFeatureFlags implements IClientFeatureFlags {
  RESOURCE_SERVICE_ENABLED = false;
}

export class ServerFeatureFlags implements IServerFeatureFlags {
  OAUTH_ENABLED = false;
}
