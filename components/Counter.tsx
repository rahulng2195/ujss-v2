'use client';

import Image from 'next/image';

export default function Counter() {
  const stats = [
    { value: '10 Years', label: 'GLORIOUS YEARS' },
    { value: '100%', label: 'SATISFACTION RATE' },
    { value: '70+', label: 'TEAM MEMBERS' },
    { value: '25+', label: 'SENIOR SCIENTIST' }
  ];

  return (
    <div className="counter-area-two pt-100">
      <div className="container">
        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-sm-6 col-md-3">
              <div className="counter-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="counter-shape-top">
        <img src="/assets/img/counter/counter-shape.png" alt="Shape"/>
      </div>
    </div>
  );
}
