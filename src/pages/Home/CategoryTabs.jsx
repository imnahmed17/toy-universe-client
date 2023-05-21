import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleToyCard from './SingleToyCard';

const CategoryTabs = () => {
    const [toys, setToys] = useState([]);
    const [toyData, setToyData] = useState([]);
    const [activeTab, setActiveTab] = useState("dc");

    useEffect(() => {
        fetch('https://toy-universe-server-lake.vercel.app/toys')
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, [activeTab]);

    useEffect(() => {
        const filteredToys = toys?.filter(toy => toy.subCategory == activeTab);
        setToyData(filteredToys);
    }, [activeTab, toys]);

    return (
        <div className="mt-20">
            <Tabs>
                <TabList className="text-center">
                    <Tab onClick={() => setActiveTab("dc")}>DC</Tab>
                    <Tab onClick={() => setActiveTab("avengers")}>Avengers</Tab>
                    <Tab onClick={() => setActiveTab("guardians_of_the_galaxy")}>Guardians of the Galaxy</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            toyData.map(data => <SingleToyCard 
                                key={data._id}
                                data={data} 
                            />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            toyData.map(data => <SingleToyCard 
                                key={data._id}
                                data={data} 
                            />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            toyData.map(data => <SingleToyCard 
                                key={data._id}
                                data={data} 
                            />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTabs;