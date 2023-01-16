import './App.css';
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from 'react';
import img1 from "../src/images/aparecida.jpg"
import img2 from "../src/images/bonito.jpg"
import img3 from "../src/images/cristo-redentor.jpg"
import img4 from "../src/images/beto.jpg"

const images = [
        { 
            "img": img1,
            "label": "Santuário Nacional de Nossa Senhora Aparecida"
        },
        { 
            "img": img2,
            "label": "Bonito"
        },
        { 
            "img": img3,
            "label": "Cristo Redentor"
        },
        { 
            "img": img4,
            "label": "Beto Carrero World"
        }
    ];

function App() {
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, []);

  return (
    <div className="App">
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
            <motion.div 
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                initial={{ x: 150}}
                animate={{ x: 0}}
                transition={{duration: 0.6}}
            >
                {images.map(image => (
                    <motion.div className="item" key={image.img}>
                        <img src={image.img} alt="Alt" />
                        <h2>{ image.label} </h2>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </div>
  );
}

export default App;
