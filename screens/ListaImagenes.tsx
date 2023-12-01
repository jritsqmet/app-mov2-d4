import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ListaImagenes() {
  const [titulo, settitulo] = useState('')
  const [direccion, setdireccion] = useState('')

  const [lista, setlista] = useState([])

  function guardar(){
    /*
    if( direccion.trim() == ''){
      Alert.alert("Advertencia", 'No se permite que URL esté en blanco')
    }
  */
    if( titulo.trim() === '' || direccion.trim()=== '' ){
      Alert.alert("Advertencia", 'No se permitecampos en blancoen blanco')
    }else{
      const listaTemp: any = [ ...lista, {titulo, direccion} ]
      setlista(listaTemp)
      //console.log(lista)
    }
    
    settitulo('');
    setdireccion('')

  }

  function eliminar(indice: number){
    const listaTemp = lista.filter( (item, i) => ( i!= indice) )
    setlista(listaTemp)
  }


  return (
    <View style={styles.container}>
  
      <TextInput 
        placeholder='Ingrese un título'
        placeholderTextColor={'white'}
        onChangeText={ (texto) => ( settitulo(texto)) }
        value={titulo}
      />

      <TextInput 
        placeholder='Ingrese URL'
        placeholderTextColor={'white'}
        keyboardType='url'
        onChangeText={ (texto)=>(setdireccion(texto)) }
        value={direccion}
      />
       <Button title='GUARDAR' onPress={ ()=> guardar() }/>

       <FlatList
          data ={ lista }      
          renderItem={ ({item, index})  =>(
            <View style={styles.item}>
              <Text>{item.titulo}</Text>
              <Text>{item.direccion}</Text>

              <Button title='ELIMINAR' color={'red'} onPress={ ()=>eliminar(index) }/>
            </View>
          ) }

       />

    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems:'center',
   
  },

  item:{
    backgroundColor: '#ece1d4',
    padding:10,
    marginBottom :10,
    width:250
  }

  
})