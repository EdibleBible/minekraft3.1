import React from "react";
import ReactDOM from "react-dom";

class TicketConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Ticket: 0,
            GTicket: 0
        };
    };
    convertTicket(value,type){
        switch(type){
            case "Ticket":
                this.setState({
                    GTicket: Math.floor(value/2500), 
                    Ticket: value
                });
                return;
            case "GTicket":
                this.setState({
                    GTicket: value, 
                    Ticket: value*2500
                });
                return;
        };
    };

    render(){
        return<>
            <p>Tickets</p>
            <input type="number" value={this.state.Ticket} onChange={(event) => this.convertTicket(event.target.value, "Ticket") }/>
            <p>Golden Tickets</p>
            <input type="number" value={this.state.GTicket} onChange={(event) => this.convertTicket(event.target.value, "GTicket") }/>
        </>
    }
}
export default TicketConverter;