//      File: Header.tsx
// Written by Daniil <0xTwelve> Ermolaev. 

import Spacer from 'react-spacer';

import hashtagIco from '../../assets/Icons/Group 1.svg';
import myAccountIco from '../../assets/Icons/User.svg';
import myAccountOutlineIco from '../../assets/Icons/User outline.svg';

export default function Header(props: any) {
    return (
        <div style={{ display: 'flex', gap: '8px', paddingTop: '16px', paddingLeft: '16px', paddingRight: '16px' }}>
            <img src={ hashtagIco } alt="" onClick={ event => props.handleClick(0) }/>
            <p style={{ fontFamily: 'Onest-Bold', fontSize: '22px' }}>CodeMates</p>
            
            <Spacer grow='1'/>

            <button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={ event => props.handleClick(3) }>
                <img src={ props.currentPageIndex == 3 ? myAccountIco : myAccountOutlineIco } alt="" />
            </button>
        </div>
    );
}