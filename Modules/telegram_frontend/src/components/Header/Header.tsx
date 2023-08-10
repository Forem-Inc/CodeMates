//      File: Header.tsx
// Written by Daniil <0xTwelve> Ermolaev. 

import Spacer from 'react-spacer';

import hashtagIco from '../../assets/Icons/Group 1.svg';
import myAccountIco from '../../assets/Icons/User.svg';
import myAccountOutlineIco from '../../assets/Icons/User outline.svg';

export default function Header() {
    return (
        <div style={{ display: 'flex', gap: '8px', paddingTop: '16px', paddingLeft: '16px', paddingRight: '16px' }}>
            <img src={ hashtagIco } alt="" />
            <p style={{ fontFamily: 'Onest-Bold', fontSize: '22px' }}>CodeMates</p>
            <Spacer grow='1'/>

            <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                <img src={ myAccountIco } alt="" />

            </button>
        </div>
    );
}