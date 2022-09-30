import Item from '../Item/Item'

const ItemList = ({products}) =>{
    return (
        <>
            {products.map((element) => <Item key={element.id} {...element}/>)}
        </>
    )
}

export default ItemList