// import './App.css';
// import { useEffect, useState } from "react";
//
// const data = ['Specialist', 'Dentist', 'OB-GYNs', 'dermatologists'];
//
// function App() {
//     const [currentSpecialist, setCurrentSpecialist] = useState(data[0]);
//     const [currentIndex, setCurrentIndex] = useState(0);
//
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
//             const nextSpecialist = data[currentIndex];
//             setCurrentSpecialist(nextSpecialist);
//
//             // Trigger the ease-in animation by removing and reapplying the CSS class
//             const contentElement = document.getElementById("content");
//             contentElement.classList.remove("animate-out");
//             contentElement.classList.remove("animate");
//             setTimeout(() => {
//                 contentElement.classList.add("animate");
//             }, 10);
//
//             // After a delay, trigger the ease-out animation
//             setTimeout(() => {
//                 contentElement.classList.add("animate-out");
//             }, 1500);
//         }, 2000);
//
//         return () => clearInterval(intervalId);
//     }, [currentIndex]);
//
//     return (
//         <div className="App">
//             <div id="content" className="animate">{currentSpecialist}</div>
//         </div>
//     );
// }
//
// export default App;

import './App.css';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from './assets/images.png'

const data = ['Specialist', 'Dentist', 'OB-GYNs', 'dermatologists'];

const transition = {
    duration: 1, // Animation duration for entry
};

function App() {
    const [currentSpecialist, setCurrentSpecialist] = useState(data[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
            setCurrentSpecialist(data[currentIndex]);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className="App">
            <AnimatePresence mode={"wait"}>
                <motion.div
                    key={currentSpecialist}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={transition}
                >
                    {currentSpecialist}
                </motion.div>
            </AnimatePresence>
            <div className={'card'}>
               <div className={'wrapper'}>
                   <div className='image-wrapper'>
                       <img width={50} height={50}
                            src={image}
                            alt={'adsfsdf'}/>
                   </div>
                   <div className={'text'}>
                       <div className={'heading'}>Neurology Services</div>
                       <div className={'description'}>
                           Egestas tellus nunc proin amet tellus
                           tincidunt lacus consequat. Ultrices
                       </div>
                       <button>Hello</button>
                   </div>
               </div>
            </div>
        </div>
    );
}

export default App;

