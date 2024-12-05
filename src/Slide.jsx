import React, { useEffect, useState } from 'react';

const LoginCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Login',
      content: (
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      ),
    },
    {
      title: 'Sign Up',
      content: (
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      ),
    },
    {
      title: 'Forgot Password?',
      content: (
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Reset Password</button>
        </form>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
useEffect(()=>{

   const id= setInterval(()=>{
        nextSlide()
    },1000)
    return ()=>clearInterval(id)
})
  return (
    <div className="carousel-container">
      <div className="carousel">
        <h2>{slides[currentSlide].title}</h2>
        {slides[currentSlide].content}
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default LoginCarousel;
