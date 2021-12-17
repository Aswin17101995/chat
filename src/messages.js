import React from "react";

function Message(props)
{
    return <>
    <div class="outgoing_msg">
              <div class="sent_msg">
                <p>{props.val}</p>
                <span class="time_date"> 11:01 AM    |    June 9</span> </div>
            </div>
    </>
}

export default Message;