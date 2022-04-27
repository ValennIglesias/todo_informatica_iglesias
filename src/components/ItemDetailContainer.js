import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig"

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})
    const { Iid } = useParams()

    useEffect(() => {
        const fetchFirestore = async (Iid) => {
            const docRef = doc(db, "products", Iid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return{ id: Iid,
                ...docSnap.data()
                }
            } else {

                console.log("No such document!");
            }
            
            
        }
        fetchFirestore(Iid)
        .then(result=>setDetalle(result))
        .catch(error=>console.log(error))
    }, [Iid])


    return (
        <>
            <ItemDetail item={detalle} />
        </>
    )
}

export default ItemDetailContainer