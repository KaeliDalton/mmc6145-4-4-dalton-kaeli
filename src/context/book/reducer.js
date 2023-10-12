// TODO: import actions and implement reducer for each action
import {ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS} from './actions'
export default function reducer(prevState, {action, payload}) {
  switch(action){
    case ADD_BOOK:
      const changedFavoriteBooksAdd = [...prevState.favoriteBooks, payload]
      saveToLocalStorage(changedFavoriteBooksAdd)
      return {...prevState, favoriteBooks: changedFavoriteBooksAdd}
    case REMOVE_BOOK:
      const changedFavoriteBooksRemove = prevState.favoriteBooks.filter(
        (favBook) => favBook.id !== payload
      )
      saveToLocalStorage(changedFavoriteBooksRemove)
      return {...prevState, favoriteBooks: changedFavoriteBooksRemove}
    case SEARCH_BOOKS:
      return {...prevState, bookSearchResults: payload}
    default:
      return prevState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}