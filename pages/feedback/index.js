import React from 'react'
import { buildFeedbackPath, extractFeedback } from '../api/feedback'

const Feedback = (props) => {
    console.log(props);
  return (
    <ul>
        {props.feedbackItems.map((item) => (
            <li key={item.id}>{item.feedback}</li>
        ))}
    </ul>
  )
}

export async function getStaticProps(){
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    console.log(data);

    return {
        props:{
            feedbackItems: data
        }
    }
}

export default Feedback