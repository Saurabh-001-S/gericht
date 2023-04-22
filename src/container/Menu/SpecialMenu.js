import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { images, data } from "../../constants";
import './SpecialMenu.css';

const SpecialMenu = () => (
    <div className='app__specialMenu flex__center  section__padding' id='menu'>
        <div className="app__speacialMenu-title">
            <SubHeading title="Menu That Fits You Palatte" />
            <h1 className="headtext__cormorant">Today's Special</h1>
        </div>
        <div className="app__specialMenu-menu flex__center">
            <div className='app__specialMenu-menu_wine'>
                <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
                <div className='app__specialMenu_menu_items'>
                    {data.wines.map((wine, index) => (
                        <MenuItem key={wine.title + index} title={wine.title} tags={wine.tags} price={wine.price} />
                    ))}
                </div>
            </div>

            <div className='app__specialMenu-menu_img'>
                <img src={images.menu} alt="menu" />
            </div>

            <div className='app__specialMenu-menu_cocktails'>
                <p className='app__specialMenu_menu_heading'>Cocktails</p>
                <div className='app__specialMenu_menu_items'>
                    {data.cocktails.map((cocktail, index) => (
                        <MenuItem key={cocktail.title + index} title={cocktail.title} tags={cocktail.tags} price={cocktail.price} />
                    ))}
                </div>
            </div>

        </div>
        <div style={{ marginTop: '15px' }}>
            <button type='button' className='custom__button'>Read More</button>
        </div>
    </div>
);

export default SpecialMenu;
