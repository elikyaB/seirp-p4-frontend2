import {useState} from "react";
import {useNavigate} from "react-router-dom"
import { loremIpsum } from "lorem-ipsum"

const Form = (props) => {

  const navigate = useNavigate()

  // The Form State
  const [formData, setFormData] = useState(props.initialNote)

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value)
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // HandleSubmit for when the form submited
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault()
    // pass the formData to the handleSubmit function passes as props
    props.handleSubmit(formData)
    //push user back to main page
    navigate("/")
  }

  // AutoFill for form body
  const autoFill = (event) => {
    event.preventDefault()
    setFormData({...formData, 
      body: formData.body+" "+loremIpsum()
    })
  }

  return <form className="Form" onSubmit={handleSubmission}>
    <h1>Title</h1>
    <input
      type="text"
      onChange={handleChange}
      value={formData.title}
      name="title"
    />
    <h2>Body</h2>
    <textarea className="FormBody"
      type="textarea"
      onChange={handleChange}
      value={formData.body}
      name="body"
      rows="4"
    />
    <br/>
    <div className="FormBtns">
      <input type="submit" value={props.buttonLabel} />
      <input type="button" value="Autofill" onClick={autoFill}/>
    </div>
  </form>
};

export default Form;