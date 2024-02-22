<template>
  <v-container fluid class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row>
        <v-col cols="12">
          <h1 class="green">COM QUAL TIPO DE CORPO VOCÊ SE IDENTIFICA ?</h1>
          <div class="image-container d-flex flex-wrap">
            <img src="../assets/bojoa.png" alt=""  @click="selectSize('a')">
            <img src="../assets/bojob.png" alt=""  @click="selectSize('b')">
            <img src="../assets/bojoc.png" alt=""  @click="selectSize('c')">
            <img src="../assets/bojod.png" alt=""  @click="selectSize('d')">
            <img src="../assets/bojodd.png" alt=""  @click="selectSize('dd')">
            <img src="../assets/bojof.png" alt=""  @click="selectSize('f')">
            <img src="../assets/bojog.png" alt=""  @click="selectSize('g')">
            <img src="../assets/bojoh.png" alt=""  @click="selectSize('h')">
          </div>

          <!-- <div>
            <img v-for="(i, acc) in lstSize" :src="i.url" :key="acc" :value="i.value"  alt="">
            <p>{{ i }}</p> 
          </div> -->
        </v-col>
        <v-col cols="12">
          <div >
         
            <div class="form-group">
      <label for="test" style="display: block; margin-bottom: 8px;">Agora, digite o tamanho do seu tórax:</label>
      <input type="text" id="test" v-model="medidaBusto" placeholder="Qual o tamanho do seu tórax?" style="padding: 16px; border: 1px solid darkorange; width: 400px; display: block; margin: 0 auto">
      <v-btn @click="callApi()">IR</v-btn>
    </div>
          </div>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios'  

  let medidaBusto = ref("");
  let bojo = ref("")
  let isSelected = ref("")

const lstSize = [

{ url:"../assets/bojoa.png", isSelected:false, value:"a"},
{ url:"../assets/bojob.png", isSelected:false, value:"b"},
{ url:"../assets/bojoc.png", isSelected:false, value:"c"},
{ url:"../assets/bojod.png", isSelected:false, value:"d"},
{ url:"../assets/bojodd.png", isSelected:false, value:"dd"},
{ url:"../assets/bojof.png", isSelected:false, value:"f"},
{ url:"../assets/bojog.png", isSelected:false, value:"g"},
{ url:"../assets/bojoh.png", isSelected:false, value:"h"}
]

  const selectSize = (size) => {
    
    bojo = size;
    console.log(bojo)

};
const callApi = () => {

  const appId = '92c0b64c-5fe4-4960-810f-0d6797be4f79';

let data = JSON.stringify({
  "input": {
    "tamanho_bojo": bojo,
    "tamanho_tor_x": medidaBusto
  },
  "stream": false
});

let config = {
  method: 'POST',
  maxBodyLength: Infinity,
  url: `http://localhost:3001/api/apps/${appId}/run`,
  headers: { 
    'Content-Type': 'application/json',
  },
  data : data
};

axios.request(config)
.then((response) => {
  alert(JSON.stringify(response.data.output));
})
.catch((error) => {
  console.log(error);
});




}
</script>

<style scoped lang="scss">
  .image-container {
    display: flex;
    justify-content: center;
  }

  .image-container img {
    width: 250px; /* Set the desired width */
    height: auto; /* Maintain aspect ratio */
    margin: 0 5px; /* Optional: Add some margin between images */


    &:hover{
      zoom: 1fr;
      border: 2px solid black;
    }
  }
</style>
