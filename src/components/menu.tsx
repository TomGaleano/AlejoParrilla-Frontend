import { useState, useEffect } from 'react';
import "./Inicio.css";
import Slider from 'react-slick';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    is_available: boolean;
}
const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 1
};

function MenuGrid() {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [category, setCategory] = useState('Hamburguesas');
    const categories = ['Hamburguesas', 'Bowls', 'Rápidas', 'Entradas', 'Sopas', 'Menú Infantil', 'Típicos', 'Bebidas'];


// presenta un error en la consola, pero funciona bien
    useEffect(() => {
        fetch(`http://localhost:3000/api/filtermenu?category=${category}`)
            .then(response => response.json())
            .then(data => setItems(data.data))
            .catch(error => console.error('Error:', error));
    }, [category]);

    return (
        <div style={{backgroundColor:'#6E8CA3'}}>
            <div className="home_container menu_container">
                <div className="column menu_column" >
                    <h2 className="menu_title">Nuestro menú</h2>
                    <p className="menu_paragraph">
                        Todos nuestros platos están elaborados con ingredientes frescos y de calidad, y preparados con el amor y la dedicación que merecen nuestros clientes.
                    </p>
                    <div className="menu">
                        <div className="menu_selector">
                            {categories.map((categoryItem) => (
                                <a
                                    key={categoryItem}
                                    className={`menu_button ${category === categoryItem ? 'active' : ''}`}
                                    onClick={() => setCategory(categoryItem)}
                                >
                                    {categoryItem}
                                </a>
                            ))}
                        </div>
                        <Slider {...settings} className="slider">
                            {items.map(item => (
                                <div className="menu_item" key={item.id} >
                                    <img src={`src/menu/hamburgesa-doble-carne.jpg`} alt={item.name} />
                                    <div className="menu_item_info">
                                        <h2>{item.name} - ${item.price}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='wave_spacer brown-blue'></div>
        </div>
    );
}

export default MenuGrid;