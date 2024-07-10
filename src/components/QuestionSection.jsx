import React, {useState} from 'react';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';

function QuestionSection(props) {
    const [isCollapsed, setIsCollapse] = useState(props.questionID === 1? false: true);

    function toggleCollapse() {
        setIsCollapse(prevState => !prevState);
    }

    return (
        <div>
            <div className='question-box'>
               <p className='question-style'>{props.question}</p>
               <img 
                 className="collapse-btn" 
                 src={isCollapsed? plus: minus} 
                 onClick={toggleCollapse}/>
            </div>
            
            <div>
            <p className='answer-style' style={{display: isCollapsed?'none': 'block'}}>{props.answer}</p>
            </div>
            {props.questionID !== 4 && <hr className='styled-hr' />} 
        </div>
    );
}

export default QuestionSection;