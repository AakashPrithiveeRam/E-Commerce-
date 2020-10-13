import React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Collections: SHOP_DATA
        }
    }

    render () {
        const {Collections}= this.state;
        return (<div className='shop-page'>
        {
            Collections.map(({id, ...othercollectionprops}) => (
                <CollectionPreview key={id} {...othercollectionprops}></CollectionPreview>
            ))
        }
        </div>);
    }
}

export default ShopPage;