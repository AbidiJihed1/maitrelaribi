import axios from 'axios'
import {GET_PRODUCT, GET_USER} from '../actiontype/actiontype'

import Swal from 'sweetalert2'
export const get_product = () => async (dispatch) => {
    try {
       await axios.get('https://www.maitrelaaribi.com/api/GEtPost').then((res)=>{
        dispatch({ type: GET_PRODUCT, payload: res.data })

       })

    } catch (error) {
        // Swal.fire({
        //     icon: "error",
        //     title: "Oops..."
        //   });
        }

    
}
export const add_product = (data) => async (dispatch) => {
    try {
        await axios.post('https://www.maitrelaaribi.com/api/AddPoste',data)
        .then((res)=>{
            if(res.data==="Post added"){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Votre Poste a été enregistré.",
                showConfirmButton: false,
                timer: 1500
              })
              dispatch(get_product())
              
            }
          })
        

    } catch (error) {
     console.log(error)

    }
}
export const update_product = (id,data) => async (dispatch) => {
    try {
       const res= await axios.put(`https://www.maitrelaaribi.com/api/Update/${id}`,data)
        if(res.data==="Post updated successfully"){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Votre Poste est Modifer',
              showConfirmButton: false,
              timer: 1500
            })
            dispatch(get_product())
            
          }

    } catch (error) {
     console.log(error)

    }
}

export const delete_product = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://www.maitrelaaribi.com/api/DeletePost/${id}`)
        dispatch(get_product())

    } catch (error) {
     console.log(error)

    }
}
export const get_user = () => async (dispatch) => {
  try {
     await axios.get('https://www.maitrelaaribi.com/api/getuser').then((res)=>{
      dispatch({ type: GET_USER, payload: res.data[0] })

     })

  } catch (error) {
      Swal.fire({
          icon: "error",
          title: "Oops..."
        });
      }

  
}