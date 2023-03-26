const path = require("path");
const fs = require("fs/promises");

// console.log(__dirname);
// console.log(__filename);

// console.log(path.join("/rostyk", "/music"));
// console.log(path.resolve("/rostyk", "/pics"));
// console.log(path.join(__dirname, "/rostyk", "/music"));
// console.log(path.resolve(__dirname, "/rostyk", "/pics"));
const moviesPath = path.join(__dirname, "..", "db", "movies.json");
// console.log(moviesPath);

// CRUD with files

class FileOperations {
  constructor(pathToFile) {
    this.pathToFile = pathToFile;
  }
  async create(data) {
    try {
      return await fs.writeFile(this.pathToFile, JSON.stringify(data, null, 4));
    } catch (error) {
      console.log(error.message);
    }
  }

  async read() {
    return await fs.readFile(this.pathToFile, "utf8");
  }

  async update(id, data) {
    const allMovies = await this.read();

    const allMoviesArr = JSON.parse(allMovies);

    const idx = allMoviesArr.findIndex((movie) => movie.id === id);
    allMoviesArr[idx] = data;
    console.log(allMoviesArr[idx]);
    await fs.writeFile(this.pathToFile, JSON.stringify(allMoviesArr, null, 4));
  }

  async remove() {
    return await fs.unlink(this.pathToFile);
  }

  async display() {
    return console.log(await this.read());
  }
}
const file = new FileOperations(moviesPath);
// file.display();
const movies = [
  {
    Title: "Avatar",
    Year: "2009",
    Genre: "Action, Adventure, Fantasy",
  },
  {
    Title: "I Am Legend",
    Year: "2007",
    Genre: "Drama, Horror, Sci-Fi",
  },
  {
    Title: "300",
    Year: "2006",
    Genre: "Action, Drama, Fantasy",
  },
];
file.create(movies);
const terminator = {
  id: "20",
  Title: "terminator",
  Year: "2007",
  Genre: "Drama",
};
// file.update("20", terminator)
// file.remove();

async function asyncHandler(clb) {
  await clb();
}
asyncHandler(file.display.bind(file));
