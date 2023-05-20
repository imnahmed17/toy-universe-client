// import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTabs = () => {
    return (
        <div className="mt-20">
            <Tabs>
                <TabList className="text-center">
                    <Tab>DC</Tab>
                    <Tab>Avengers</Tab>
                    <Tab>Guardians of the Galaxy</Tab>
                </TabList>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTabs;