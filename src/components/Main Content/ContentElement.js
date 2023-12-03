import './ContentElement.css'

const ContentElement = (props) => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={props.data.img} alt="no img" className='row-img'
                                // стиль в jsx ( backgroundColor - это свойство, а props.data.backColor - это значение)
                                 style={{backgroundColor: props.data.backColor}}/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>{props.data.text}</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ContentElement;