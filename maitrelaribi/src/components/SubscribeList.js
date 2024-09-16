import React, { useEffect, useState } from 'react';
import './SubscribeList.css'; // Create and import your CSS file
import axios from 'axios';
const SubscribeList = () => {
    const [subscribers,setSubscribers] = useState([])

    const sendEmail = (email) => {
        alert(`Email sent to ${email}`);
    };
    useEffect(()=>{
        axios.get('https://www.maitrelaaribi.com/api/getemailsubscribe')
        .then((res)=>{
            setSubscribers(res.data)
        })
    })

    return (
        <div className="subscribe-list-container">
            <h2 className="subscribe-list-title">Subscription List</h2>
            <table className="subscribe-table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Date Subscribed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribers.map((subscriber, index) => (
                        <tr key={index}>
                            <td>{subscriber.email}</td>
                            <td>{subscriber.created_at}</td>
                            <td>
                                <button
                                    className="send-email-btn"
                                    onClick={() => sendEmail(subscriber.email)}
                                >
                                    Send Email
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubscribeList;
