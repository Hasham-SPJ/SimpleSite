import React, { Component } from 'react'
import RoboChart from '@postlight/react-google-sheet-to-chart';

const style = { width: '1200px', margin: '0 auto' };


export default class Stats extends Component {
    render() {
        return (
            <div style={style}>
          <RoboChart
            id="15zqn9P5xphV16eCguBmcEwSJ2lcFyNZItXZlwzkAwIo"
            sheet="sheet1"
            token="AIzaSyBVErWfl1QYc_9IoKmV1Hj6wocxtfI36Rg"
            type="doughnut"
            colors={['#a1a1a1', '#995500', '#990055', '#009955']}
          />
            <RoboChart
            id="15zqn9P5xphV16eCguBmcEwSJ2lcFyNZItXZlwzkAwIo"
            sheet="sheet1"
            token="AIzaSyBVErWfl1QYc_9IoKmV1Hj6wocxtfI36Rg"
            type="line"
            colors={['#a1a1a1', '#995500', '#990055', '#009955']}
          />
        </div>
        );
    }


}