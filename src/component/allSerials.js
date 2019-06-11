import React from 'react';
import OneSerial from './oneSerial';


class AllSerials extends React.Component{

    state = {};

    constructor(props) {
        super(props);

        let allSerials = this.props.serials;
        let serials = [];
        let serialsImg =  [];
        let serialList = [];


        for (let i = 0; i < allSerials.length; i++){
            if (allSerials[i].show.image !== null){
                serials.push(allSerials[i]);
                serialsImg.push(allSerials[i].show.image);
            }
        }

        for (let i = 0; i < serials.length; i++) {
            serialList[i] = {
                imgMedium: serialsImg[i].medium,
                imgOriginal: serialsImg[i].original,
                name: serials[i].show.name,
                date: serials[i].show.premiered.toString().substring(0,4),
                season: serials[i].season,
                seria: serials[i].number
            }
        }
        this.state.serialList = serialList;
    }


    render () {
        return (
            <OneSerial
                serialList = {this.state.serialList}
            />
        )
    }
}

export default AllSerials;