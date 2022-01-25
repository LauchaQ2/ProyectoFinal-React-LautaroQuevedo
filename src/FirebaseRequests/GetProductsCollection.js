import db from '../firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';


async function getProducts(){
    const productosCol = collection(db, 'productos');
    const productosSnapshot = await getDocs(productosCol);
    const productosList = productosSnapshot.docs.map(doc => {
      let producto = doc.data();
      producto.id = doc.id;
     return producto
    });
    console.log(productosList)
  return productosList;
 }
 export default getProducts();