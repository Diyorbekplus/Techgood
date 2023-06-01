import { GiReceiveMoney } from "react-icons/gi";
import { FiClock, FiPercent } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import asus1 from "./Images/laptops/asus1.png"
import omen from "./Images/laptops/hp-omen.png"
import legion from "./Images/laptops/legion-5.png"
import victus15 from "./Images/laptops/victus-15.png"
import a13 from "./Images/laptops/a-13.png"
import artel from "./Images/laptops/smart-tv.png"
import headphone from "./Images/laptops/headphone.png"
import { FaStar } from "react-icons/fa";
import macbookm1 from "./Images/laptops/macbook-m11.jpg"
import macbookair from "./Images/laptops/macbook-air.png"
import hpelitebook from "./Images/laptops/hp-elitebook.png"
import zenbook from "./Images/laptops/zenbook.png"
import aspire5 from "./Images/laptops/aspire5.png"
import phone1 from "./Images/mobiles/phone-1.png"
import phone2 from "./Images/mobiles/phone-2.png"
import phone3 from "./Images/mobiles/phone-3.png"
import phone4 from "./Images/mobiles/phone-4.png"
import note12 from "./Images/mobiles/note12.png"
import nova10 from "./Images/mobiles/nova10.png"
import pocof4 from "./Images/mobiles/pocof4.png"
import tv1 from "./Images/tv/tv-1.png"
import tv2 from "./Images/tv/tv-2.png"
import tv3 from "./Images/tv/tv-3.png"
import tv4 from "./Images/tv/tv-4.png"
import lg32 from "./Images/tv/lg32.png"

import h1 from "./Images/headphones/h-1.png"
import h2 from "./Images/headphones/h-2.png"
import h3 from "./Images/headphones/h-3.png"
import h4 from "./Images/headphones/h-4.png"

