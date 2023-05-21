import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import RoutingControl from './RoutingControl';

const LocateUs = () => {
    const redIcon = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/256/3699/3699561.png',
        iconSize: [25, 25],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    return (
        <div className='mt-10 flex flex-col-reverse lg:flex-row gap-6'>
            <div className='lg:w-3/5'>
                <MapContainer 
                    center={[23.76409424382421, 90.41380841837086]}   
                    zoom={13} 
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.763974998380466, 90.41380841837086]} icon={redIcon}>
                        <Tooltip>Here, we are located</Tooltip>
                    </Marker>
                    <RoutingControl />
                </MapContainer>
            </div>
            <div className='lg:w-2/5'>
                <h2 className='text-center text-3xl lg:text-start font-semibold mb-2 text-[#800080]'>Locate Us</h2>
                <p className='text-justify mb-4'>
                    We are located at Dhaka, Bangladesh, and we&apos;d love for you to come visit us. To get to our store, you can use the map below to see our exact location. If you&apos;re driving, we have parking spaces available for our customers. And if you&apos;re taking public transportation, we&apos;re conveniently located near the Rampura Bridge.
                    <br /> <br />
                    If you need any assistance finding us, please don&apos;t hesitate to reach out to our team by phone at 555-555-5555 or email at info@toyuniverse.com. We&apos;re always happy to help guide you to our store.
                    <br /> <br />
                    We look forward to seeing you soon at Toy Universe!
                </p>
            </div>
        </div>
    );
};

export default LocateUs;