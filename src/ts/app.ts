import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(777, 'The Avengers', 'Marvel comics', 101, 2012, 'America', 'Avengers Assamble!', 'фантастика, боевик, приключения', '137 мин/ 2:17'));

console.log(cart.items);

console.log(cart.delet(1001))
