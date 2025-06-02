import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = [
    "Full Stack Developer",
    "Software Engineer",
    "ReactJS Developer",
    "AWS Certified",
    "Salesforce Certified",
  ];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const { isDark } = useTheme();

  // Text animation with multiple titles
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Faster deletion, slower typing
    const delayBetweenTitles = 2000; // Delay before switching titles

    if (!isDeleting && displayText === currentTitle) {
      // Wait before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTitles);
    } else if (isDeleting && displayText === "") {
      // Move to next title
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      // Handle typing/deleting
      timeout = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentTitle.slice(0, prev.length + 1);
          }
        });
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  // Initialize particles
  const initParticles = () => {
    const particles: Particle[] = [];
    const numParticles = 60;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.5 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.4 + 0.6,
      });
    }

    return particles;
  };

  // Animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Initialize
    handleResize();
    particlesRef.current = initParticles();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.speedX += (dx / distance) * force * 0.02;
          particle.speedY += (dy / distance) * force * 0.02;
        }

        // Speed limit
        const maxSpeed = 2;
        const speed = Math.sqrt(
          particle.speedX * particle.speedX + particle.speedY * particle.speedY
        );
        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed;
          particle.speedY = (particle.speedY / speed) * maxSpeed;
        }

        // Add some friction
        particle.speedX *= 0.99;
        particle.speedY *= 0.99;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with theme-aware opacity
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        const particleOpacity = isDark
          ? particle.opacity * 0.9
          : particle.opacity * 1.4;
        ctx.fillStyle = `rgba(96, 165, 250, ${particleOpacity})`; // blue-400 color
        ctx.fill();

        // Draw connections with theme-aware opacity
        particlesRef.current.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const lineOpacity = isDark ? 0.35 : 0.4;
            ctx.strokeStyle = `rgba(96, 165, 250, ${
              lineOpacity * (1 - distance / 120)
            })`;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark]); // Added isDark to dependencies

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black px-4 sm:px-6 lg:px-8"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gray-500/3 dark:bg-gray-500/8 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-blue-500/3 dark:bg-blue-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 w-full max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white whitespace-nowrap px-2 sm:px-4">
            Sai Neelkanth Chary
          </h1>
        </div>

        <div className="h-12 sm:h-16 md:h-20 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 font-light min-h-[1.5em]">
            {displayText}
            <span className="animate-blink">|</span>
          </h2>
        </div>

        <div className="animate-fade-in-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4">
            Crafting digital experiences with precision and elegance.
            Specializing in modern web technologies and innovative solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-right px-4">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base" onClick={()=> window.open('https://www.github.com/saineelofficial', '_blank')}>
            View My Work
          </button>
          <button onClick={() =>{
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 text-sm sm:text-base">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gray-500 dark:bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
