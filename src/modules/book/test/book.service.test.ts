import { expect, describe, it, vi } from 'vitest';
import { BookService } from '../book.service';
import { BookRepository } from '../book.repository';

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
const bookRepository = {
  getAllBooks: mockGetAllBooks,
} as unknown as BookRepository;
const bookService = new BookService(bookRepository);

describe('book.service', () => {
  it('returns correctly', async () => {
    expect(await bookService.getAllBooks()).toEqual(books);
    expect(mockGetAllBooks).toHaveBeenCalledOnce();
  });
});
