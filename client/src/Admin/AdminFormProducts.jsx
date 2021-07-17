import React,{Fragment,useEffect,useState} from 'react'
import AdminNav from './AdminNav';
import axios from 'axios'


const AdminFormProducts = (props) => {
    // const [error, errorMessage] = useState('');
    
    const [ formData,setFormData ] = useState({
            title:'',
            file:'',
            description:'',
            availableSizes:'',
            price:''
    })
    const { title, file, description, availableSizes, price } = formData;

    const onChange = (e) => {
       const newData = {...formData};
       newData[e.target.name] = e.target.value;
       setFormData(newData)
    }
    useEffect(() => {
        // props.fetchOrder();
        // props.fetchProducts();  
        // eslint-disable-next-line react-hooks/exhaustive-deps   
    },[])

     


    const addProducts = async (e) => {
        e.preventDefault();
      
        await axios.post(`http://localhost:5000/api/products`,{
            title: formData.title,
            image: formData.file,
            description: formData.description,
            availableSizes: [formData.availableSizes],
            price: parseFloat(formData.price)
        })
        .then(res=>{
            console.log(res.data);
            // window.location.reload;
        })
        .catch(error=> console.error('Error:',error))
    }
    return (
        <Fragment>
            <div>
                <AdminNav />
            </div>
            
                   <div className='w-full my-8 p-2'>
                     <form className='sm:w-1/2 w-full ml-auto  text-gray-700 mr-auto font-nexa border border-gray-200 p-8' onSubmit={(e)=>addProducts(e)}>
                         <div className='font-bold text-center py-2'>
                             Add Products
                         </div>
                         <div>
                             <label>Title:</label><br></br>
                             <input type='text' name="title" value={title}  className='border w-full focus:outline-none py-1 rounded' onChange={(e)=>onChange(e)} required/>
                             <span></span>
                         </div>
                         
                         
                         <div class="my-4">
                        <label class="mb-1 block text-sm font-medium text-gray-800" for="view_model_avatar">
                        Upload a profile picture
                        </label>
                        <div class="relative">
                        <input
                            class="border-gray-200 focus:ring-red-600 block w-full overflow-hidden cursor-pointer border text-gray-800 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent"
                            aria-describedby="view_model_avatar_help" id="view_model_avatar" name="view_model[avatar]" onChange={(e)=>onChange(e)} value={file} type="file"
                         />
                       
                        </div>
                        <div class="mt-1 text-sm text-gray-500" id="view_model_avatar_help">
                        Image size must be less than 10MB
                        </div>
                    </div>



                        <div className='my-4'>
                            <label>Description:</label><br></br>
                            <input type='text' className='border w-full focus:outline-none py-1 rounded' name="description" value={description}  onChange={(e)=>onChange(e)} required/>
                        </div>
                        <div className='my-4'>
                            <label>Available Sizes:</label><br></br>
                            <input type='text'  className='border w-full focus:outline-none py-1 rounded'  name="availableSizes" value={availableSizes} onChange={(e)=>onChange(e)} required/>
                            <small>Seperate sizes with a comma</small>
                        </div>
                        <div className='my-4'>
                            <label>Price:</label><br></br>
                            <input type='text' className='border w-full focus:outline-none py-1 rounded' name="price" value={price}  onChange={(e)=>onChange(e)} required/>
                        </div>
                        <div className='mt-8'>
                                <input type='submit' className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-500 hover:bg-indigo-800'/>
                        </div>
                    </form>
                    
                
                 </div>      
        </Fragment>
    )
}

export default AdminFormProducts
