import React from 'react';

import Layout from '../components/layout';
import IndexComponent from './index'

export default class MyProduct extends IndexComponent {
    constructor(props) {
        super(props)

        this.state = {
            urls: [],
            loading: false,
            error: false,
            
            orderBy: 'my_product',
            desc: 'true',
            filter: {
                'email': ''
            },
            currentMode: 'my_product',
            limit: 25
        }
    }

    SORT_TEXT = {
        'my_product': 'Sản phẩm của tôi',
    }
}