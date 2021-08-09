import React, { useState } from 'react'

var slides=[
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/18/54f92461-1064-4c68-90cb-6af3ef196bf61626616397601-Main-Banner_western-wear_desktop.jpg',
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/18/65813e99-aba1-41be-9f9a-05007a98bde11626617527900-Ck_Desk_Banner.jpg',
            'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/18/982e4324-c1af-448c-8045-8f36c43b49ad1626617334563-Casual-Shirts_Desk.jpg',
            'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/18/bc0131ac-c24b-4e41-a89d-f8a0024c25221626617294044-Crocs_Desk.jpg']
            
function Carousel () {
    const [index, setIndex] = useState(0);
    const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((index) =>
          index === slides.length - 1 ? 0 : index + 1
        ),
      3500
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

    return (
        <>
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((image, index) => (
          <div className="slide"
            key={index}>
          <img src={image} style={{width:"100%"}} alt="myntra"/>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
      </>
    )
}

export default Carousel;