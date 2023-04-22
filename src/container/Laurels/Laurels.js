import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from "../../constants";
import BigLogo from "./Logo.svg";
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className='app__laurels_awards-card'>
        <img src={imgUrl} alt="Images" />
        <div className="app__laurels_awards-card_content">
            <p className="p__cormorant" style={{ color: '#DCCA87' }} >{title}</p>
            <p className="p__cormorant">{subtitle}</p>
        </div>
    </div>
)

const Laurels = () => (
    <div className='app__bg app__wrapper section__padding' id='award'>
        <div className="app__laurels_info">
            <div className="app__laurels-logo_img">
                <img src={BigLogo} alt="BigLogo" />
            </div>
            <div className="app__wrapper_info section__margin">

                <SubHeading title="Awards & recognition" />
                <h1 className="headtext__cormorant">Our Laurels</h1>

                <div className="app__laurels_awards">
                    {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
                </div>
            </div>
        </div>

        <div className="app__wrapper_img" style={{ marginTop: '2rem ' }}>
            <img src={images.laurels} alt="Laurels" />
        </div>

    </div>
);

export default Laurels;