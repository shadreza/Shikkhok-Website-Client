import React, { useContext } from 'react';
import { CourseContext } from '../../App';
import SinglePrdInfoInManagePage from '../SinglePrdInfoInManagePage/SinglePrdInfoInManagePage';
import './AdminPageManage.css';
const AdminPageManage = () => {

    

    const prdItems = useContext(CourseContext);
    let count = 0;
    return (
        <div className="adminPageManage">
            {  
                prdItems[0].map(items => {
                    count = count + 1;
                    return <SinglePrdInfoInManagePage passedInfo={[items,count]}></SinglePrdInfoInManagePage>
                })
            }
        </div>
    );
};

export default AdminPageManage;