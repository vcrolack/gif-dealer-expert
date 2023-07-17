import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifDealerApp = () => {
  const [categories, setCategories] = useState(['Cowboy bebop']);

  const onAddCategory = newCategory => {
    if (categories.includes(newCategory)) return;

    // const newCategories = categories.push('Naruto Shippuden'); -> don't do this
    setCategories([ newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Naruto']); -> Another wat
  };


  return (
    <>
      <h1>Gif Dealer App</h1>

      <AddCategory 

        onNewCategory={event => onAddCategory(event)}
      />


      {categories.map((category) => (
          <GifGrid
            key={category} 
            category={category} 
          />
        ))
      }
    </>
  )
}