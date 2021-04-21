import React, { useContext } from 'react';
import { CourseContext, ServiceContext, UserContext } from '../../App';
import './WebsiteAnalytics.css';
import {FaUserCircle , FaDiscourse , FaServicestack} from 'react-icons/fa';
const WebsiteAnalytics = () => {
    const user = useContext(UserContext)
    const course = useContext(CourseContext)
    const service = useContext(ServiceContext)
    
    return (
        <div className="websiteAnalyticsMainDiv">
            <div className="left parts">
                <h2>{user[0].length}</h2>
                <FaUserCircle className="icon"></FaUserCircle>
                <h4>total users</h4>
            </div>
            <div className="middle parts">
                <h2>{course[0].length}</h2>
                <FaDiscourse/>
                <h4>total courses</h4>
            </div>
            <div className="right">
                <h2>{service[0].length}</h2>
                <FaServicestack/>
                <h4>total services</h4>
            </div>
        </div>
    );
};

export default WebsiteAnalytics;