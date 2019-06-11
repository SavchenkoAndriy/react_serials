import React from 'react';
import './sass/main.sass';
import AllSerials from './allSerials';

const a = String.fromCharCode(60);

class Main extends React.Component{

    render (){
        return (
            <div>
                {this.props.goMain &&
                <div className={'films'}>
                    <div className={'films__header'}>
                        <button onClick={this.props.goBack}>{a}</button>
                        <p>SUPER FILM</p>
                    </div>
                    <div className={'films__date'}>
                        <p>{this.props.day} {this.props.month} {this.props.year}</p>
                    </div>
                    <AllSerials
                        serials={this.props.serials}
                    />
                </div>
                }
            </div>
        );
    }
}


export default Main;