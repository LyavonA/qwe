import { createAction, props } from '@ngrx/store';

export const loadPeoples = createAction(
  '[People] load Peoples'
);

export const loadPeoplesSuccess = createAction(
  '[People] load Peoples Success',
  props<{ data: any }>()
);

export const loadPeoplesFailure = createAction(
  '[People] load Peoples Failure',
  props<{ error: any }>()
);

export const setSearchParams = createAction(
  '[People] set search params',
  props<{ params: any }>()
);

export const nextPeople = createAction(
  '[People] next people'
);

export const likePeople = createAction(
  '[People] like people',
  props<{ people: any }>()
);

export const dislikePeople = createAction(
  '[People] dislike people',
  props<{ people: any }>()
);

// export const likePeoples = createAction(
//   '[People] like Peoples'
// );
//
// export const likePeoplesSuccess = createAction(
//   '[People] like Peoples Success',
//   props<{ data: any }>()
// );
//
// export const likePeoplesFailure = createAction(
//   '[People] like Peoples Failure',
//   props<{ error: any }>()
// );
//
// export const dislikePeoples = createAction(
//   '[People] dislikeP Peoples'
// );
//
// export const dislikePeoplesSuccess = createAction(
//   '[People] dislikeP Peoples Success',
//   props<{ data: any }>()
// );
//
// export const dislikePeoplesFailure = createAction(
//   '[People] dislikeP Peoples Failure',
//   props<{ error: any }>()
// );
