export function isBookReadTS(books, titleToSearch) {
    var _a, _b;
    return (_b = (_a = books.find(function (book) { return book.title === titleToSearch; })) === null || _a === void 0 ? void 0 : _a.isRead) !== null && _b !== void 0 ? _b : false;
}
