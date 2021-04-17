import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import SinglePrdInfoInManagePage from '../SinglePrdInfoInManagePage/SinglePrdInfoInManagePage';
import './AdminPageManage.css';
const AdminPageManage = () => {

    const prdItems = useContext(ProductContext);
    let count = 0;
    return (
        <div className="adminPageManage">
            {  
                prdItems[0].map(items => {
                    count = count + 1;
                    console.log(count);
                    return <SinglePrdInfoInManagePage passedInfo={[items,count]}></SinglePrdInfoInManagePage>
                })
            }
        </div>
    );
};

export default AdminPageManage;