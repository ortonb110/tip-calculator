import peopleIcon from "../Assets/images/icon-person.svg";
import logo from "../Assets/images/logo.svg";
import currency from "../Assets/images/icon-dollar.svg";
import { useState, useEffect } from "react";

const MAIN = () => {
  const [amount, setAmount] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [numberOfpeople, setNumberOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const getAmountValue = (event) => {
    setAmount(event.target.value);
    
  };

  const getPercentage = (event) => {
    setPercentage(event.target.value);
  }

  


  useEffect(()=>
    {
        console.log(amount);
        console.log(percentage)
    },[amount,percentage]
  )

  return (
    <>
      <header className="text-center">
        <a href="../App.js" id="logo">
          <img
            src={logo}
            alt="Splitter Logo"
            aria-controls="logo"
            className="w-[8.7rem] h-[5.3rem] mx-auto mb-[8.8rem]"
          />
        </a>
      </header>
      <main className="py-10 px-12 bg-white rounded-[25px] w-screen lg:w-[92rem] drop-shadow-md">
        <div className="grid lg:grid-cols-2 gap-20">
          <section className="lg:span-col-1">
            <div className="flex flex-col mb-[4rem]">
              <label
                htmlFor="amount"
                className="text-[1.6rem] text-darkGrayishCyan mb-[0.6rem]"
                aria-controls="amount"
              >
                Bill
              </label>
              <div className="relative">
                <img src={currency} alt="" className="inputicon" />
                <input
                  type="number"
                  id="amount"
                  placeholder="0"
                  onChange={getAmountValue}
                  className="input focus:border-primaryColor focus:border-2 transition"
                />
              </div>
            </div>
            <div className="mb-[4rem]">
              <h3 className="text-[1.6rem] text-darkGrayishCyan mb-[0.6rem]">
                Select tip %
              </h3>
              <ul className="grid md:grid-cols-3 gap-5 mt-[1.6rem] grid-cols-2">
                <li className="span-col-1">
                  <button onClick={getPercentage} value="5" className="btn  btn-hover-active">5%</button>
                </li>
                <li className="span-col-1">
                  <button onClick={getPercentage} value="10" className="btn  btn-hover-active">10%</button>
                </li>
                <li className="span-col-1">
                  <button onClick={getPercentage} value="15" className="btn  btn-hover-active">15%</button>
                </li>
                <li className="span-col-1">
                  <button onClick={getPercentage} value="25" className="btn btn-hover-active ">25%</button>
                </li>
                <li className="span-col-1">
                  <button onClick={getPercentage} value="50" className="btn  btn-hover-active">50%</button>
                </li>
                <li className="span-col-1">
                  <input
                    type="number"
                    placeholder="Custom"
                    onChange={getPercentage}
                    className="input placeholder-darkGrayishCyan w-[11.7rem] rounded-md h-[4.8rem] focus:border-primaryColor focus:border-2 transition"
                  />{" "}
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="people"
                className="text-[1.6rem] text-darkGrayishCyan mb-[0.6rem]"
              >
                Number of People
              </label>

              <div className="relative">
                <img src={peopleIcon} alt="" className="inputicon" />
                <input
                  type="number"
                  id="people"
                  placeholder="0"
                  className="input focus:border-primaryColor focus:border-2 transition"
                />
              </div>
            </div>
          </section>
          <section className="lg:span-col-1 bg-veryDarkCyan rounded-3xl py-[3.5rem] px-[3.5rem]">
            <div className="text-white flex justify-between items-center">
              <p className="leading-[1.5rem] tracking-wide">
                <span className="block text-[1.6rem] ">Tip Amount</span>
                <span className="text-[1.3rem] text-grayishCyan">/ person</span>
              </p>
              <p className="text-primaryColor text-[4.8rem]">
                <span>$</span>
                <span>0.00</span>
              </p>
            </div>
            <div className="text-white flex justify-between items-center mt-[4.1rem]">
              <p className="leading-[1.5rem] tracking-wide">
                <span className="block text-[1.6rem] ">Total Amount</span>
                <span className="text-[1.3rem] text-grayishCyan">/ person</span>
              </p>
              <p className="text-primaryColor text-[4.8rem]">
                <span>$</span>
                <span>0.00</span>
              </p>
            </div>
            <button className="btn mt-[10rem] text-[2rem] bg-primaryColor uppercase w-full text-veryDarkCyan  transition hover:bg-veryLightGrayishCyan active:translate-y-1">
              reset
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default MAIN;
