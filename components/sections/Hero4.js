import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Hero4() {
    return (
        <>
            <section className="hero-section-version4 position-relative">
               {/* Video Background                 <video autoPlay muted loop className="video-background">
                    <source src="/assets/img/banner/shorts.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Video Background */}
                <div className="container">
                    <div className="row g-5">
                        <div className="hero-v4-content position-relative pe-10">
                            <div className="d-flex align-items-sm-center align-items-end justify-content-between mb-xxl-7 mb-xl-5 mb-lg-4 mb-2">
                                <h1 className="white-clr text-capitalize">
                                    <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        <span className="italic">Your </span>Gateway
                                    </span>
                                    <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                                         to Growth <span className="italic">& Innovation</span>
                                    </span>
                                </h1>
                                <VideoPopup style={1} />
                            </div>
                            <div className="ringle-content" data-aos="zoom-in-up" data-aos-duration={1800} data-aos-delay={7}>
                                <p className="white-clr mb-xxl-5 mb-xl-3 mb-lg-3 mb-md-2 mb-1">
                                From web development and SEO to digital marketing, graphic design, and packaging services, we are committed to enhancing your brand's digital presence and driving your growth.
                                </p>
                                <Link href="/about" className="explore-more d-inline-flex align-items-center gap-1">
                                    Explore More
                                    <span className="rot60">
                                        <i className="fas fa-arrow-up" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Social */}
                <div className="spilit-socail d-flex align-items-center gap-xxl-16 gap-xl-10 gap-5">
                    <Link href="https://www.facebook.com/Oopsol12" target="_blank" className="fa-brands fa-facebook-f" />
                    <Link href="https://www.linkedin.com/company/oopsol/" target="_blank" className="fa-brands fa-linkedin" />
                    <Link href="https://wa.me/971568611897" target="_blank" className="fa-brands fa-whatsapp" />
                </div>
                {/* Social */}
                {/* Element */}
                <img src="/assets/img/element/cmn-dost.png" alt="img" className="hero-v4-element" />
                {/* Element */}
            </section>
        </>
    )
}
