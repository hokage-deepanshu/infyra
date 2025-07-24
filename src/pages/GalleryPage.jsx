// src/pages/GalleryPage.jsx

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './GalleryPage.css'; // सुनिश्चित करें कि इस CSS फ़ाइल में नया स्लाइड शो कोड है

// --- डेटा परिभाषाएं ---
// !! सुनिश्चित करें कि ये सभी इमेज पाथ 'public' फोल्डर के अंदर सही जगह पर हैं !!

const topSlideshowData = [
    { image: '/V/8.png', title: 'GLOBAL IMPACT' },
    { image: '/V/8.png' , title: 'VISION OF TOMORROW' },
    { image: '/V/9.png', title: 'ENGINEERING EXCELLENCE' }
];

const gridData = [
    { image: '/gallery/grid-4.png', desc: 'INFYRA INNOVATIONS LLP' },
    { image: '/gallery/grid-2.jpg', desc: 'Anveshan NorthZone Winner Jan-2024.' },
    { image: '/gallery/grid-9.jpg', desc: 'Conceptualizing the future of Agri-Tech.' },
    { image: '/gallery/grid-5.jpg', desc: 'Anveshan National Level at University of Mumbai.' },
    { image: '/gallery/grid-13.png', desc: 'INFYRA INNOVATIONS LLP' },
    { image: '/gallery/grid-6.jpg', desc: 'Part of the roundtable discussionofMSME Sammelan at Lucknow April 2024.' },
    { image: '/gallery/grid-7.jpg', desc: 'Participated in 5 daysIDEBootcamp at Vishakhapatnam' },
    { image: '/gallery/grid-8.jpg', desc: 'Winners in IEEE EventatGalgotias University October 2024' },
    { image: '/gallery/grid-13.png', desc: 'INFYRA INNOVATIONS LLP' },
    { image: '/gallery/4.jpg', desc: 'Conceptualizing the future of Agri-Tech.' },
    { image: '/gallery/5.jpg', desc: 'Conceptualizing the future of Agri-Tech.' },
    { image: '/gallery/grid-3.jpg', desc: 'Participated in 5 daysIDEBootcamp at Vishakhapatnam' },
    { image: '/gallery/grid-4.png', desc: 'INFYRA INNOVATIONS LLP' },
    { image: '/gallery/3.jpg', desc: 'Conceptualizing the future of Agri-Tech.' },
    { image: '/gallery/grid-1.jpg', desc: 'INFYRA INNOVATIONS LLP' },
    { image: '/gallery/grid-10.jpg', desc: 'INFYRA INNOVATIONS LLP' },
];

const bottomSlideshowData = [
    { image: '/kisandrishti.png', title: 'Kisan Drishti' , description: 'India’s most advanced Agri-IoT & AI platform. Fetches 19+ real-time field data points and delivers smart decisions using LLMs and CNN-based crop detection.' },
    { image: '/slide-2.png', title: 'Project OctaEye' , description: 'Drone Vision System Advanced multi-spectral drone + computer vision integration. Enables weed detection, pest analysis, and crop stress monitoring via aerial AI.' },
    { image: '/slide-3.jpg', title: ' Autonomous Waypoint Navigation', description: ' Smart Drone RoutingAI-enabled drone flight planning system with autonomous path mapping, GPS sync, obstacle avoidance, and real-time re-routing for efficient spraying and mapping missions.' },
    { image: '/slide-44.png', title: 'DrishtiScan™' , description: 'Portable Disease & Soil AnalyzerHandheld leaf + soil scanner with ML-based detection of diseases, NPK levels, and deficiency alerts. Connects directly to Kisan Drishti dashboard.' },
    { image: '/slide-5.png', title: 'Project Hydro ', description: 'Smart Irrigation Intelligence Integrates soil moisture, evapotranspiration, and weather prediction to recommend zone-wise irrigation schedules and conserve groundwater.' },
    { image: '/slide-6.png', title: 'Kisan Drishti App', description: 'Mobile app for farmers to monitor field health, receive alerts, and access real-time data on crops, soil, and weather. Connects seamlessly with Kisan Drishti IoT devices.' }
];

// ग्रिड कार्ड के लिए छोटा कंपोनेंट
const GridCard = ({ item, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
      <div ref={ref} className={`grid-item ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${(index % 3) * 150}ms` }}>
        <img src={item.image} alt={item.desc} className="grid-item-img" />
        <div className="grid-item-overlay">
          <p>{item.desc}</p>
        </div>
      </div>
    );
};

const GalleryPage = () => {
    const [topSlideIndex, setTopSlideIndex] = useState(0);
    const [bottomSlideIndex, setBottomSlideIndex] = useState(0);

    // टॉप स्लाइड शो के लिए useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setTopSlideIndex((prevIndex) => (prevIndex + 1) % topSlideshowData.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [topSlideIndex]);
    
    // बॉटम स्लाइड शो के लिए नेविगेशन फंक्शन
    const handleNext = () => setBottomSlideIndex((prev) => (prev + 1) % bottomSlideshowData.length);
    const handlePrev = () => setBottomSlideIndex((prev) => (prev - 1 + bottomSlideshowData.length) % bottomSlideshowData.length);

    return (
        <div className="gallery-page-container">
            <Navbar />

            <main>
                {/* --- 1. Top Cinematic Slideshow --- */}
                <section className="top-slideshow">
                    {topSlideshowData.map((slide, index) => (
                        <div key={index} className={`top-slide ${index === topSlideIndex ? 'active' : ''}`}>
                            <div className="top-slide-bg" style={{ backgroundImage: `url(${slide.image})` }}></div>
                            <div className="top-slide-content">
                               <h1>{slide.title}</h1>
                            </div>
                        </div>
                    ))}
                </section>
                
                {/* --- 2. Masonry Grid Showcase --- */}
                <section className="grid-showcase">
                    <div className="section-header">
                        <h2>Our Journey in Frames</h2>
                        <p>A curated collection of our projects, people, and progress.</p>
                    </div>
                    <div className="image-grid">
                        {gridData.map((item, index) => (
                           <GridCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </section>

                {/* --- 3. Simple Slideshow (नया वाला) --- */}
                <section className="bottom-slideshow-section">
                    <div className="section-header">
                        <h2>Technology Spotlight</h2>
                        <p>An interactive look at our core products and innovations.</p>
                    </div>
                    <div className="simple-slideshow-container">
                        <div className="slideshow-wrapper" style={{ transform: `translateX(-${bottomSlideIndex * 100}%)` }}>
                            {bottomSlideshowData.map((slide, index) => (
                                <div className="slide-item" key={index}>
                                    <img className="slide-image" src={slide.image} alt={slide.title} />
                                    <div className="slide-content">
                                        <h3>{slide.title}</h3>
                                        <p>{slide.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="slideshow-nav prev" onClick={handlePrev}>❮</button>
                        <button className="slideshow-nav next" onClick={handleNext}>❯</button>
                        <div className="slideshow-dots">
                            {bottomSlideshowData.map((_, index) => (
                                <div
                                    key={index}
                                    className={`dot ${bottomSlideIndex === index ? 'active' : ''}`}
                                    onClick={() => setBottomSlideIndex(index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default GalleryPage;