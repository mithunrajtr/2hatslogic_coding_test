import Gallary from "@/components/gallary";
import Header from "@/components/header";
import Image from "next/image";
// Icon
import star from "../public/assets/images/star.png";
import { FaPlay } from "react-icons/fa";
// Images
import img1 from "../public/assets/images/s1.png";
import img2 from "../public/assets/images/s2.png";
import img3 from "../public/assets/images/s3.png";

export default function Home() {
  return (
    <div className="home">
      <div className="row">
        <div className="col-12 col-lg-8 left px-0">
          <div className="main">
            <Header />
            <div className="content">
              <div className="title mb-3">
                <h1>LEARN GRAPHICS</h1>
                <h1>DESIGN FOR LIFE</h1>
              </div>
              <div className="star-icon icon-type-1">
                <Image src={star} width={34} height={34} alt="Star" />
              </div>
              <p>
                Stay Informed, Stay Ahead: Unveiling the Future of Technology,
                Gadgets, and Innovation
              </p>
              <p>
                Your Gateway to the Digital Universe - Where Innovation Meets
                Insight
              </p>
            </div>
            <div className="count mt-5">
              <div className="d-flex flex-wrap gap-5 align-items-center">
                <div>
                  <h4>5.1 K</h4>
                  <span>
                    Students All <br /> Over World
                  </span>
                </div>
                <div>
                  <Image
                    src={img1}
                    width={91}
                    height={91}
                    className="img-fluid"
                    alt="Student"
                  />
                  <Image
                    src={img2}
                    width={91}
                    height={91}
                    className="img-fluid"
                    alt="Student"
                  />
                  <Image
                    src={img3}
                    width={91}
                    height={91}
                    className="img-fluid"
                    alt="Student"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-4 mt-5">
              <button className="btn-type-1">Book Your Seats</button>
              <div className="d-flex align-items-center gap-3 journey">
                <div className="icon-type-1 d-flex align-items-center justify-content-center">
                  <FaPlay fill="white" size={25} />
                </div>
                <a href="/" className="link-type-1">
                  See Journey
                </a>
              </div>
            </div>
          </div>
          <div className="d-lg-none col-lg-4 right px-0">
            <div className="main gallery-box">
              <Gallary />
            </div>
          </div>
          <div className="summary mt-5">
            <div className="item">
              <span>6409</span>
              <br />
              <span>Succes Story</span>
            </div>
            <div className="item">
              <span>124</span>
              <br />
              <span>Expert Instructor</span>
            </div>
            <div className="item">
              <span>54.749</span>
              <br />
              <span>Hours Tutored</span>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-4 right px-0">
          <div className="main">
            <Gallary />
          </div>
        </div>
      </div>
    </div>
  );
}
