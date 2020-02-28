import React, {Component} from 'react';
import DashboardOptionButtons from  "./OptionButtons/component";
import "./style.css"
class Dashboard extends Component {
    render() {
        return (
            <>
                <h1 className="dashboardtitle" >Welcome to Dashboard</h1>
                <DashboardOptionButtons />
            </>
        )
    }
}

export default Dashboard;