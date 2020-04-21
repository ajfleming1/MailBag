import React from "react";
import { InputBase } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const MessageView = ({state}) => (
    <form>
        { state.currentView === "message" && 
            <InputBase defaultValue= { `ID ${state.messageID}` }
                margin="dense" disabled={ true } fullWidth={ true }
                className="messageInfoField" />
        }
        { state.currentView === "message" && <br /> }
        { state.currentView === "message" && 
            <InputBase defaultValue={state.messageDate}
                margin="dense" disabled={ true } fullWidth={ true }
                className="messageInfoField" />
        }
        { state.currentView === "message" && <br /> }
        { state.currentView === "message" && 
            <TextField defaultValue={state.messageFrom}
                margin="dense" disabled={ true } 
                fullWidth={ true } label="From"
                className="messageInfoField" />
        }
        { state.currentView === "message" && <br /> }
        { state.currentView === "compose" && 
            <TextField margin="dense" id="messageTo" variant="outlined"
                fullWidth={ true } label="To"
                value={ state.messageTo }
                inputProps= {{ style: { color: "#000000" } }}
                onChange={ state.fieldChangeHandler } />
        }
        { state.currentView === "compose" && <br /> }
        { <TextField margin="dense" id="messageSubject" variant="outlined"
                fullWidth={ true } label="Subject"
                value={ state.messageSubject } disabled={ state.currentView === "message"}
                inputProps= {{ style: { color: "#000000" } }}
                onChange={ state.fieldChangeHandler } />
        }
        { state.currentView === "compose" && <br /> }
        { <TextField margin="dense" id="messageBody" variant="outlined"
                fullWidth={ true } multiline={ true } rows={ 12 }
                value={ state.messageBody } disabled={ state.currentView === "message"}
                inputProps= {{ style: { color: "#000000" } }}
                onChange={ state.fieldChangeHandler } />
        }
        { state.currentView === "compose" && 
            <Button variant="contained" color="primary" size="small"
                    style={ { margin: 10 }} onClick={ state.sendMessage }>
                Send
            </Button>    
        }
        { state.currentView === "message" &&
            <Button variant="contained" color="primary" size="small" style={{ marginTop:10, marginRight:10 }}
                    onClick={ () => state.showComposeMessage("reply") }>
                Reply
            </Button>
        }
        { state.currentView === "message" &&
            <Button variant="contained" color="primary" size="small" style={{ marginTop:10 }}
                    onClick={ state.deleteMessage }>
                Delete
            </Button>
        }
    </form>
);

export default MessageView;