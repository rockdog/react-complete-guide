import React from 'react';

const Tabs = ({tabs, children, tabsWrapper = 'menu'}) => {
    const TabsWrapper = tabsWrapper;
    return (
        <div className='tabs'>
            <div className='tabs-menu'>
                <TabsWrapper>{tabs}</TabsWrapper>
            </div>
            <div className='tabs-content'>
                {children}
            </div>
        </div>
    );
};

export default Tabs;
