import './App.css';
import ChatLayout from './chatlayout';
import SideBarItem from './sidebaritem';
import React from 'react';

function App() {  
  return (
    <div className="App">
      <ChatLayout>
        <SideBarItem>Group groupname 1</SideBarItem>
        <SideBarItem>Group groupname 2</SideBarItem>
        <SideBarItem>Group groupname 3</SideBarItem>
        <SideBarItem>Group groupname 4</SideBarItem>
        <SideBarItem>Group groupname 5</SideBarItem>
        <SideBarItem>Group groupname 6</SideBarItem>
        <SideBarItem>Group groupname 6</SideBarItem>
        <SideBarItem>Group groupname 6</SideBarItem>
        <SideBarItem>Group groupname 6</SideBarItem>
        <SideBarItem>Group groupname 6</SideBarItem>
        <SideBarItem>Group groupname 6</SideBarItem>
        <SideBarItem>Group groupname 6</SideBarItem>
      </ChatLayout>
    </div>
  );
}

export default App;
