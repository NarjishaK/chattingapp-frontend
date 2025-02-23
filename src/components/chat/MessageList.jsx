import React from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

const MessageList = () => {
  return (
    <div className="panel-body message-list">
        <OverlayScrollbarsComponent
                className="main-menu"
                options={{
                    className: "os-theme-light",
                    scrollbars: {
                        autoHide: 'scroll',
                    },
                }}
            >
            <div className="scrollable">
                <div className="single-message">
                    <div className="avatar">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User"/>
                        <span className="active-status active"></span>
                    </div>
                    <div className="part-txt">
                        <div className="top">
                            <span className="user-name">Amelie Harris</span>
                            <span className="msg-time">13 min.</span>
                        </div>
                        <div className="msg-short">
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                        </div>
                    </div>
                </div>
                <div className="single-message unread">
                    <div className="avatar">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User"/>
                        <span className="active-status active"></span>
                    </div>
                    <div className="part-txt">
                        <div className="top">
                            <span className="user-name">Lucy Burrows</span>
                            <span className="msg-time">14 min.</span>
                        </div>
                        <div className="msg-short">
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                        </div>
                    </div>
                </div>
                <div className="single-message">
                    <div className="avatar">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User"/>
                        <span className="active-status"></span>
                    </div>
                    <div className="part-txt">
                        <div className="top">
                            <span className="user-name">Tia Goddard</span>
                            <span className="msg-time">1 hr.</span>
                        </div>
                        <div className="msg-short">
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                        </div>
                    </div>
                </div>
                <div className="single-message unread">
                    <div className="avatar">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User"/>
                        <span className="active-status"></span>
                    </div>
                    <div className="part-txt">
                        <div className="top">
                            <span className="user-name">Abigail Henry</span>
                            <span className="msg-time">2 hr.</span>
                        </div>
                        <div className="msg-short">
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                        </div>
                    </div>
                </div>
                <div className="single-message unread">
                    <div className="avatar">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User"/>
                        <span className="active-status"></span>
                    </div>
                    <div className="part-txt">
                        <div className="top">
                            <span className="user-name">Harry Bailey</span>
                            <span className="msg-time">3 hr.</span>
                        </div>
                        <div className="msg-short">
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                        </div>
                    </div>
                </div>
                <div className="single-message">
                    <div className="avatar">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User"/>
                        <span className="active-status"></span>
                    </div>
                    <div className="part-txt">
                        <div className="top">
                            <span className="user-name">Luke Hall</span>
                            <span className="msg-time">3 hr.</span>
                        </div>
                        <div className="msg-short">
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                        </div>
                    </div>
                </div>
                <div className="single-message unread">
                    <div className="avatar">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User"/>
                        <span className="active-status active"></span>
                    </div>
                    <div className="part-txt">
                        <div className="top">
                            <span className="user-name">Spencer May</span>
                            <span className="msg-time">5 hr.</span>
                        </div>
                        <div className="msg-short">
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                        </div>
                    </div>
                </div>
            </div>
        </OverlayScrollbarsComponent>
    </div>
  )
}

export default MessageList