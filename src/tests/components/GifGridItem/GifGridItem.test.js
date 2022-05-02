import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../../Components/GifExpertApp/GifGrid/GifGridItem/GifGridItem';

describe('Pruebas <GifGridItem  />', () => { 

    const title = 'Titulo';
    const url = 'https://localhost/prueba.jpg'

    let wrapper = shallow( <GifGridItem title={title}  url={url} />);
    beforeEach( () => {
        wrapper = shallow( <GifGridItem title={title}  url={url} />);
    })

    test('Debe de mostrar <GifGridItem  /> correctamente', () => { 

        expect( wrapper).toMatchSnapshot();
    })

    test('Debe de tener un <h4></h4>  con el titulo', () => { 
        const h4 = wrapper.find('h4');
        expect(h4.text().trim()).toBe(title);
    })

    test('Debe de tener la <img> igual al url y alt  de los props', () => { 
        const img = wrapper.find('img');
        // expect(img.props().src).toBe(url);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe tener la clase animate__animated animate__flash', () => { 
        const div = wrapper.find('div');

        console.log(div.html());
    })

})