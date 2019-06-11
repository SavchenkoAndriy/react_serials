import React from 'react';
import Main from './Main';
import './sass/App.sass';

import Calendar from 'react-calendar';
import Main_img from './../img/tv.png';



class App extends React.Component {

    state = {
        goMain: undefined,
        goCalendar: true,
        date: new Date(),
    };

    onChange = date => this.setState({ date });

    goBack = () => {
        this.setState({
            goMain: undefined,
            goCalendar: true
        });
    };


    onClickDay = async (date) => {

        let month = date.toString().substring(4,7);
        let day = date.toString().substring(8,10);
        let year = date.toString().substring(11,15);


        let monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let monthNumber = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        let RuListMonth = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
        let RuMonth;

        for (let i = 0; i < monthName.length; i++){
            if (month === monthName[i]){
                month = monthNumber[i];
                RuMonth = RuListMonth[i];
            }
        }

        const API_URL = await fetch(`http://api.tvmaze.com/schedule?country=US&date=${year}-${month}-${day}`);
        const serials = await API_URL.json();


        this.setState({
            goMain: true,
            goCalendar: undefined,
            date: date,
            day: Number(day),
            month: RuMonth,
            year: year,
            serials: serials,
        });

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
                    goMain = {this.state.goMain}
                    day = {this.state.day}
                    month = {this.state.month}
                    year = {this.state.year}
                    serials={this.state.serials}
                />
            </div>
        );
    }
}

export default App;
