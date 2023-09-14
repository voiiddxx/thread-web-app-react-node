import  { useContext, useState } from 'react'
import "./Uploadprofile.css";
import axios from 'axios';
import { Authcontext } from '../../Contexts/Authcontext';
import { useNavigate } from 'react-router';

const Uploadprofile = () => {
    const {user , updateProfilepic} = useContext(Authcontext);
    
    console.log("profile",user);

    const [imagetoPost, setimagetoPost] = useState(null);
    let files = [];

   
    const uploadImage = async (e)=>{
        console.log(SelectedImage[0]);
        let formData = new FormData();
        formData.append("file" , SelectedImage[0]);
        formData.append("upload_preset" , "qouutdij");

        console.log(formData);

        axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formData , {
            onUploadProgress:(ProgressEvent)=>{
              console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
            }
          }).then(response=>{
         console.log(response.data.url);
         files.push(response.data.url);
         console.log(files);
         setimagetoPost(files);

          });

          alert(imagetoPost);
          console.log(imagetoPost);


        
    }
    
    const [SelectedImage, setSelectedImage] = useState(null);

    const navigate = useNavigate();
    const updateNow = async()=>{
        await updateProfilepic(imagetoPost[0]);
        navigate("/Profile")
        
    }

  return (
    
    <div className="profile-main">
    <div className="circle-avtar">
        <input type="file" hidden className='image' onChange={(e)=>{
            setSelectedImage(e.target.files)
        }} />
        {
        imagetoPost!=null ? <img src={imagetoPost} alt='hh' /> :<img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="company" /> 
        }
      
    </div>
    <div className="avtar-text">
        <p onClick={()=>{
            document.querySelector(".image").click()
        }} >Select Image</p>
        <p onClick={uploadImage} >Upload Now</p>
    </div>
    <div className="continue">
        <p onClick={updateNow} >Continue</p>
    </div>
    
   </div>
 
   
  )
}

export default Uploadprofile