import React from "react";


function Inbox(props){
  let click =()=>{
   return props.propsfunc(props.name)
  }
    return  <div>
      
      <div class="chat_list" onClick={click}>
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                <div class="chat_ib">
                  <h5>{props.name}<span class="chat_date">Dec 25</span></h5>
                  <p>{props.lastmsg}</p>
                </div>
              </div>
            </div>
    </div>
}

export default Inbox;