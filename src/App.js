import './App.css';
import QuestionSection from './components/QuestionSection';
import star from "./images/icon-star.svg";

const questions = [
  {
    id: 1,
    q: "What is Frontend Mentor, and how will it help me?",
    a: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  }, 
  {
    id: 2,
    q: 'Is Frontend Mentor free?',
    a: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    id: 3,
    q: 'Can I use Frontend Mentor projects in my portfolio?',
    a:"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  }, 
  {
    id: 4,
    q: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    a:"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  }
];

function createQuestion(questionObject) {
  return <QuestionSection key={questionObject.id} questionID={questionObject.id} question={questionObject.q} answer={questionObject.a}/>;
}
function App() {
  return (
    <div>
        <div className="white-div">

        <h1 className="heading"> <img src={star} /> FAQs</h1>

      
      {questions.map(createQuestion)}
    </div>
          <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Rana Hafez (2024)</a>.
    </div>
    </div>


  );
}

export default App;
