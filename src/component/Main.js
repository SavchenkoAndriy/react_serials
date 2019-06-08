import React from 'react';
import './sass/main.sass';

const a = String.fromCharCode(60);
const b = String.fromCharCode(709);
const c = String.fromCharCode(708);



class Main extends React.Component{

    render (){
        return (
            <div>
                {this.props.goMain &&
                <div className={'films'}>
                    <div className={'films__header'}>
                        <button onClick={this.props.goBack}>{a}</button>
                        <p>SUPER FILM!!!</p>
                    </div>
                    <div className={'films__date'}>
                        <p>{this.props.day} {this.props.month} {this.props.year}</p>
                    </div>
                    <div>
                        {this.props.firstList}
                        {this.props.showMore &&
                            <div>
                                {this.props.secondList}
                            </div>
                        }
                        {this.props.number > 0 && this.props.showAll &&
                            <div className={'button__show'}>
                                <button onClick={this.props.show}>Еще {this.props.number} сериала {b}</button>
                            </div>
                        }
                        {this.props.hide &&
                            <div className={'button__show'}>
                                <button onClick={this.props.hideList}>Показать основные {c}</button>
                            </div>
                        }
                    </div>
                </div>
                }
            </div>
        );
    }
}


export default Main;