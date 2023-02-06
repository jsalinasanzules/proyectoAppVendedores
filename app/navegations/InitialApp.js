import React,{useRef} from 'react'
import { StyleSheet } from 'react-native'
import Toast from "react-native-easy-toast";
import Navigation from './Navegation';


export default function InitialApp() {
    const toastRef = useRef();
    return (<>
       <Navigation toastRef={toastRef}/>
        <Toast ref={toastRef} position="center" opacity={0.9}/>
        </>
    )
}

const styles = StyleSheet.create({})
