import React from "react"; 
import { useFormik } from "formik"; 

type Props = {}; 

export const Form = (props: Props) => { 
    const { handleChange, handleSubmit, values } = useFormik({ initialValues: { 
        email: "",
        title:"", 
        userName: "",
        age:13,
        moreInformation:"yes",
        feedback:""
    }, onSubmit: (values) => { 
        alert(JSON.stringify(values)); 
    }, 
    }); return ( 
        <form onSubmit={handleSubmit} >
            <div className="form"> 
                <label htmlFor="userName">Enter your name: </label>
                <input type="text" name="userName" value={values.userName} onChange={handleChange} id="name"  placeholder="Braulio Estrada" maxLength={20} required/> 
            </div>
            <div>
                <label htmlFor="email">Enter your email: </label>
                <input type="email" name="email" id="email" placeholder="braulio@estrada.com" value={values.email} onChange={handleChange} maxLength={50} required/>  
            </div>
            <div>
                <label htmlFor="age">Enter your age: </label>
                <input type="number" name="age" id="age" min="13" required value={values.age} onChange={handleChange}/>
            </div>
            <div className="form">
                <label htmlFor="title">Title:</label>
                        <select id="title" name="title" value={values.title} onChange={handleChange} required>
                            <option value="mr">Mr.</option>
                            <option value="mrs">Mrs.</option>
                            <option value="ms">Ms.</option>
                            <option value="miss">Miss</option>
                            <option value="">None</option>
                        </select>
            </div>
            <div className="form">
                <p>Do you want to recieve more surveys like this one later?</p>
                <input type="radio" id="yes" name="confirmation" value={values.moreInformation = "yes"} onChange={handleChange} required/>
                <label htmlFor="yes">Yes</label><br/>
                <input type="radio" id="no" name="confirmation" value={values.moreInformation = "no" } onChange={handleChange} required/>
                <label htmlFor="no">No</label><br/>
            </div>
            <div className="form">
                <label htmlFor="feedback">Your opinion is very important to us. We would appreciate if you want to leave us a comment (optional):</label><br/>
                <input type="text" name="feedback" id="feedback" maxLength={200} size={100} placeholder="Write your comments here :)" value={values.feedback} onChange={handleChange}/>

            </div>
            <div> 
                <button type="submit">Send info!!!!</button> 
            </div>
            
        </form>

    ); };