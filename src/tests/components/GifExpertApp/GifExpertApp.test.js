import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../../../Components/GifExpertApp/GifExpertApp';

describe('Pruebas <GifExpertApp  />', () => { 

    let wrapper = shallow( <GifExpertApp  />);
    beforeEach( () => {
        wrapper = shallow( <GifExpertApp  />);
    })

    test('Debe de mostrar <GifExpertApp  /> correctamente', () => { 

        expect( wrapper).toMatchSnapshot();
    })

})