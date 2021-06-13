import { createContext } from 'react';
import { createContextualCan } from '@casl/react';
import { Ability } from '@casl/ability';
import { UserInterface } from '../../../types/user';

export default function defineAbilityFor(user?: UserInterface) {
  if (!user) {
    return new Ability([]);
  }
  if (user.roles?.includes('master')) {
    return new Ability([
      {
        action: 'manage',
        subject: 'all',
      },
    ]);
  }
  return new Ability((user.group?.accessControl?.abilities as any) || []);
}

export const AbilityContext = createContext(defineAbilityFor());
export const Can = createContextualCan(AbilityContext.Consumer);
