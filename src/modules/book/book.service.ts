import { Service } from "typedi";

@Service()
export class BookService {
  async getBooks() {
    return [
      {
        id: "1",
        title: "The Awakening",
        authors: ["Kate Chopin"],
      },
      {
        id: "2",
        title: "City of Glass",
        authors: ["Paul Auster"],
      },
    ];
  }
}
