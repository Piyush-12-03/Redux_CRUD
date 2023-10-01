const initialState =
[
  {id: 1,firstName: 'John',lastName: 'Doe',},
  {id: 2,firstName: 'Jane',lastName: 'Smith',},
  {id: 3,firstName: 'Harsh',lastName: 'Thakur',},
  {id: 4,firstName: 'Anushka',lastName: 'Sharma',},
];

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AUTHORS':
      return state;

    case 'DELETE_AUTHOR':
      const authorIdToDelete = action.payload;
      return state.filter((author) => author.id !== authorIdToDelete);

    case 'ADD_AUTHOR':
      return [...state, action.payload];

      case 'UPDATE':
  console.log(action.payload);
  return state.map((author) =>
    author.id === action.payload.id ? action.payload : author
  );


    default:
      return state;
  }
};

export default authorReducer;
