import { FC, useState, useEffect } from 'react';

import './style.scss';


interface IProps {
    list: string[],
    setState: (value:string) => void;
    title: string,
    state: string
}

const Select:FC<IProps> = ({list, setState, state, title}) => {

    const [isShow, setIsShow] = useState<boolean>(false);
    
    const handleClickButton = (title: string) => {
        setIsShow(false);
        setState(title)
    } 

    

    return (
        <div className="select">  
            <p className="select__title"> 
                {title}: <span onClick={() => setIsShow(prev => !prev)}>{state}</span>  
            </p>
            <div className={`select__list ${isShow ? 'show' : ''}`}>
                {
                    list.map(item => (
                        <button 
                            type='button'
                            key={item}
                            className={item === state ? 'active' : ''}
                            onClick={() => handleClickButton(item)}
                        >{item}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default Select;