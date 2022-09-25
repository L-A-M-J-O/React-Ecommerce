import Item from '../Item/Item'

const ItemList = ({products}) =>{
    return (
        <>
            {products.map((u) => <Item key={u.id} {...u}/>)}
        </>
    )
}

export default ItemList