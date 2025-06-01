import React, { useState, useCallback, useEffect } from "react";
import {
  Award,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import certification logos
import awsDevLogo from "../assets/certifications_logo/AWS_Developer.png";
import metaFrontendLogo from "../assets/certifications_logo/meta_frontend_dev.png";
import jiraLogo from "../assets/certifications_logo/atlassian_jira.png";
import sfPd2Logo from "../assets/certifications_logo/salesforce_platform_developer_II.png";
import sfPd1Logo from "../assets/certifications_logo/salesfoece_platform_developer_I.png";
import sfAdminLogo from "../assets/certifications_logo/salesforce_administrator.png";

interface Certificate {
  title: string;
  organization: string;
  credentials: string;
  issueDate: string;
  expiryDate: string;
  description: string;
  logo: string;
}

const certificates: Certificate[] = [
  {
    title: "AWS Certified Developer - Associate",
    organization: "Amazon Web Services",
    credentials: "AWS-DVA-C02",
    issueDate: "January 2024",
    expiryDate: "January 2027",
    description:
      "Expertise in developing and maintaining applications on AWS. Proficient in writing, deploying, and debugging cloud-based applications using AWS services, CI/CD pipelines, and serverless architectures. Skilled in implementing security best practices and optimizing application performance.",
    logo: awsDevLogo,
  },
  {
    title: "Meta Certified Frontend Developer",
    organization: "Meta",
    credentials: "MFE-001",
    issueDate: "February 2024",
    expiryDate: "February 2026",
    description:
      "Advanced proficiency in frontend development using React and related technologies. Expertise in building responsive, accessible, and performant web applications following Meta's best practices and design principles.",
    logo: metaFrontendLogo,
  },
  {
    title: "Atlassian Jira Certification",
    organization: "Atlassian",
    credentials: "AJC-001",
    issueDate: "January 2024",
    expiryDate: "January 2026",
    description:
      "Demonstrated expertise in Jira administration and project management. Proficient in configuring and optimizing Jira workflows, managing user permissions, and implementing agile methodologies using Jira's features.",
    logo: jiraLogo,
  },
  {
    title: "Salesforce Certified Platform Developer II",
    organization: "Salesforce",
    credentials: "SF-PD2-001",
    issueDate: "February 2024",
    expiryDate: "February 2026",
    description:
      "Advanced expertise in developing complex applications on the Salesforce platform. Mastery in Apex programming, Lightning components, integration patterns, and large-scale application architecture. Skilled in implementing advanced security measures and optimizing application performance.",
    logo: sfPd2Logo,
  },
  {
    title: "Salesforce Certified Platform Developer I",
    organization: "Salesforce",
    credentials: "SF-PD1-001",
    issueDate: "December 2023",
    expiryDate: "December 2025",
    description:
      "Expertise in developing custom applications on the Salesforce platform using Apex and Visualforce. Skilled in building scalable solutions following best practices and implementing efficient data models.",
    logo: sfPd1Logo,
  },
  {
    title: "Salesforce Certified Administrator",
    organization: "Salesforce",
    credentials: "SF-ADM-001",
    issueDate: "November 2023",
    expiryDate: "November 2025",
    description:
      "Proficient in managing and configuring Salesforce organizations. Expert in user administration, security controls, data management, and workflow automation. Skilled in customizing the platform to meet business requirements and optimize user experience.",
    logo: sfAdminLogo,
  },
];

const Certificates = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  // Create autoplay plugin with stop on hover
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };

  const [autoplayRef] = useState(() => Autoplay(autoplayOptions));

  // Update visible slides based on screen size
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, []);

  // Calculate number of frames
  const numberOfFrames = Math.ceil(certificates.length / visibleSlides);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      skipSnaps: false,
      dragFree: false,
      containScroll: "keepSnaps",
      startIndex: 0,
      duration: 30,
      watchDrag: false,
      slidesToScroll: 3,
      breakpoints: {
        "(max-width: 768px)": {
          slidesToScroll: 1,
          containScroll: "keepSnaps",
        },
        "(min-width: 769px) and (max-width: 1024px)": {
          slidesToScroll: 2,
          containScroll: "keepSnaps",
        },
      },
    },
    [autoplayRef]
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Handle hover state
  const handleMouseEnter = useCallback(() => {
    if (autoplayRef) autoplayRef.stop();
  }, [autoplayRef]);

  const handleMouseLeave = useCallback(() => {
    if (autoplayRef) autoplayRef.play();
  }, [autoplayRef]);

  return (
    <section id="certificates" className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 stagger-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Certifications
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my
            expertise
          </p>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-1 sm:px-4 md:px-12 lg:px-6">
          {/* Navigation Buttons */}
          <div
            className={`absolute -left-1 sm:left-0 md:left-2 lg:-left-7 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${
              prevBtnDisabled ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-gray-800 group disabled:hover:scale-100 disabled:hover:bg-white/90 dark:disabled:hover:bg-gray-800/90 disabled:hover:text-gray-600 dark:disabled:hover:text-gray-300"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          <div
            className={`absolute -right-1 sm:right-0 md:right-2 lg:-right-7 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${
              nextBtnDisabled ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-gray-800 group disabled:hover:scale-100 disabled:hover:bg-white/90 dark:disabled:hover:bg-gray-800/90 disabled:hover:text-gray-600 dark:disabled:hover:text-gray-300"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          <div className="overflow-hidden px-1 md:px-2" ref={emblaRef}>
            <div className="flex -mx-2 sm:-mx-3 md:-mx-4 lg:-mx-2">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="group flex-[0_0_calc(100%-1rem)] min-w-0 sm:flex-[0_0_calc(100%-1.5rem)] md:flex-[0_0_calc(50%-2rem)] lg:flex-[0_0_calc(33.333%-1rem)] relative bg-white dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 ease-out overflow-hidden hover:shadow-lg border border-gray-100 dark:border-gray-800 mx-2 sm:mx-3 md:mx-4 lg:mx-2 will-change-transform flex flex-col"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600" />

                  <div className="p-5 flex flex-col flex-1">
                    {/* Certificate Header - Logo and Organization */}
                    <div className="flex items-center gap-4 h-14">
                      <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={cert.logo}
                          alt={`${cert.organization} logo`}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-blue-500 text-sm font-medium truncate">
                          {cert.organization}
                        </p>
                      </div>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300 leading-snug mt-4 mb-6 min-h-[3rem] line-clamp-2">
                      {cert.title}
                    </h3>

                    {/* Certificate Details */}
                    <div className="mt-auto space-y-3">
                      {/* Dates */}
                      <div className="flex justify-between items-center text-sm px-1">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 min-h-[1.25rem]">
                          <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-xs whitespace-nowrap">
                            {cert.issueDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 min-h-[1.25rem]">
                          <Clock className="w-4 h-4 text-purple-500 flex-shrink-0" />
                          <span className="text-xs whitespace-nowrap">
                            {cert.expiryDate}
                          </span>
                        </div>
                      </div>

                      {/* Credential ID */}
                      <div className="flex items-center px-3 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg min-h-[2.25rem]">
                        <div className="flex items-center gap-2 w-full">
                          <Award className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="text-xs text-gray-600 dark:text-gray-400 truncate">
                            <span className="text-gray-400 dark:text-gray-500">
                              ID:{" "}
                            </span>
                            <span className="font-medium text-gray-900 dark:text-gray-300">
                              {cert.credentials}
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Verify Button */}
                      <button className="w-full px-4 py-2 text-xs font-medium text-center text-blue-500 hover:text-white border border-blue-500 rounded-lg hover:bg-blue-500 transition-all duration-300">
                        Verify Certificate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {[...Array(numberOfFrames)].map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index * visibleSlides)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  Math.floor(selectedIndex / visibleSlides) === index
                    ? "w-8 bg-gradient-to-r from-blue-500 to-purple-600"
                    : "w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-blue-300 dark:hover:bg-blue-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
