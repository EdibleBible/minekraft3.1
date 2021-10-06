import React from "react";
import ReactDOM from "react-dom";
import TicketConverter from "./components/currencyConv.js"
import "./index.css"

const CurrApp = (
    <main>
        <TicketConverter />
    </main>
)

ReactDOM.render(CurrApp, document.getElementById('root'));