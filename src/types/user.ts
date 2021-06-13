import { RawRule } from '@casl/ability';

export interface UserInterface {
  agent: string;
  username: string;
  roles: string[];
  group?: {
    accessControl: {
      abilities: RawRule[];
      groupName: string;
    };
  };
}