export const gamerProducts = [
    {
        id:1,
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: asus1,
        title: "Asus ROG Zephyrus G14",
        oldPrice: 999.99,
        newPrice: 1299.99,
        amount: 1
    },
    {
        id:2,
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: omen,
        title: "HP Omen 17",
        oldPrice: 1599.99,
        newPrice: 1399.99,
        amount: 1
    },
    {
        id:3,
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: legion,
        title: "Lenovo Legion Pro 5",
        oldPrice: 1999.99,
        newPrice: 1849.99,
        amount: 1
    },
]
export const topSellingProducts = [
    {
        id:1,
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: victus15,
        title: "HP Victus 15",
        oldPrice: 699.99,
        newPrice: 659.99
    },
    {
        id:2,
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: a13,
        title: "Samsung A13",
        oldPrice: 279.99,
        newPrice: 249.99
    },
    {
        id:3,
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: artel,
        title: "Artel Smart Tv",
        oldPrice: 259.99,
        newPrice: 239.99
    },
    {
        id:4,
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: headphone,
        title: "Jabra Elite 45h",
        oldPrice: 87.99,
        newPrice: 84.99
    },
]
export const features = [
    {
        id: 1,
        title: "Free Delivery",
        subtitle: "Free shipping on all order",
        icon: <BsTruck/>
    },
    {
        id: 2,
        title: "Big Saving SHop",
        subtitle: "Save big every order",
        icon: <GiReceiveMoney/>
    },
    {
        id: 3,
        title: "Online Support 24/7",
        subtitle: "Support Online 24 hours a day",
        icon: <FiClock/>
    },
    {
        id: 4,
        title: "Money Back Return",
        subtitle: "Back guarantee under 7 days",
        icon: <MdOutlineAttachMoney/>
    },
    {
        id: 5,
        title: "Member Discount",
        subtitle: "On every order over $120.00",
        icon: <FiPercent/>
    }
]
export const homeList = [
    "Electronics 1",
    "Electronics 2",
    "Electronics 3",
    "Electronics 4",
    "Electronics 5",
    "Electronics 6",
    "Electronics 7",
    "Electronics 8",
    "Electronics 9",
    "Electronics 10",
]
export const productTypes = [
    {
        id: 1,
        title: "All Collection",
    },
    {
        id: 2,
        title: "Best Seller",
    },
    {
        id: 3,
        title: "Top Cheap Products",
    },
    {
        id: 4,
        title: "Laptops/Computer",
    },
    {
        id: 5,
        title: "Monitors",
    },
    {
        id: 6,
        title: "Phones",
    },
    {
        id: 7,
        title: "WiFi Router",
    },
    {
        id: 8,
        title: "Kids Gudgets",
    },
    {
        id: 9,
        title: "Eye-glasses",
    },
    {
        id: 10,
        title: "Headphones",
    },
    {
        id: 11,
        title: "iPads",
    },
    {
        id: 12,
        title: "Games",
    },
]
export const laptopscategories = [
    {
        id:1,
        title: "APPLE",
        brand: "APPLE"
    },
    {
        id:2,
        title: "HP",
        brand: "HP"
    },
    {
        id:3,
        title: "ASUS",
        brand: "ASUS"
    },
    {
        id:4,
        title: "ACER",
        brand: "ACER"
    },
    {
        id:5,
        title: "DELL",
        brand: "DELL"
    },
    {
        id:6,
        title: "SAMSUNG",
        brand: "SAMSUNG"
    },
    {
        id:7,
        title: "LENOVO",
        brand: "LENOVO"
    },
    {
        id:8,
        title: "Microsoft Surface",
        brand: "MICROSOFT"
    },
    {
        id:9,
        title: "Razer",
        brand: "RAZER"
    },
    {
        id:10,
        title: "MSI",
        brand: "MSI"
    },
]
export const laptops = [
    {
        id:1,
        brand: "APPLE",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: macbookm1,
        title: "MacBook Pro 13 M1",
        oldPrice: 1999.99,
        newPrice: 1899.99,
    },
    {
        id:2,
        brand: "APPLE",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: macbookair,
        title: "MacBook Air M2",
        oldPrice: 1399.99,
        newPrice: 1299.99,
    },
    {
        id:3,
        brand: "HP",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: hpelitebook,
        title: "HP Elitebook 16",
        oldPrice: 449.99,
        newPrice: 419.99,
    },
    {
        id:4,
        brand: "HP",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: hpelitebook,
        title: "HP Elitebook 16",
        oldPrice: 449.99,
        newPrice: 419.99,
    },
    {
        id:5,
        brand: "APPLE",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: macbookm1,
        title: "MacBook Pro 13 M1",
        oldPrice: 999.99,
        newPrice: 899.99,
    },
    {
        id:6,
        brand: "APPLE",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: macbookair,
        title: "MacBook Air M2",
        oldPrice: 399.99,
        newPrice: 299.99,
    },
    {
        id:7,
        brand: "HP",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: hpelitebook,
        title: "HP Elitebook 16",
        oldPrice:1449.9,
        newPrice:1419.9,
    },
    {
        id:8,
        brand: "HP",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: hpelitebook,
        title: "HP Elitebook 16",
        oldPrice: 449.99,
        newPrice: 419.99,
    },
    {
        id:9,
        brand: "ASUS",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: zenbook,
        title: "ASUS Zenbook Pro 14",
        oldPrice: 249.99,
        newPrice: 199.99,
    },
    {
        id:10,
        brand: "ASUS",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: zenbook,
        title: "ASUS Zenbook Pro 14",
        oldPrice: 249.99,
        newPrice: 199.99,
    },
    {
        id:11,
        brand: "ACER",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: aspire5,
        title: "ACER Aspire 5",
        oldPrice: 449.99,
        newPrice: 419.99,
    },
    {
        id:12,
        brand: "ACER",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: aspire5,
        title: "ACER Aspire 5",
        oldPrice: 449.99,
        newPrice: 419.99,
    },
  
]
export const mobilescategories = [
    {
        id:1,
        title: "APPLE",
        brand: "APPLE"
    },
    {
        id:2,
        title: "REDMI",
        brand: "REDMI"
    },
    {
        id:3,
        title: "SAMSUNG",
        brand: "SAMSUNG"
    },
    {
        id:4,
        title: "HUAWEI",
        brand: "HUAWEI"
    },
    {
        id:5,
        title: "POCO",
        brand: "POCO"
    },
    {
        id:6,
        title: "SONY",
        brand: "SONY"
    },
    {
        id:7,
        title: "NOKIA",
        brand: "NOKIA"
    },
    {
        id:8,
        title: "VIVO",
        brand: "VIVO"
    },
    {
        id:9,
        title: "ZTE",
        brand: "ZTE"
    },
    {
        id:10,
        title: "ALCATEL",
        brand: "ALCATEL"
    },
]
export const mobiles = [
    {
        id:1,
        brand: "APPLE",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: phone1,
        title: "iPhone 14 Pro Max",
        oldPrice: 1999.99,
        newPrice: 1919.99,
    },
    {
        id:2,
        brand: "APPLE",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: phone2,
        title: "iPhone 13 Pro Max",
        oldPrice: 1899.99,
        newPrice: 1819.99,
    },
    {
        id:3,
        brand: "SAMSUNG",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: phone3,
        title: "GALAXY S23",
        oldPrice: 1599.99,
        newPrice: 1499.99,
    },
    {
        id:4,
        brand: "SAMSUNG",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: phone4,
        title: "Galaxy A53",
        oldPrice: 499.99,
        newPrice: 449.99,
    },
    {
        id:5,
        brand: "REDMI",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: note12,
        title: "Redmi Note 12",
        oldPrice: 499.99,
        newPrice: 469.99,
    },
    {
        id:6,
        brand: "REDMI",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: note12,
        title: "Redmi Note 12",
        oldPrice: 499.99,
        newPrice: 469.99,
    },
    {
        id:7,
        brand: "HUAWEI",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: nova10,
        title: "Huawei Nova 10 Pro",
        oldPrice: 799.99,
        newPrice: 759.99,
    },
    {
        id:8,
        brand: "HUAWEI",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: nova10,
        title: "Huawei Nova 10 Pro",
        oldPrice: 799.99,
        newPrice: 759.99,
    },
    {
        id:9,
        brand: "POCO",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: pocof4,
        title: "POCO F4",
        oldPrice: 479.99,
        newPrice: 459.99,
    },
    {
        id:10,
        brand: "POCO",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: pocof4,
        title: "POCO F4",
        oldPrice: 479.99,
        newPrice: 459.99,
    },
  
  
]
export const tvcategories = [
    {
        id:1,
        title: "Artel",
        brand: "ARTEL"
    },
    {
        id:2,
        title: "Samsung",
        brand: "SAMSUNG"
    },
    {
        id:3,
        title: "LG",
        brand: "LG"
    },
    {
        id:4,
        title: "SONY",
        brand: "SONY"
    },
    {
        id:5,
        title: "VIZIO",
        brand: "VIZIO"
    },
    {
        id:6,
        title: "Hisense",
        brand: "HISENSE"
    },
    {
        id:7,
        title: "Panasonic",
        brand: "PANASONIC"
    },
    {
        id:8,
        title: "Shivaki",
        brand: "SHIVAKI"
    },
]
export const tvs = [
    {
        id:1,
        brand: "ARTEL",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: tv1,
        title: "Artel TV A75",
        oldPrice: 259.99,
        newPrice: 239.99,
    },
    {
        id:2,
        brand: "ARTEL",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: tv2,
        title: "Artel TV A32",
        oldPrice: 199.99,
        newPrice: 189.99,
    },
    {
        id:3,
        brand: "SAMSUNG",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: tv3,
        title: "Samsung QE75",
        oldPrice: 1999.99,
        newPrice: 1959.99,
    },
    {
        id:4,
        brand: "SAMSUNG",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: tv4,
        title: "Samsung QE50",
        oldPrice: 549.99,
        newPrice: 519.99,
    },
    {
        id:5,
        brand: "ARTEL",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: tv1,
        title: "Artel TV A75",
        oldPrice: 259.99,
        newPrice: 239.99,
    },
    {
        id:6,
        brand: "ARTEL",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: tv2,
        title: "Artel TV A32",
        oldPrice: 199.99,
        newPrice: 189.99,
    },
    {
        id:7,
        brand: "SAMSUNG",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: tv3,
        title: "Samsung QE75",
        oldPrice: 1999.99,
        newPrice: 1959.99,
    },
    {
        id:8,
        brand: "SAMSUNG",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: tv4,
        title: "Samsung QE50",
        oldPrice: 549.99,
        newPrice: 519.99,
    },
    {
        id:9,
        brand: "LG",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: lg32,
        title: "LG 32LN5700",
        oldPrice: 349.99,
        newPrice: 319.99,
    },
    {
        id:10,
        brand: "LG",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: lg32,
        title: "LG 32LN5700",
        oldPrice: 349.99,
        newPrice: 319.99,
    },
  
]
export const headphonescategories = [
    {
        id:1,
        title: "BOSE",
        brand: "BOSE"
    },
    {
        id:2,
        title: "SONY",
        brand: "SONY"
    },
    {
        id:3,
        title: "APPLE",
        brand: "APPLE"
    },
    {
        id:4,
        title: "SENNHEISER",
        brand: "SENNHEISER"
    },
    {
        id:5,
        title: "JBL",
        brand: "JBL"
    },
    {
        id:6,
        title: "BEATS",
        brand: "BEATS"
    },
    {
        id:7,
        title: "JABRA",
        brand: "JABRA"
    },
]
export const headphones = [
    {
        id:1,
        brand: "JABRA",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: h1,
        title: "Jabra Elite 45h",
        oldPrice: 87.99,
        newPrice: 84.99,
    },
    {
        id:2,
        brand: "JABRA",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: h2,
        title: "Jabra Evolve2 65",
        oldPrice: 899.99,
        newPrice: 859.99,
    },
    {
        id:3,
        brand: "BOSE",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: h3,
        title: "Bose 700 Noise",
        oldPrice: 349.99,
        newPrice: 319.99,
    },
    {
        id:4,
        brand: "BOSE",
        stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        img: h4,
        title: "Bose QuietComfort 45",
        oldPrice: 379.99,
        newPrice: 339.99,
    },
  
]
export default features