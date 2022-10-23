export const productAdaptedFromFirestore = (doc) => {
    const data = doc.data();
  
    const productAdapted = {
      id: doc.id,
      name: data.name,
      price: data.price,
      stock: data.stock,
      marca: data.marca,
      img: data.img,
      imgs: data.imgs,
      genero: data.genero,
      description: data.description,
    };
    return productAdapted;
  };