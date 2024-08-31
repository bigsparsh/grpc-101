// Original file: a.proto

import type { User as _User, User__Output as _User__Output } from './User';

export interface Posts {
  'userId'?: (string);
  'user'?: (_User | null);
  'message'?: (string);
}

export interface Posts__Output {
  'userId': (string);
  'user': (_User__Output | null);
  'message': (string);
}
