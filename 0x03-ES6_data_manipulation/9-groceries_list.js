const groceriesList = () =>{
  const lis = new Map();
  const objs = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const list = Array.from(Object.keys(objs));
  list.map((item) => lis.set(item, objs[item]));
  return lis;
};
export default groceriesList;
