import React, { Component } from "react";
import Title from "./Title";
import { IoIosBicycle, IoIosBed, IoMdKey, IoLogoEuro } from "react-icons/io";

export default class Services extends Component {
  constructor() {
    super();

    this.state = {
      services: [
        {
          icon: <IoMdKey />,
          title: "security",
          info: `The houses indicated are located within secure locations
                    We know safety is important hence the house displayed are ones considered to be in a safer part of town
                    So you dont worry about comig out late or going for that vacay`
        },
        {
          icon: <IoIosBicycle />,
          title: "transportation",
          info: `Want to come home late and not hav trouble finding your way back? 
                    We have considered the transportation and prevent from the headache as the house are in easily accessible locations`
        },
        {
          icon: <IoLogoEuro />,
          title: "market",
          info: `We need a place close to the shop,the mall, recreational centre well look no further 
          as we bring you houses that fit well within your class,diet and fun`
        },
        {
          icon: <IoIosBed />,
          title: "luxury and price",
          info: `It is all about that comfort , nice atmosphere, big rooms
          that breeze with less disturbance within the size of your pocket`
        }
      ]
    };
  }
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
