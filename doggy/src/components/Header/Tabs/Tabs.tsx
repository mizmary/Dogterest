import React, { useState } from 'react';
import './Tabs.css';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('picFeed');

    const handleTabClick = (tabType: string) => {
        setActiveTab(tabType)
    }

    return (
        <div className='tabs'>
            <button
            className={`tab-btn ${activeTab === 'picFeed' ? 'active' : ''}`}
            onClick={() => handleTabClick('picFeed')}>
                Лента
            </button>

            <button
            className={`tab-btn ${activeTab === 'licked' ? 'active' : ''}`}
            onClick={() => handleTabClick('licked')}>
                Понравившееся
            </button>
        </div>
    )
}

export default Tabs;