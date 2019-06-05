import React from 'react';
import Main from './Main';
import './sass/App.sass';

import Calendar from 'react-calendar';
import $ from "jquery";

import Main_img from './../img/tv.png';
import Jun from './monthInfo/Jun';
import May from './monthInfo/May';
import Jul from './monthInfo/Jul';



function clickImg(event){
    if ($(event.target).hasClass('clicked')){
        $(event.target).removeClass('clicked').parent('div').parent('div').css('height', '15vh');
    } else {
        $(event.target).addClass('clicked').parent('div').parent('div').css('height', 'calc(90vw/0.68)');
    }
}
// по іншому не придумав як не використувуючи Jquery


class App extends React.Component {

    state = {
        goMain: undefined,
        goCalendar: true,
        showMore: undefined,
        hide: undefined,
        showAll: undefined,
        date: new Date(),
        listLang: 2,
        Serial: {
            name: undefined,
            year: undefined,
            seria: undefined,
            img: undefined
        }
    };

    onChange = date => this.setState({ date });

    goBack = () => {
        this.setState({
            goMain: undefined,
            goCalendar: true,
            showAll: undefined,
            hide: undefined,
            showMore: undefined,
        });
    };


    show = () => {
        this.setState({
            showMore: true,
            showAll: undefined,
            hide: true
        })
    };


    hideList = () => {
        this.setState({
            showMore: undefined,
            showAll: true,
            hide: undefined
        })
    };


    onClickDay = date => {

        let month = date.toString().substring(4,7);
        let day = date.toString().substring(8,10);
        let year = date.toString().substring(11,15);

        let RuListMonth = ['мая','июня','июля'];
        let RuMonth;

        let ListMonth = ['May','Jun','Jul'];
        let Month = [May,Jun,Jul];

        let serialsName = [];
        let serialYear = [];
        let serialSeries = [];
        let serialImg = [];

        for (let i = 0; i <ListMonth.length; i++){
            if (month === ListMonth[i]) {

                RuMonth = RuListMonth[i];

                let NameSerials = Object.keys(Month[i][day]);

                for (let j = 0; j < NameSerials.length; j++) {

                    let NameOfSerial = NameSerials[j];

                    let newName = Month[i][day][NameOfSerial].name;
                    let newYear = Month[i][day][NameOfSerial].year;
                    let newSeries = Month[i][day][NameOfSerial].seria;
                    let newImg = Month[i][day][NameOfSerial].img;

                    serialsName.push(newName);
                    serialYear.push(newYear);
                    serialSeries.push(newSeries);
                    serialImg.push(newImg);
                }
            }

            let firstList = [];
            let firstListSerial;
            let secondList = [];
            let secondListSerial;

            for (let i = 0; i < this.state.listLang && i < serialsName.length; i++){
                firstListSerial = (
                    <div key = {i} className={'serial__wrap'}>
                        <div onClick={clickImg} className={'serial__img'}>
                            <img alt={serialsName[i]} src = {serialImg[i]} />
                        </div>
                        <div className={'serial__info'}>
                            <div>
                                <div className={'serial__name'}>{serialsName[i]}</div>
                                <div className={'serial__year'}>{serialYear[i]}</div>
                            </div>
                            <div className={'flex'}>
                                <div>{serialSeries[i]}</div>
                            </div>
                        </div>
                    </div>
                );
                firstList.push(firstListSerial);
            }

            for (let i = this.state.listLang; i < serialsName.length; i++) {
                secondListSerial = (
                    <div key = {i} className={'serial__wrap'}>
                        <div onClick={clickImg} className={'serial__img'}>
                            <img alt={serialsName[i]} src = {serialImg[i]} />
                        </div>
                        <div className={'serial__info'}>
                            <div>
                                <div className={'serial__name'}>{serialsName[i]}</div>
                                <div className={'serial__year'}>{serialYear[i]}</div>
                            </div>
                            <div className={'flex'}>
                                <div>{serialSeries[i]}</div>
                            </div>
                        </div>
                    </div>
                );
                secondList.push(secondListSerial);
            }

            let serialNumber = serialsName.length - this.state.listLang;

            this.setState({
                goMain: true,
                goCalendar: undefined,
                showAll: true,
                firstList: firstList,
                secondList: secondList,
                serialNumber: serialNumber,
                date: date,
                day: Number(day),
                month: RuMonth,
                year: year,
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.goCalendar &&
                    <div className={'container'}>
                        <div className={'main'}>
                            <div className={'main__header'}>
                                <p>SUPER FILM</p>
                            </div>
                            <div className={'main__img'}>
                                <img className={'img'} width={'30px'} height={'30px'} alt={'ss'} src={Main_img} />
                            </div>
                            <div className={'main__text'}>
                                <p>Для получения списка сериалов, пожалуйста выберите <br/> необходимый месяц и день.</p>
                            </div>
                        </div>
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                            onClickDay = {this.onClickDay}
                        />
                    </div>
                }
                <Main
                    goBack = {this.goBack}
                    show = {this.show}
                    hideList = {this.hideList}
                    hide = {this.state.hide}
                    goMain = {this.state.goMain}
                    showMore = {this.state.showMore}
                    showAll = {this.state.showAll}
                    firstList = {this.state.firstList}
                    secondList = {this.state.secondList}
                    number = {this.state.serialNumber}
                    day = {this.state.day}
                    month = {this.state.month}
                    year = {this.state.year}
                />
            </div>
        );
    }
}

export default App;
