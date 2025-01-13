import "../scss/headerFooter.scss";

import visa_img from "../assets/imgs/footervisa.png";

function Footer() {
  return (
    <div className="footer m-0 pt-4 pb-2">
      <div className="d-flex justify-content-between container p-0">
        <div className="leftItem">
          <h3 className="d-inline">SHOP</h3>
          <h3 className="d-inline joy">JOY</h3>
          <p className=" w-25">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
            expedita!
          </p>
        </div>
        <div className="row m-0 rightItem">
          <div className="col">
            <p>Category</p>
            <ul>
              <li>{`Men's Clothing`}</li>
              <li>{`Women's Clothing`}</li>
              <li>Jewelery</li>
              <li>Electronics</li>
            </ul>
          </div>
          <div className="col">
            <p>Support</p>
            <ul>
              <li>Help & Support</li>
              <li>Tearms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between border-top">
        <p className="m-0 py-2">@ 2024 SHOPJOY. All rights reverved</p>
        <img src={visa_img} alt="visa" className=" object-fit-contain" />
      </div>
    </div>
  );
}

export default Footer;
