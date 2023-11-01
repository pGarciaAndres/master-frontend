interface Book {
  title: string;
  isRead: boolean;
}

export function isBookReadTS(books: Book[], titleToSearch: string): boolean {
  return books.find((book) => book.title === titleToSearch)?.isRead ?? false;
}
