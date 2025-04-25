"use client";

import { useRouter } from 'next/navigation';
import FakeBarLoader from "@/components/FakeBarLoader/FakeBarLoader";
import style from "./data-processing.module.scss";


export default function ReportPage() {

  const router = useRouter();

  const handleComplete = () => {
    router.push('/report');
  }

  return (
      <div className={style.dataProcessing}>
        <div className="light-bg">
        <h2>Scan is running</h2>
        <p>We are processing your data. This may take a few minutes.</p>
        <svg className={style.clock} version="1.1" id="L2" x="0px" y="0px"
          viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
          <circle fill="none" stroke="#fff" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48"/>
          <line fill="none" strokeLinecap="round" stroke="#fff" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
            <animateTransform 
                attributeName="transform" 
                dur="2s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite" />
          </line>
          <line fill="none" strokeLinecap="round" stroke="#fff" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
            <animateTransform 
                attributeName="transform" 
                dur="15s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite" />
          </line>
        </svg>
        <FakeBarLoader complete={handleComplete}/>
        </div>
      </div>
  );
}
