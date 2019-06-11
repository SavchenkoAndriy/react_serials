import React from 'react';

const b = String.fromCharCode(709);
const c = String.fromCharCode(708);


class OneSerial extends React.Component{

    state = {
        serialList: this.props.serialList,
        firstListLength: 3,
        firstList: undefined,
        secondList: undefined,
        show: false,
    };

    constructor(props) {
        super(props);

        let serialList = this.props.serialList;
        let firstList = [];
        let secondList = [];


        for (let j = 0; j < this.state.firstListLength; j++){
            let oneSerial = (
                <div key={j} className={'serial__wrap'}>
                    <div className={'serial__img'}>
                        <img onClick={this.delImg} alt={j} src={serialList[j].imgMedium}/>
                    </div>
                    <div className={'serial__info'}>
                        <div>
                            <div className={'serial__name'}>{serialList[j].name}</div>
                            <div className={'serial__year'}>{serialList[j].date}</div>
                        </div>
                        <div className={'flex'}>
                            <div>Сезон: {serialList[j].season} Эпизод: {serialList[j].seria}</div>
                        </div>
                    </div>
                </div>
            );
            firstList.push(oneSerial);
        }

        for (let j = this.state.firstListLength; j < serialList.length; j++){
            let oneSerial = (
                <div key={j} className={'serial__wrap'}>
                    <div className={'serial__img'}>
                        <img onClick={this.delImg} alt={j} src={serialList[j].imgMedium}/>
                    </div>
                    <div className={'serial__info'}>
                        <div>
                            <div className={'serial__name'}>{serialList[j].name}</div>
                            <div className={'serial__year'}>{serialList[j].date}</div>
                        </div>
                        <div className={'flex'}>
                            <div>Сезон: {serialList[j].season} Эпизод: {serialList[j].seria}</div>
                        </div>
                    </div>
                </div>
            );
            secondList.push(oneSerial);
        }


        this.state.firstList = firstList;
        this.state.secondList = secondList;
        this.state.buttonValue = serialList.length - this.state.firstListLength;
        this.state.button = 'Еще '+this.state.buttonValue+' сериалла '+b;



    }

    delImg = (event) =>{
        let serialList = this.state.serialList;
        let srcId = event.target.alt;

        if (event.target.src === serialList[srcId].imgOriginal) {
            event.target.src = serialList[srcId].imgMedium;
        } else {
            event.target.src = serialList[srcId].imgOriginal
        }
    };

    showAll = () => {
        if (this.state.button === 'Показать основные '+c){
            this.setState({
                show: !this.state.show,
                button: 'Еще '+this.state.buttonValue+' сериалла '+b,
            })
        } else
            {this.setState({
                show: !this.state.show,
                button: 'Показать основные '+c,
            })
        }
    };




    render () {

        return (
            <div>
                <div>
                    {this.state.firstList}
                </div>
                {this.state.show &&
                <div>
                    {this.state.secondList}
                </div>
                }
                <div className={'button__show'}>
                    <button onClick={this.showAll}>{this.state.button}</button>
                </div>
            </div>
        )
    }
}

export default OneSerial;