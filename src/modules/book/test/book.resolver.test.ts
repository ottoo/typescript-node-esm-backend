import { expect, describe, it, vi } from 'vitest';
import { BookService } from '../book.service';
import { BookResolver } from '../book.resolver';
import { AuthorService } from '../../author/author.service';

const books = [
  {
    id: 'uuid-1',
    title: 'Book 1',
  },
  {
    id: 'uuid-2',
    title: 'Book 2',
  },
];

const mockGetAllBooks = vi.fn().mockResolvedValueOnce(books);
const bookService = {
  getAllBooks: mockGetAllBooks,
} as unknown as BookService;
const bookResolver = new BookResolver(bookService, vi.fn() as unknown as AuthorService);

describe('book.resolver', () => {
  it('returns correctly', async () => {
    expect(await bookResolver.books()).toEqual(books);
    expect(mockGetAllBooks).toHaveBeenCalledOnce();
  });
});
