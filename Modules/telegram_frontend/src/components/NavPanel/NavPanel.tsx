import CardsIco from '../../assets/Icons/Cards.svg';
import LikesIco from '../../assets/Icons/Like.svg';
import TopicsIco from '../../assets/Icons/Selection.svg';

// Wrap all buttons at one style.
function DockbarButtonWrapper(props: any) {
    return (
        <button style={{ border: 'none', backgroundColor: props.currentIndex === props.index ? '#E9DFEF' : 'transparent', width: '72px', height: '48px', borderRadius: '36px'}}
                onClick={event => (props.handleClick(props.index), console.log("clicked", props.currentIndex))}>
            <img src={props.ico} style={{filter: props.currentIndex === props.index ? 'invert(76%) sepia(82%) saturate(6478%) hue-rotate(257deg) brightness(81%) contrast(82%)' : 'invert(31%) sepia(10%) saturate(14%) hue-rotate(348deg) brightness(99%) contrast(79%)'}} alt="" />
        </button>
    );
}

// Developers Card Switcher
export function CaruselButton(props: any) {
    return (
        <DockbarButtonWrapper index={0} handleClick={props.handleClick} currentIndex={props.currentIndex} ico={ CardsIco }/>
    );
}

// Content with categories
export function TopicsButton(props: any) {
    return (
        <DockbarButtonWrapper index={1} handleClick={props.handleClick} currentIndex={props.currentIndex} ico={ TopicsIco }/>
    );
}

// To content with all likes
export function LikesButton(props: any) {
    return (
        <DockbarButtonWrapper index={2} handleClick={props.handleClick} currentIndex={props.currentIndex} ico={ LikesIco }/>
    );
}

export default function NavPanel(props: any) {
    return (
        <div style={{ width: '100%', marginBottom: '16px', marginTop: '16px',display: 'flex', justifyContent: 'center', gap: '15%'}}>
            <CaruselButton handleClick={props.handleClick} currentIndex={props.currentPageIndex}/>
            <TopicsButton handleClick={props.handleClick} currentIndex={props.currentPageIndex}/>
            <LikesButton handleClick={props.handleClick} currentIndex={props.currentPageIndex}/>
        </div>
    );
}