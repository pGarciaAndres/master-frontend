export interface ListContextModel {
  search: string
  currentPage: number
  perPage: number
  setSearch: (search: string) => void
  setCurrentPage: (page: number) => void
  setPerPage: (perPage: number) => void
}
