import React from "react";
import {createState} from "../state";
import Toolbar from "./Toolbar";
import MailboxList from "./MailboxList";

import { Dialog, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import ContactList from "./ContactList";
import MessageList from "./MessageList";
import ContactView from "./ContactView";
import MessageView from "./MessageView";
import WelcomeView from "./WelcomeView";

class BaseLayout extends React.Component{
    public state = createState(this);
    render(){
        return(
            <div className="appContainer">
                <Dialog open={this.state.pleaseWaitVisible}
                             disableBackdropClick={true}
                             disableEscapeKeyDown={true}
                             transitionDuration={0}>
                    <DialogTitle style={{textAlign: "center"}}>
                                Please Wait
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            ...Contacting Server...
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

                <div className="toolbar">
                    <Toolbar state={this.state} />
                </div>

                <div className="mailboxList">
                    <MailboxList state={this.state} />
                </div>>

                <div className="centerArea">
                    <div className="messageList">
                        <MessageList state={this.state} />
                    </div>
                </div>

                <div className="centerViews">
                    { this.state.currentView === "welcome" && <WelcomeView /> }
                    { 
                        (this.state.currentView === "message" || this.state.currentView === "compose" ) 
                        && <MessageView state={this.state} />
                    }
                    {   (this.state.currentView === "contact" || this.state.currentView === "contactAdd" ) 
                        && <ContactView state={this.state} />
                    }
                </div>

                <div className="contactList">
                    <ContactList state={this.state} />
                </div>
            </div>
        );
    }
}

export default BaseLayout;