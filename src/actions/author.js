export const FETCH_AUTHORS = 'FETCH_AUTHORS';
export const DELETE_AUTHOR = 'DELETE_AUTHOR';
export const UPDATE_AUTHOR = 'UPDATE';

// Action Creator
export const fetchAuthors = () => ({
  type: 'FETCH_AUTHORS',
});

export const deleteAuthor = (authorId) => ({
   type: 'DELETE_AUTHOR',
   payload: authorId,
 });

 export const updateAuthor = (author) => ({
  type: 'UPDATE',
  payload: author,
});

export const addAuthor = () => ({
  type: 'ADD_AUTHOR',
});