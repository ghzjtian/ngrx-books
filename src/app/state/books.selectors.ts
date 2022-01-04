import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

// collection book ids
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

// collection books
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    // return collection.map((id) => books.find((book) => book.id === id));
    return books.filter((book) => collection.findIndex((id) => id === book.id) > -1);
  }
);

export const displayBooks = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return books.filter((book) => collection.findIndex((id) => id === book.id) === -1);
  }
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/