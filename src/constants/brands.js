import audilogo from "../brand-images/Audi svg.svg";
// import bmwlogo from "../brand-images/bmw_logo_icon_145840 1.svg.svg";
import honda from "../brand-images/Honda svg.svg";
import hyundai from "../brand-images/Hyundai svg.svg";
import kia from "../brand-images/Kia svg.svg";
import merc from "../brand-images/mercedes_benz_logo_icon_145798 1.svg";
import nissan from "../brand-images/Nissan USA svg.svg";

import tesla from "../brand-images/Tesla svg.svg";
// import vector from "../brand-images/Vector svg.svg";
import vw from "../brand-images/Volkswagen USA svg.svg";
import { images } from "../constants"

const branding = [
    { Image: audilogo, title: 'Audi' },
    { Image: honda, title: "Honda" },
    { Image: hyundai, title: "Hyndai" },
    { Image: kia, title: "Kia" },
    { Image: merc, title: "Mercedes" },
    { Image: nissan, title: "Nissan" },
    { Image: tesla, title: "Tesla" },
    { Image: vw, title: "Volks Wagen" }
]
const cars = [
    //image name rate category button
    {
        Image: images.audi,
        title: "Audi A8L 2022",
        price: '$79.20',
        transmission: 'auto',
        capacity: '4',
        pwr_source: 'gasoline'
    },
    {
        Image: images.ford,
        title: "Nissan Maxima Platinum 2022",
        price: '$79.20',
        transmission: 'auto',
        capacity: '4',
        pwr_source: 'gasoline'
    }, {
        Image: images.porsche,
        title: "Porsche Cayenne GTS 2022",
        price: '$79.20',
        transmission: 'auto',
        capacity: '4',
        pwr_source: 'gasoline'
    }, {
        Image: images.coupe,
        title: "BMW M8 Coupe 2022",
        price: '$79.20',
        transmission: 'auto',
        capacity: '4',
        pwr_source: 'gasoline'
    }, {

        Image: images.redbmw,
        title: "BMW X7 M50i 2022",
        price: '$79.20',
        transmission: 'auto',
        capacity: '4',
        pwr_source: 'gasoline'
    },
    {

        Image: images.mclaren,
        title: "McLaren 720s",
        price: '$79.20',
        transmission: 'auto',
        capacity: '4',
        pwr_source: 'gasoline'
    },
]
export default {
    branding,cars
    //     audilogo,
    //     honda, hyundai, kia, merc, nissan, tesla, vw
};