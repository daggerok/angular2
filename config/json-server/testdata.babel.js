import faker from 'faker';

faker.locale = 'ru';

const rnd = (from = 5, to = 15) => {
  if (from < 0) rom = -from;
  if (to < 0) to =- to;
  if (from > to) return rnd(to, from);
  return Math.floor(Math.random() * to) + from;
};
const seq = () => Array(rnd()).fill();

const _links = [{self: 'http://localhost:8080/api'}];

const recipes = seq().map((_, id) => { return {
  id,
  name: faker.name.title(),
}});

let id = 1;
const recipeDetails = recipes.map(c => seq().map((_, i) => { return {
  id: id++,
  name: faker.name.findName(),
  url: faker.internet.url(),
  description: c.name,
  _links
}}));

let details = [];
recipeDetails.forEach(c => {
  details = [
    ...details,
    ...c
  ]
});

export default () => { return {
  "api/recipes": {
    _embedded: {
      recipes,
      _links
    }
  },
  "api/details": {
    _embedded: {
      details,
      _links
    }
  },
  "api/recipeDetails": {
    _embedded: {
      some: recipeDetails,
      _links
    }
  }
}};
