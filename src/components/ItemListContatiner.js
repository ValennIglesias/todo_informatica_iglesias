import React from "react"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, doc, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig"
import { query, where,  } from "firebase/firestore";
import { orderBy } from "firebase/firestore";

const ItemListContainer = () => {

    const [datos, setDatos] = useState([])
    const { Cid } = useParams()



    useEffect(() => {
        const fetchFirestore = async (Cid) => {
            let q
            if (Cid) {
                q = query(collection(db, "products"), where("Cid", "==", Cid));
            } else {
                q = query(collection(db, "products"), orderBy('name'));
            }
            
            const querySnapshot = await getDocs(q);
            const dataFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFirestore
        }
        fetchFirestore(Cid)
            .then(result => setDatos(result))
            .catch(error => console.log(error))
    }, [Cid]);

    return (
        <>
            <div className="productos"><ItemList products={datos} /></div>
        </>
    )
}

export default ItemListContainer