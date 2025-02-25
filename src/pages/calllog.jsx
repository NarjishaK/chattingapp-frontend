import React, { useState } from 'react';
import { Search, Phone, PhoneOutgoing, PhoneIncoming, PhoneMissed, Clock, User, MoreVertical, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import './call.css';

const CallHistoryPage = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  
  // Sample call history data
  const callHistory = [
    { id: 1, name: 'Sarah Johnson', number: '+1 (555) 123-4567', type: 'incoming', duration: '5:21', date: 'Today, 10:15 AM', missed: false },
    { id: 2, name: 'Michael Chen', number: '+1 (555) 987-6543', type: 'outgoing', duration: '2:45', date: 'Today, 9:30 AM', missed: false },
    { id: 3, name: 'Emma Wilson', number: '+1 (555) 234-5678', type: 'incoming', duration: '0:00', date: 'Yesterday, 6:45 PM', missed: true },
    { id: 4, name: 'James Rodriguez', number: '+1 (555) 876-5432', type: 'outgoing', duration: '8:12', date: 'Yesterday, 4:20 PM', missed: false },
    { id: 5, name: 'Lisa Taylor', number: '+1 (555) 345-6789', type: 'incoming', duration: '3:50', date: 'Yesterday, 1:15 PM', missed: false },
    { id: 6, name: 'Alex Morgan', number: '+1 (555) 765-4321', type: 'incoming', duration: '0:00', date: 'Feb 23, 11:30 AM', missed: true },
    { id: 7, name: 'David Kim', number: '+1 (555) 456-7890', type: 'outgoing', duration: '1:20', date: 'Feb 23, 10:05 AM', missed: false },
    { id: 8, name: 'Unknown', number: '+1 (555) 654-3210', type: 'incoming', duration: '0:00', date: 'Feb 22, 8:50 PM', missed: true },
  ];
  
  // Filter calls based on selected tab
  const filteredCalls = callHistory.filter(call => {
    if (selectedTab === 'all') return true;
    if (selectedTab === 'missed') return call.missed;
    return call.type === selectedTab;
  });
  
  // Get call icon based on type and missed status
  const getCallIcon = (type, missed) => {
    if (missed) return <PhoneMissed className="missed-icon" />;
    if (type === 'incoming') return <PhoneIncoming className="incoming-icon" />;
    return <PhoneOutgoing className="outgoing-icon" />;
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="call-history-header">
        <div className="header-content">
          <h1 className="header-title">Call History</h1>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`btn tab-button ${selectedTab === 'all' ? 'active-tab' : ''}`}
          onClick={() => setSelectedTab('all')}
        >
          All
        </button>
        <button 
          className={`btn tab-button ${selectedTab === 'missed' ? 'active-tab' : ''}`}
          onClick={() => setSelectedTab('missed')}
        >
          Missed
        </button>
        <button 
          className={`btn tab-button ${selectedTab === 'incoming' ? 'active-tab' : ''}`}
          onClick={() => setSelectedTab('incoming')}
        >
          Incoming
        </button>
        <button 
          className={`btn tab-button ${selectedTab === 'outgoing' ? 'active-tab' : ''}`}
          onClick={() => setSelectedTab('outgoing')}
        >
          Outgoing
        </button>
      </div>
      
      {/* Call List */}
      <div className="call-list">
        {filteredCalls.map(call => (
          <div key={call.id} className="call-item">
            <div className="call-content">
              <div className="avatar-container">
                <User className="avatar-icon" size={20} />
              </div>
              <div className="call-details">
                <p className="caller-name">{call.name}</p>
                <div className="phone-number">
                  {getCallIcon(call.type, call.missed)}
                  <span>{call.number}</span>
                </div>
              </div>
              <div className="call-time">
                <div className="duration">
                  <Clock size={14} className="clock-icon" />
                  <span>{call.duration}</span>
                </div>
                <p className="call-date">{call.date}</p>
              </div>
              <button className="btn btn-sm rounded-circle btn-icon ">
                <i className="fa-light fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    
      
      {/* Call Button */}
      <div className="call-button-container">
        <button className="call-button">
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
};

export default CallHistoryPage;