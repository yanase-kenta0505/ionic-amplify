<template>
  <authenticator>
    <template v-slot="{ signOut }">
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Blank</ion-title>
          </ion-toolbar>
        </ion-header>
      
        <div id="container">
          <ion-card>
            <ion-card-header>
              タスク追加
            </ion-card-header>
            <ion-card-content>
              <ion-item-group>
                <ion-item>
                  <ion-label position="floating">TaskName</ion-label>
                  <ion-input type="text" v-model="taskname"></ion-input>
                </ion-item>
                <ion-button @click="addTask">
                  追加
                </ion-button>
                <ion-button @click="signOut">
                  サインアウト
                </ion-button>
              </ion-item-group>
            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
    </template>
  </authenticator>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonItemGroup, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from '../graphql/mutations'
import { onCreateTodo } from '@/graphql/subscriptions';
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Auth } from 'aws-amplify';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonItemGroup,
    IonButton,
    Authenticator
  },
   setup() {
    const taskname = ref('')
    const addTask = async () => {
      if (!taskname.value) return
      await API.graphql(graphqlOperation(createTodo,  {input: {"name": taskname.value}}))
      taskname.value = ''
    }

    // const loginUser = async () => { 
    //  return await Auth.currentSession()
    // }
    // console.log(loginUser)

    const onSubscription =  (async () => {
      const subscription = API.graphql(graphqlOperation(onCreateTodo))
      if ("subscribe" in subscription) {
        subscription.subscribe({
          next: (value) => {
            console.log(value)
          }
        })
      }
      
    })()

    

    return {
      taskname,
      addTask
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-item {
  width: 300px; 
}

ion-item-group {
  display: flex;
  justify-content: center;
}

ion-button {
  align-self: flex-end;
  margin-left: 20px;
}


</style>
