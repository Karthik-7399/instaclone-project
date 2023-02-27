import "./Form.css";

 function Form(){
    return (
        <>
        <div className='mainbox2'>
            <form action='#' method ='post'>
                <input id='first' type='file' placeholder='No file chosen' accept= 'image/png,image/jpeg,image/jpg'/>
                <br></br>
                <input id='second' type='text' placeholder='Author'/>
                <input id='third' type='text' placeholder='Location'/>
                <br></br>
                <input id='fourth' type='text' placeholder='Description'/>
                <br></br>
                <button id='post'>Post</button>

            </form>
            
        </div>
        </>
    )
}
export default Form;