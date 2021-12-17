import Message from "./messages";
import Inbox from "./inboxchat";
import "./App.css";
import { useEffect, useState} from "react";
var data =[{user:"aswin",msg:["hello","how r u"]},
{user:"jana",msg:["va spicderman polam"]},
{user:"sathya",msg:["dai olunga padi da","approm velaikku yeppo pora"]},
{user:"sb praveen",msg:["pangu stock market crashed"]},
{user:"Naveen",msg:["machi hotstart otp solra"]},
{user:"friends",msg:["hello","how r u"]},
          ]
function App() {

  const [addmsgs,staddmsg] =useState(false)
  const [user,setUser] =useState("");
  const [msgs,setmsg] = useState(['no msg']);
 
  let Rendermsg =(e)=>{
    console.log(data)
   // console.log(e)
   setUser(e)
    //useeffect
    //setmsg([...x])
    //console.log("the variable value is ",x)
   // console.log("the state value is ",msgs)
  // console.log("state user is ",user)
  }
  useEffect(()=>{
    console.log(user)
    setmsg([])
    data.map((item)=>{
      if((item.user.localeCompare(user)==0))
      {
        setmsg([...item.msg])
        return
      }
    })
    console.log(msgs)
  },[user])

  let addmsg =()=>{
   var x=[]
    console.log(user)
    var str = document.getElementById("sendmsg").value
    console.log(str)
    for(var i=0;i<data.length;i++)
    {
      if((data[i].user.localeCompare(user))===0)
      {
        
          x = data[i].msg;
          x.push(str);
          console.log(x)
          data[i].msg = x;
          console.log("data value is ",data[i].msg)
          break;
      }
    }
    document.getElementById("sendmsg").value = ""
    console.log(data)
    setmsg([...msgs,str])
  }
  return (
    <>
      <div className="container">
        <div className="messaging">
          <div className="inbox_msg">
            <div className="inbox_people">
              <div class="headind_srch">
                <div class="recent_heading">
                  <h4>Recent</h4>
                </div>
                <div class="srch_bar">
                  <div class="stylish-input-group">
                    <input
                      type="text"
                      class="search-bar"
                      placeholder="Search"
                    />
                    <span class="input-group-addon">
                      <button type="button">
                        {" "}
                        <i class="fa fa-search" aria-hidden="true"></i>{" "}
                      </button>
                    </span>{" "}
                  </div>
                </div>
              </div>
              {
                data.map((item)=>{
                  return <Inbox name ={item.user} lastmsg ={item.msg[item.msg.length-1]} propsfunc={Rendermsg}></Inbox>
                })
              }
            </div>
            <div className="mesgs">
              <div className="msg_history">
              {
                msgs.map((x)=>{
                  return <Message val={x}></Message>
                })
              }
              </div>
              <div class="type_msg">
            <div class="input_msg_write">
              <input type="text" class="write_msg" id="sendmsg" placeholder="Type a message"/>
              <button class="msg_send_btn" type="button" onClick={addmsg}><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
