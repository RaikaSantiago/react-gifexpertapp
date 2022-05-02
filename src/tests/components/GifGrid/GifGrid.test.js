import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../../Components/GifExpertApp/GifGrid/GifGrid';

describe('Pruebas <GifGrid  />', () => { 
    const cat = 'Homero';
    let wrapper = shallow( <GifGrid  cat={cat}  />);
    beforeEach( () => {
        wrapper = shallow( <GifGrid cat={cat} />);
    })

    test('Debe de mostrar <GifGrid  /> correctamente', () => { 

        expect( wrapper).toMatchSnapshot();
    })

})