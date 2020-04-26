import { v1 as uuidv1 } from 'uuid';

const initialState = [
  {
    id: '1',
    name: 'Title activity #1',
    duration: '1 hour',
  },
];

const activitiesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CREATE_ACTIVITY':
      return [
        ...state,
        {
          id: uuidv1(),
          name: payload.name,
          duration: payload.duration,
        },
      ];

    case 'DELETE_ACTIVITY':
      const copyState = [...state];
      const index = copyState.findIndex((x) => x.id === payload.id);
      copyState.splice(index, 1);
      return [...copyState];

    default:
      return state;
  }
};

export default activitiesReducer;
