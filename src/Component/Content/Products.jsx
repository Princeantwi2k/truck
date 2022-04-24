import React, { useEffect } from "react";
import Project from "../Images/New Project.jpg";
import "./Project.css";
import New from "../Images/new1.jpg";
import New1 from "../Images/new.jpg";
import New2 from "../Images/new2.jpg";
import Aos from "aos";

const Products = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div>
        <img src={Project} alt="pic" className="d-block w-100 product-image " />
        <div className="project-div" data-aos="fade-right">
          <h1 className="project-name">Product</h1>
          <p className="project-para">
            {" "}
            Desined by Pure engineers and preferred all around the world, the
            profitability of PURE Trucks series will instanly impact your
            operating cost
          </p>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 row">
              <div className="col-sm-6 col-md-6">
                <img
                  src={New}
                  alt="pic"
                  className="d-block w-100 "
                  data-aos="fade-up"
                />
              </div>
              <div className="col-sm-6 col-md-6" id="tract" data-aos="fade-up">
                <h1 className="project-topic">Tractor Series</h1>
                <p className="project-para1">
                  Make Your Mark. Under the Heaviest Loads. The Pure Trucks
                  Tractor Series offers maximum performance, maximum savings,
                  and a powerful and comfortable companion for long-haul
                  experts.
                </p>
                <p className="details">DETAILS</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 row">
              <div className="col-sm-12 col-md-6">
                <img
                  src={New1}
                  alt="pic"
                  className="d-block w-100 "
                  data-aos="fade-up"
                />
              </div>
              <div className="col-sm-12 col-md-6" id="cos" data-aos="fade-up">
                <h1 className="project-topic">Constraction Series</h1>
                <p className="project-para1">
                  The Construction Business: Tough for Beginners. A breeze if
                  you have the power. For any construction project, you need a
                  sturdy companion: one that can handle the heaviest loads with
                  ease and adapt to any work site. From tippers to concrete
                  mixers and pumps, the Pure Trucks construction series offers a
                  range of trucks that you cannot do without
                </p>
                <p className="details">DETAILS</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 row">
              <div className="col-sm-12 col-md-6">
                <img
                  src={New2}
                  alt="pic"
                  className="d-block w-100 "
                  data-aos="fade-up"
                />
              </div>
              <div className="col-sm-12 col-md-6" id="road" data-aos="fade-up">
                <h1 className="project-topic">Road Series</h1>
                <p className="project-para1">
                  Power and Comfort. Making light of your load. The masters of
                  the long and winding road deserve the most powerful and
                  comfortable companion. Whether it’s a 4x2, 6x2 or 8x2, the
                  Pure Trucks Road Series offers endless options in road trucks
                </p>
                <p className="details">DETAILS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
