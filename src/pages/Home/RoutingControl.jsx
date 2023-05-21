import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const createRoutineMachineLayer = () => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(23.76520775635643, 90.4123689096609),
            L.latLng(23.762389620175203, 90.4159597194101)
        ],
        lineOptions: {
            styles: [{ color: "#6FA1EC" }]
        },
        show: false,
        draggableWaypoints: false
    });

    return instance;
};

const RoutingControl = createControlComponent(createRoutineMachineLayer);

export default RoutingControl;