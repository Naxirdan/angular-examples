import { createAction } from '@ngrx/store';
import { UserResponse } from 'src/app/core/api/model/user-response.model';

export enum UserActionTypes {
  LoadLoggedUser = '[User] Load Logged User from local storage',
  LoadLoggedUserSuccess = '[User] Load Logged User from local storage Success',
  LoadLoggedUserFail = '[User] Load Logged User from local storage Fail',

  UpdateUserEditPayload = '[User] Update User Edit Payload',

  UpdateUserLoginPayload = '[User] Update User Login Payload',

  UpdateUser = '[User] Update User',
  UpdateUserSuccess = '[User] Update User Success',
  UpdateUserFail = '[User] Update User Fail',
}

/**
 * NOTA:
 * - Las acciones '...Success' y '...Fail' asociadas a las acciones que generan llamadas a la API, tienen un campo
 *   para guardar a qué acción hacen referencia(constante PARENT_ACTION_PROPERTY).
 * - Con este campo se centraliza el borrado del Stack de acciones, cuando se lanza una acción que tenga dicho parámetro,
 *   se lanza el evento RemoveActionFromStack con el valor recuperado.
 */

export const LoadLoggedUser = createAction(
  UserActionTypes.LoadLoggedUser,
);

export const LoadLoggedUserSuccess = createAction(
  UserActionTypes.LoadLoggedUserSuccess,
  (
    data: { payload: UserResponse },
  ) => ({
    ...data,
  })
);

export const LoadLoggedUserFail = createAction(
  UserActionTypes.LoadLoggedUserFail,
  (
    data: { payload: string },
  ) => ({
    ...data,
  }),
);

export const UpdateUserLoginPayload = createAction(
  UserActionTypes.UpdateUserLoginPayload,
  (
    data: { property: string, value: string  }
  ) => ({
    ...data
  })
)
