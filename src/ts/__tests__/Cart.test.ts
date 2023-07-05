import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

const cart = new Cart();
test('new card should be empty', () => {
 
  expect(cart.items.length).toBe(0);
});

test('card should have 3 items', () => {
  
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(777, 'The Avengers', 'Marvel comics', 101, 2012, 'America', 'Avengers Assamble!', 'фантастика, боевик, приключения', '137 мин/ 2:17'));

  expect(cart.items.length).toBe(3)

})

test('function should count total cost of cart', () => {
  
  const result = cart.totalCost();

  expect(result).toBe(3001)
})

test('function should count total cost taking discount', () => {
  
  const result = cart.totalDiscounCost(20);

  expect(result).toBe(2400.8)
})

test('function should delet item by id', () => {

  const result = cart.delet(1001);

  expect(result).toEqual([
    {id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900},
    {id: 777, name: 'The Avengers', author: 'Marvel comics', price: 101, year: 2012, country: 'America', tagline: 'Avengers Assamble!', style: 'фантастика, боевик, приключения', duration:'137 мин/ 2:17'}
  ])
})
