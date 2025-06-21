// Images
import img1 from "../public/assets/images/1.png";
import img2 from "../public/assets/images/2.png";
import img3 from "../public/assets/images/3.png";
import img4 from "../public/assets/images/4.png";
import img5 from "../public/assets/images/5.png";
import img6 from "../public/assets/images/6.png";
import Image from "next/image";

const Gallary = () => {
  return (
    <div className="grid">
      <div className="img-fluid">
        <Image
          width={300}
          height={300}
          src={img1}
          alt="User"
          className="img-fluid"
        />
      </div>
      <div className="img-fluid">
        <Image
          width={300}
          height={300}
          src={img2}
          alt="User"
          className="img-fluid"
        />
      </div>
      <div className="img-fluid">
        <Image
          width={300}
          height={300}
          src={img3}
          alt="User"
          className="img-fluid"
        />
      </div>
      <div className="img-fluid">
        <Image
          width={300}
          height={300}
          src={img4}
          alt="User"
          className="img-fluid"
        />
      </div>
      <div className="img-fluid">
        <Image
          width={300}
          height={300}
          src={img5}
          alt="User"
          className="img-fluid"
        />
      </div>
      <div className="img-fluid">
        <Image
          width={300}
          height={300}
          src={img6}
          alt="User"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Gallary;
