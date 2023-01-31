import { BorderColor, CancelPresentation, MoreVert, Phone, VideoCall, Videocam } from '@material-ui/icons'
import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import "./messenger.css"

export default function Messenger() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="messengerLeft">
                    <div className="messengerLeftTop">
                        <h1 className="messengerLogo">Chat</h1>
                        <div className="messengerLeftTopIcons">
                            <MoreVert className="messengerListItems" />
                            <VideoCall className="messengerListItems" />
                            <BorderColor className="messengerListItems" />
                        </div>
                    </div>
                    <div className="messengerListChat">
                        <div className="messengerListChatItems">
                            <img src={PF + "person/1.jpeg"} alt="" className="messengerItemsImg" with="100%" />
                            <div className="messengerListText">
                                <h4>Minh Tuấn</h4>
                                <h5>Chúng ta là gì của nhau</h5>
                            </div>
                        </div>
                        <div className="messengerListChatItems">
                            <img src={PF + "person/1.jpeg"} alt="" className="messengerItemsImg" with="100%" />
                            <div className="messengerListText">
                                <h4>Minh Tuấn</h4>
                                <h5>Chúng ta là gì của nhau</h5>
                            </div>
                        </div>
                        <div className="messengerListChatItems">
                            <img src={PF + "person/1.jpeg"} alt="" className="messengerItemsImg" with="100%" />
                            <div className="messengerListText">
                                <h4>Minh Tuấn</h4>
                                <h5>Chúng ta là gì của nhau</h5>
                            </div>
                        </div>
                        <div className="messengerListChatItems">
                            <img src={PF + "person/1.jpeg"} alt="" className="messengerItemsImg" with="100%" />
                            <div className="messengerListText">
                                <h4>Minh Tuấn</h4>
                                <h5>Chúng ta là gì của nhau</h5>
                            </div>
                        </div>
                        <div className="messengerListChatItems">
                            <img src={PF + "person/1.jpeg"} alt="" className="messengerItemsImg" with="100%" />
                            <div className="messengerListText">
                                <h4>Minh Tuấn</h4>
                                <h5>Chúng ta là gì của nhau</h5>
                            </div>
                        </div>
                        <div className="messengerListChatItems">
                            <img src={PF + "person/1.jpeg"} alt="" className="messengerItemsImg" with="100%" />
                            <div className="messengerListText">
                                <h4>Minh Tuấn</h4>
                                <h5>Chúng ta là gì của nhau</h5>
                            </div>
                        </div>
                        <div className="messengerListChatItems">
                            <img src={PF + "person/1.jpeg"} alt="" className="messengerItemsImg" with="100%" />
                            <div className="messengerListText">
                                <h4>Minh Tuấn</h4>
                                <h5>Chúng ta là gì của nhau</h5>
                            </div>
                        </div>
                        <div className="messengerListChatItems">
                            <img src={PF + "person/1.jpeg"} alt="" className="messengerItemsImg" with="100%" />
                            <div className="messengerListText">
                                <h4>Minh Tuấn</h4>
                                <h5>Chúng ta là gì của nhau</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="messengerFeed">
                    <div className="messengerTopMid">
                        <div className="messengerTopInfo">
                            <img src={PF + "person/1.jpeg"} alt="" className="messengerInfoImg" />
                            <div className="messengerInfoText">
                                <h3>Minh Tuấn</h3>
                            </div>
                        </div>
                        <div className="messengerItems">
                            <Phone />
                            <Videocam />
                            <CancelPresentation />
                        </div>
                    </div>
                    <div className="messengerChatText">

                    </div>
                </div>
                <div className="messengerRight">
                    <div className="messengerRightInfo">
                        <img src="" alt="" className="messengerRightImg" />
                        <div className="messengerRightText">
                            <h2>Minh Tuấn</h2>
                            <h4>Đang hoạt động</h4>
                        </div>
                        <div className="messengerRightOption">
                            <h3>Tùy Chỉnh đoạn chat</h3>
                            <h3>Quyền riềng tư và hỗ trợ</h3>
                            <h3>File phương tiện được chia sẻ</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
